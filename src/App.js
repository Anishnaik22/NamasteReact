import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./component/Header";
import Body from "./component/Body"
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/ErrorPage";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error/>
  },
  { 
    path:"/about",
    element:<About />
  },
  {
    path:"/Contact",
    element:<Contact/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>)
