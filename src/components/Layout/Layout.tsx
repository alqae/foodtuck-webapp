import React from 'react'
import styles from './layout.module.scss'
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

export default (_props: Props) => {
  const dispatch = useDispatch()
  const isIndexPage = useMatch('/')
  const navigate = useNavigate()
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
      navigate('/auth/sign-in', { replace: true })
    }
  }, [token])

  return (
    <main className={styles.layout}>
      <header>
        <Navbar />
        {!isIndexPage && <Breadcrumb />}
      </header>

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </main>
  )
}
