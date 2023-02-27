import React from 'react'
import styles from './layout.module.scss'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'

import { AuthActions } from '../../store/reducers'
import { Breadcrumb } from '../Breadcrumb'
import { RootState } from '../../store'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isIndexPage = useMatch('/')
  const token = useSelector<RootState>((state) => state.auth.token)

  React.useEffect(() => {
    if (token) {
      fetch('http://localhost:4000/refresh', { credentials: 'include', method: 'POST' })
        .then(res => res.json())
        .then((data: { ok: boolean, token: string }) => {
          if (data.ok && data.token) {
            dispatch({ type: AuthActions.setToken, payload: data.token })
          }
        })
    } else {
      // navigate('/auth/sign-in', { replace: true })
    }
  }, [token, dispatch, navigate])

  return (
    <>
      <header>
        <Navbar />
        {!isIndexPage && <Breadcrumb />}
      </header>

      <main className={styles.layout}>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}

Layout.defaultProps = {}

export default Layout
