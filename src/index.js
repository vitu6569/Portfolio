import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contacts from "./components/pages/contacts"
import Projects from "./components/pages/projects"
import NotFoundPage from './components/pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/about',
    element: <About/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/projects',
    element: <Projects/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/contacts',
    element: <Contacts/>,
    errorElement: <NotFoundPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
