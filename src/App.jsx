import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AddRecipe } from "./components/addRecipe/AddRecipe";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import EditRecipe from "./components/EditRecipe/EditRecipe";
import { UserProvider } from "./context/userContext";
import ProductedRoute from "./ProductedRoute/ProductedRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      { index: true, element: <Login /> },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "Home",
        element: (
          <ProductedRoute>
            <Home />
          </ProductedRoute>
        ),
      },
      {
        path: "AddRecipe",
        element: (
          <ProductedRoute>
            <AddRecipe />
          </ProductedRoute>
        ),
      },
      {
        path: "EditRecipe/:id",
        element: (
          <ProductedRoute>
            <EditRecipe />
          </ProductedRoute>
        ),
      },
      {
        path: "home/productDetails/:id",
        element: (
          <ProductedRoute>
            <ProductDetails />
          </ProductedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
