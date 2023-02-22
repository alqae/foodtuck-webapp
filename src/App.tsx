import React from 'react'
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ScrollRestoration } from 'react-router-dom'
import { Route } from 'use-react-router-breadcrumbs'

import { Fallback, FormLayout, Layout, NoMatch } from './components'
import { Home, SignUp, SignIn, ForgotPassword } from './pages'

import './styles/global.scss'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <ScrollRestoration /> */}

      <Route path="auth" element={<FormLayout />}>
        <Route path="sign-up" element={<SignUp />} breadcrumb="Sign up" />
        <Route path="sign-in" element={<SignIn />} breadcrumb="Sign In" />
        <Route path="forgot" element={<ForgotPassword />} breadcrumb="Forgot Password" />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} breadcrumb="Home" />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} breadcrumb={"404 Error"} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <React.Fragment>
      <Toaster containerClassName="toast" />
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </React.Fragment>
  )
}

export default App;
