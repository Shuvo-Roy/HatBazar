import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from './api/Api';
import Product from './components/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Electronics from './pages/Electronics';

const Layout = ()=>{
  return(
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/mens",
        element: <Mens/>,
        loader: productsData,
      },
      {
        path: "/womens",
        element: <Womens/>,
        loader: productsData,
      },
      {
        path: "/electronics",
        element: <Electronics/>,
        loader: productsData,
      },
    ]
  }
]);


function App() {
  
  return (
    <div className='font-bodyFont'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
