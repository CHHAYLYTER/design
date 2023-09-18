import React, { Children } from 'react'
import Header from './Navigation/Header/header'
import Footer from './Navigation/Footer/footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header />

        <div>{children}</div>

        <Footer />
    </div>
  )
}

export default Layout