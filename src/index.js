import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import About from "./Pages/AboutPages"


const root = ReactDOM.createRoot(document.getElementById('root'));
const allRouter =createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"about",
  element:<About/>
},
{
  path:"Projects",
  element:<Projects/>
},
{
  path:"contact",
  element:<Contact/>
}


])

root.render(
  <React.StrictMode>
   <RouterProvider router={allRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
