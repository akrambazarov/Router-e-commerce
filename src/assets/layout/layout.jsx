import React from 'react'
//Router
import { Outlet, Link, NavLink } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
const Layout = () => {
  return (
    <div>
        <Header/>
        <main className='className="min-lg:container mx-auto px-6 py-16'>
           <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout