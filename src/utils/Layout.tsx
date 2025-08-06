import React from 'react'
import UpperNav from '../section/Navbar/UpperNav'
import Navbar from '../section/Navbar/Navbar'
import Footer from '../section/Footer'

const Layout = ({children}) => {


    
  return (
    <>
    <UpperNav/>
     <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}

export default Layout