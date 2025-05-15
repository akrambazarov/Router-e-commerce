import React, { useState } from 'react'
//Router
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Outlet, Link, NavLink } from 'react-router-dom';
//Icons
import Logo from '../icons/logo'
import Button from './button'
import Menu from '../icons/menu';
import { FacebookIcon } from '../icons/facebook';
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    //Navigation
    <div className=''>
      <nav className="min-lg:container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold flex gap-2 items-center text-[#728cff]"><Logo/>
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#279ef9]" : isActive ? "text-[#728cff]" : ""
            }
            to="/">eatly
            </NavLink>
        </div>
        <ul className="hidden md:flex space-x-8">

          <li className="text-[#000000] hover:text-[#728cff]">
           <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Menu">Menu
            </NavLink>
            </li>
          <li className="text-[#000000] hover:text-[#728cff]">
           <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Blog">Blog
            </NavLink>
            </li>
          <li className="text-[#000000] hover:text-[#728cff]">
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Pricing">Pricing
            </NavLink>
            </li>
          <li className="text-[#000000] hover:text-[#728cff]">
            <NavLink
            className={({isActive,isPending}) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to={'/Contact'}>
            Contact
            </NavLink>
            </li>
        </ul>
        <div className="hidden md:flex space-x-4">
        <Link
        className={'mt-2'}
        to="/Cart"><FacebookIcon size={20} color="#728cff" />
        </Link>
        <Link to={'/LogIn'}><Button text={'Log in'} className={'text-[#606060] '}/></Link>
        <Link to={'/SignUp'}><Button text={'Sign Up'} className={'shadow-2xl bg-[#728cff] text-[#ffffff]'}/></Link>
        </div>
      </nav>
              {/* Menu Mobile */}
      {menu && (
        <nav className='block md:hidden'>
        <ul className=" md:flex  space-x-8">

          <li className="text-[#000000] py-2 px-6 hover:text-[#728cff]">
           <NavLink
           onClick={() => setMenu(false)}
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Menu">Menu
            </NavLink>
            </li>
          <li className="text-[#000000] py-2 px-6 hover:text-[#728cff]">
           <NavLink
           onClick={() => setMenu(false)}
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Blog">Blog
            </NavLink>
            </li>
          <li className="text-[#000000] py-2 px-6 hover:text-[#728cff]">
            <NavLink
            onClick={() => setMenu(false)}
            className={({ isActive, isPending }) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to="/Pricing">Pricing
            </NavLink>
            </li>
          <li className="text-[#000000] py-2 px-6 hover:text-[#728cff]">
            <NavLink
            onClick={() => setMenu(false)}
            className={({isActive,isPending}) =>
            isPending ? "text-[#000000]" : isActive ? "text-[#728cff]" : ""}
            to={'/Contact'}>
            Contact
            </NavLink>
            </li>
        </ul>
        <div className="flex space-x-4 py-1 px-3">
        <Link to={'/LogIn'} onClick={() => setMenu(false)}><Button text={'Log in'} className={'text-[#606060] '}/></Link>
        <Link to={'/SignUp'} onClick={() => setMenu(false)}><Button text={'Sign Up'} className={'shadow-2xl bg-[#728cff] text-[#ffffff]'}/></Link>
        </div>
        <Link to={'/Cart'} onClick={() => setMenu(false)} className='m-6 flex gap-2'> Cart
        <FacebookIcon size={20} color="#728cff" />
        </Link>
        </nav>
      )}
        <Menu className='block md:hidden cursor-pointer absolute right-5 top-6' onClick={() => setMenu(!menu)}/>
    </div>
  )
}

export default Header