import { createBrowserRouter } from "react-router";
import Home from "../pages/home.page";
import Error from "../pages/error.page";
import Products from "../pages/products.page";
import Carts from "../pages/carts.page";
import Recipes from "../pages/recipes.page";
import Users from "../pages/users.page";
import MainLayout from "../components/layout/main.layout.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: (
      <MainLayout>
        <Products />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/carts",
    element: (
      <MainLayout>
        <Carts />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/recipes",
    element: (
      <MainLayout>
        <Recipes />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/users",
    element: (
      <MainLayout>
        <Users />
      </MainLayout>
    ),
    errorElement: <Error />,
  },
]);
