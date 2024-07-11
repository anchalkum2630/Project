import React from 'react';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import NavBar from "./components/navbar/NavBar"
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {
  const currentUser=true;
  const Layout=()=>{
    return(
      <div>
         <NavBar/>
         <div>
            <LeftBar/>
            <Outlet/>
            <RightBar/>
         </div>
      </div>
    )
  }
  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
       path:"/",
       element:(
        <ProtectedRoute>
           <Layout/>
       </ProtectedRoute>),
       children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
       ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
