import React from 'react'
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

import logo from '../../assets/images/Foodtuck.svg'
import { AuthActions } from '../../store/reducers'
import { useBodyScrollLock } from '../../hooks'
import { RootState } from '../../store'

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
      <div className={`container d--f jc--sb ai--c ${showMenu ? styles.open : styles.close}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Foodtuck" />
        </Link>

        <div className={styles.menu}>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Menu
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Pages
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? styles.active : ""}`}
          >
            Contact
          </NavLink>
        </div>

        <div className={styles.actions}>
          <NavLink className={styles.link} to="search">
            <AiOutlineSearch size="24px" />
          </NavLink>
          <NavLink className={styles.link} to="profile">
            <AiOutlineUser size="24px" />
          </NavLink>
          <NavLink className={styles.link} to="car">
            <AiOutlineShopping size="24px" />
          </NavLink>
          {
            isAuth ? (
              <div className={styles.link} onClick={logOut}>
                <AiOutlineLogout size="24px" />
              </div>
            ) : <></>
          }
        </div>

        <button
          className={`${styles.hamburguer} d--f ai--c`}
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
