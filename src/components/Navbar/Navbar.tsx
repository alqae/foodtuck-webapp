import React from 'react'
import classNames from 'classnames'
import styles from './navbar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { motion, useCycle, useReducedMotion } from 'framer-motion'
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineLogout,
  AiOutlineClose,
} from 'react-icons/ai'

import { useBodyScrollLock, useIsSmall } from '../../hooks'
import { AuthActions } from '../../store/reducers'
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
  console.warn(useIsSmall());
  const variants = useIsSmall()
    ? {
      initial: { transform: 'translateX(-100%)' },
      whileInView: { transform: 'translateX(0%)' },
      exit: { transform: 'translateX(-100%)' }
    }
    : {
      initial: { transform: 'translateY(-100%)' },
      whileInView: { transform: 'translateY(0%)' },
      exit: { transform: 'translateY(100%)' }
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

        <div className={styles.actions}>
          <Link className={styles.link} to="search">
            <AiOutlineSearch size="24px" />
          </Link>
          <Link className={styles.link} to="profile">
            <AiOutlineUser size="24px" />
          </Link>
          <Link className={styles.link} to="car">
            <AiOutlineShopping size="24px" />
          </Link>
          {
            isAuth ? (
              <div className={styles.link} onClick={logOut}>
                <AiOutlineLogout size="24px" />
              </div>
            ) : <React.Fragment />
          }
        </div>

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
