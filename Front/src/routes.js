import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./pages/home/Home.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js";
import App from "./App.js";
import PopWindow from "./pages/home/pop_window.js";
import Dashboard from "./pages/dashboard/dashboard.js";
import MangeBoards from "./pages/MangeBOards/MangeBoards.js";
import CreateBoard from "./pages/MangeBOards/CreateBoard.js";
import UpdateBoard from "./pages/MangeBOards/UpdateBoard.js";
import Guest from "./middleware/Guest.js";

const router = createBrowserRouter([
    {
      path:"",
      element:<App />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        //guest middleware
        {
          element: <Guest />,
          children :[
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },]
        },
        {
          path: "/popwindow",
          element: <PopWindow />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/mangeboards",
          children:[      
            {
              path: "",
              element: <MangeBoards />,
            },
            {
              path: "create",
              element: <CreateBoard />,
            },
          {
            path: "update",
            element: <UpdateBoard />,
          },
        ]},
      ]
    },
    {
      path:'*',
      element:< Navigate to={"/"}/>,
    }
    
  ]);

  export default router;