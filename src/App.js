import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/ErrorPage";
import Cart from "./component/Cart"
import RestaurantMenu from "./component/RestaurantMenu";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
