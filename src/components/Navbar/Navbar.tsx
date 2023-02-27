import React from 'react'
import classNames from 'classnames'
import styles from './navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineLogout,
  AiOutlineClose,
} from 'react-icons/ai'

import { AuthActions } from '../../store/reducers'
import { useBodyScrollLock } from '../../hooks'
import { RootState } from '../../store'
import { Logo } from '../Logo'

interface Props { }

const Navbar: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = React.useState(false)
  const isAuth = useSelector<RootState>((state) => !!state.auth.token)
  const logOut = () => dispatch({ type: AuthActions.clearToken })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, toogleScroll] = useBodyScrollLock()

  React.useEffect(() => {
    toogleScroll(showMenu)
  }, [showMenu, toogleScroll])

  return (
    <div className={styles.navbar}>
      <div className={
        classNames(
          'container',
          'd--f',
          'jc--sb',
          'ai--c',
          {
            [styles.open]: showMenu,
            [styles.close]: !showMenu,
          }
        )}
      >
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>

        <div className={styles.menu}>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            Members
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            FAQ
          </NavLink>
        </div>

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
            ) : <></>
          }
        </div>

        <button
          className={classNames(styles.hamburguer, 'd--f', 'ai--c')}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <AiOutlineClose size="40px" /> : <GiHamburgerMenu size="40px" />}
        </button>
      </div>
    </div>
  )
}

Navbar.defaultProps = {}

export default Navbar;
