import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
         {
            path:"/home",
            element:<Home></Home>
         }
      ]
    },
  ]);