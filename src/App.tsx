import React from 'react'
import { Toaster } from 'react-hot-toast'
// import { ScrollRestoration } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'
import { Route } from 'use-react-router-breadcrumbs'
import { RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import { Fallback, FormLayout, Layout, NoMatch } from './components'
import {
  Home,
  Menu,
  Blog,
  Pages,
  About,
  Shop,
  Contact,
  SignUp,
  SignIn,
  ForgotPassword
} from './pages'

// Import global styles
import './styles/global.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const router = createBrowserRouter(
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
        <Route path="menu" element={<Menu />} breadcrumb="Menu" />
        <Route path="blog" element={<Blog />} breadcrumb="Blog" />
        <Route path="pages" element={<Pages />} breadcrumb="Pages" />
        <Route path="about" element={<About />} breadcrumb="About" />
        <Route path="shop" element={<Shop />} breadcrumb="Shop" />
        <Route path="contact" element={<Contact />} breadcrumb="Contact" />
        <Route path="*" element={<NoMatch />} breadcrumb="404 Error" />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <React.Fragment>
      <Toaster containerClassName="toast" />
      {/* <AnimatePresence> */}
        <RouterProvider router={router} fallbackElement={<Fallback />} />
      {/* </AnimatePresence> */}
    </React.Fragment>
  )
}

export default App;
