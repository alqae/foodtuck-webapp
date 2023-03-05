import React from 'react'
import classNames from 'classnames'
import styles from './navbar.module.scss'
import { VscSignIn } from 'react-icons/vsc'
import { FaSignInAlt } from 'react-icons/fa'
import { isMobile } from 'react-device-detect'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { motion, useCycle, useReducedMotion } from 'framer-motion'
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

import { AuthActions } from '../../store/reducers'
import { useBodyScrollLock } from '../../hooks'
import { ToogleIcon } from '../ToogleIcon'
import { RootState } from '../../store'
import { Logo } from '../Logo'

interface Props { }

const Navbar: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useCycle(false, true)
  const isAuth = useSelector<RootState>((state) => !!state.auth.token)
  const logOut = () => dispatch({ type: AuthActions.clearToken })
  const shouldReduceMotion = useReducedMotion()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, toogleScroll] = useBodyScrollLock()

  React.useEffect(() => {
    toogleScroll(expanded)
  }, [expanded, toogleScroll])

  const menuOptions = [
    {
      label: 'My Account',
      to: '/account',
    }
  ]

  const variants = isMobile
    ? {
      initial: { transform: 'translateX(-100%)' },
      whileInView: { transform: 'translateX(0%)' },
      exit: { transform: 'translateX(-100%)' }
    } : {
      initial: { transform: 'translateY(-100%)' },
      whileInView: { transform: 'translateY(0%)' },
      exit: { transform: 'translateY(100%)' },
      viewport: { once: true }
    }

  return (
    <div className={classNames(styles.navbar, 'pt-2', 'pb-2', 'pb-md-4', 'pt-md-4')}>
      <div className={
        classNames(
          'container',
          'd--f',
          'jc--sb',
          'ai--c',
          {
            [styles.open]: expanded,
            [styles.close]: !expanded,
          }
        )}
      >
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        {expanded && <div className={styles.backdrop} onClick={() => setExpanded(0)}></div>}

        <motion.div className={styles.menu} {...variants}>
          <NavLink
            to="/"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            Members
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            About
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive })}
          >
            FAQ
          </NavLink>
        </motion.div>

        <motion.div className={styles.actions} {...variants}>
          <Link className={styles.link} to="shop">
            <AiOutlineSearch size="24px" />
          </Link>

          <Link className={styles.link} to="car">
            <AiOutlineShoppingCart size="24px" />
          </Link>

          {
            isAuth ? (
              <>
                <Link className={styles.link} to="profile">
                  <AiOutlineUser size="24px" />
                </Link>

                <div className={styles.link} onClick={logOut}>
                  <FaSignInAlt size="24px" />
                </div>
              </>
            ) : (
              <Link className={styles.link} to="/auth/sign-in">
                <VscSignIn size="24px" />
              </Link>
            )
          }
        </motion.div>

        <ToogleIcon
          className={classNames(styles.hamburguer, 'd--f', 'ai--c')}
          IconClosed={AiOutlineClose}
          IconOpen={GiHamburgerMenu}
          isToggled={!expanded}
          shouldReduceMotion={shouldReduceMotion}
          onToggleClicked={setExpanded}
          size={32}
        />
      </div>
    </div>
  )
}

Navbar.defaultProps = {}

export default Navbar;
