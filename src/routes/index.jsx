import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import Home from "../pages/home/Home";
import Signin from "../pages/Signin/Signin";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default routes;
