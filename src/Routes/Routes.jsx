import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllCraftItem from "../Pages/AllCraftItem/AllCraftItem";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
         {
            path:"/",
            element:<Home></Home>
         },
         {
            path:"/login",
            element:<Login></Login>
         },
         {
            path:"/register",
            element:<Register></Register>
         },
         {
            path:"/allCraftItem",
            element:<AllCraftItem></AllCraftItem>
         },
         {
            path:"/addCraft",
            element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
         },
         {
            path:"myCraftList",
            element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
         }
      ]
    },
  ]);