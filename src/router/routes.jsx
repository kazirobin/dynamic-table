import { createBrowserRouter } from "react-router";
import Home from "../pages/home.page";
import Error from "../pages/error.page";
import Products from "../pages/products.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement: <Error />,
  },
]);
