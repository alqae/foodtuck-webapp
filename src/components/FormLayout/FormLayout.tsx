import React from 'react'
import { useSelector } from 'react-redux'
import styles from './form-layout.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'

import { Breadcrumb } from '../Breadcrumb'
import { RootState } from '../../store'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

interface Props {
  children?: React.ReactNode
}

export default (_props: Props) => {
  const navigate = useNavigate()
  const token = useSelector<RootState>((state) => state.auth.token)

  React.useEffect(() => {
    if (token) {
      console.warn('passou');
      navigate('/', { replace: true })
    }
  }, [token])

  return (
    <main>
      <header>
        <Navbar />
        <Breadcrumb />
      </header>

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
