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
import ItemsDetails from "../components/ItemsDetails/ItemsDetails";
import UpdateItem from "../components/UpdateItem/UpdateItem";
import SelectedCategory from "../components/SelectedCategory/SelectedCategory";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
         {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('https://jute-and-timber-zone-server.vercel.app/categories')
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
            element:<AllCraftItem></AllCraftItem>,
            loader: () => fetch('https://jute-and-timber-zone-server.vercel.app/items')
         },
         {
            path:"/items/:id",
            element:<PrivateRoute><ItemsDetails></ItemsDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://jute-and-timber-zone-server.vercel.app/items/${params.id}`)
         },
         {
            path:"/addCraft",
            element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
         },
         {
            path:"/myCraftList",
            element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
         },
         {
            path:"/updateItem/:id",
            element: <UpdateItem></UpdateItem>,
            loader: ({params}) => fetch(`https://jute-and-timber-zone-server.vercel.app/items/${params.id}`)
         },
         {
            path:"/selectedCat/:subcategory_Name",
            element:<SelectedCategory></SelectedCategory>
         }
      ]
    },
  ]);