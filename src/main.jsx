import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './componets/Phones.jsx';
import Main from './componets/main.jsx';
import Phone from './componets/phone.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
   
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader:()=> fetch('http://localhost:5000/phones')

      },
      {
        path:"/phone/:id",
        element:<Phone></Phone>,
        loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
