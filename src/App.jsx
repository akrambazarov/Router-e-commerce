import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages
import Home from './assets/pages/home/home';
import Menu from './assets/pages/Menu/menu';
import Blog from './assets/pages/Blog/Block';
import Contact from './assets/pages/Contact/Contact';
import Pricing from './assets/pages/Pricing/Pricing';
import Layout from './assets/layout/layout';
import MenuCategories from './assets/pages/MenuCategories/MenuCategories';
import Cart from './assets/pages/cart/Cart';
import FoodsRestourants from './assets/pages/FoodsRestourants/FoodsRestourants';
import BlogItems from './assets/pages/BlogItems/blogItems';
import LogIn from './assets/pages/LogIn/Login';
import SignUp from './assets/pages/SignUp/SignUp';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'menu',
          element: <Menu />,
        },
        {
          path: 'menu/restourant/:id',
          element: <MenuCategories />
        },
        {
          path:'menu/restourant',
          element: <FoodsRestourants/>
        },
        {
          path:'Cart',
          element: <Cart/>,
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/items/:id',
          element: <BlogItems/>
        },
        {
          path: 'pricing',
          element: <Pricing />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'LogIn',
          element:<LogIn/>
        },
        {
          path: 'SignUp',
          element:<SignUp/>
        }
      ]
    }
  ]);

  return (
    <div className="bg-[#DCEAF3] font-poppins">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;