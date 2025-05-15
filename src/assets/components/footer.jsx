import React from 'react'
import Logo from '../icons/logo'
import { TelegramIcon } from '../icons/telegram';
import { InstagramIcon } from '../icons/instagram';
import { LinkedInIcon } from '../icons/Linkid';
import { FacebookIcon } from '../icons/facebook';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Outlet, Link, NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#2b3a51] md:py-8 py-3">
      <div className="min-lg:container  mx-auto md:px-4 px-2">
        <nav className="mx-auto px-6 py-4 flex max-md:flex-col md:justify-between md:items-center max-md:gap-4">
        <div className="text-xl md:text-2xl font-bold flex gap-2 items-center text-[#728cff]">
          <Logo/>
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#279ef9]" : isActive ? "text-[#728cff]" : ""
            }
            to="/">eatly
            </NavLink>
        </div>
        <ul className="flex md:space-x-8 space-x-2">

          <li className="text-[#ffffff] hover:text-[#728cff]">
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#ffffff]" : isActive ? "text-[#728cff]" : ""}
            to="/Menu">Menu
            </NavLink>
            </li>
          <li className="text-[#ffffff] hover:text-[#728cff]">
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#ffffff]" : isActive ? "text-[#728cff]" : ""}
            to="/Blog">Blog
            </NavLink>
            </li>
          <li className="text-[#ffffff] hover:text-[#728cff]">
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "text-[#ffffff]" : isActive ? "text-[#728cff]" : ""}
            to="/Pricing">Pricing
            </NavLink>
            </li>
          <li className="text-[#ffffff] hover:text-[#728cff]">
            <NavLink
            className={({isActive,isPending}) =>
            isPending ? "text-[#ffffff]" : isActive ? "text-[#728cff]" : ""}
            to={'/Contact'}>
            Contact
            </NavLink>
            </li>
        </ul>
        </nav>
        <div className="w-full h-0.5 bg-zinc-300 rounded-2xl "></div>
        <div className="flex justify-between items-center my-5 text-[14px] text-[#ffffff]">
          <h1>© 2023 EATLY All Rights Reserved.</h1>
        <div className="flex gap-4">
          <InstagramIcon size={20} color="#728cff" />
          <Link to={'/Cart'}>
          <FacebookIcon size={20} color="#728cff" />
          </Link>
          <LinkedInIcon size={20} color="#728cff" />
          <TelegramIcon size={20} color="#728cff" />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer