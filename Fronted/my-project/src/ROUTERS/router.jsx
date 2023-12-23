import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../component/About.jsx";
import Blog from "../component/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../Dashboard/DashboardLayout.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import UploadBooks from "../Dashboard/UploadBooks.jsx";
import ManageBook from "../Dashboard/ManageBook.jsx";
import EditBooks from "../Dashboard/EditBooks.jsx";
import Signup from "../component/Signup.jsx";
import Login from "../component/Login.jsx";
import PrivateRouth from "../PrivateRouth/PrivateRouth.jsx";
import LogOut from "../component/LogOUt.jsx";
const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/shop",
            element: <Shop />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/book/:id",
            element: <SingleBook />,
            loader: ({ params }) =>
               fetch(`http://localhost:4000/book/${params.id}`),
         },
      ],
   },
   {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            path: "/admin/dashboard",
            element: (
               <PrivateRouth>
                  <Dashboard />
               </PrivateRouth>
            ),
         },
         {
            path: "/admin/dashboard/upload",
            element: <UploadBooks />,
         },
         {
            path: "/admin/dashboard/manage",
            element: <ManageBook />,
         },
         {
            path: "/admin/dashboard/edit/:id",
            element: <EditBooks />,
            loader: ({ params }) =>
               fetch(`http://localhost:4000/book/${params.id}`),
         },
      ],
   },
   {
      path: "/sign-up",
      element: <Signup />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "logout",
      element: <LogOut/>
   }
   
]);

export default router;
