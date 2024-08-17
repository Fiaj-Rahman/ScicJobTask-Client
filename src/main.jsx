import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  RouterProvider,
} from "react-router-dom";

import router from './Components/Router/Router.jsx';
import FirebaseProvider from './Components/Authentication/FirebaseProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  
   <FirebaseProvider>
     <RouterProvider  router={router} />
     <ToastContainer />
   </FirebaseProvider>

  </React.StrictMode>,
)
