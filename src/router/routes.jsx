import { createBrowserRouter } from "react-router";
import Home from "../pages/home.page";
import Error from "../pages/error.page";
import Products from "../pages/products.page";
import Carts from "../pages/carts.page";
import Recipes from "../pages/recipes.page";
import Users from "../pages/users.page";

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
  {
    path: "/carts",
    element: <Carts/>,
    errorElement: <Error />,
  },
  {
    path: "/recipes",
    element: <Recipes/>,
    errorElement: <Error />,
  },
  {
    path: "/users",
    element: <Users/>,
    errorElement: <Error />,
  },
]);
