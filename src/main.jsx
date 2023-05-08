import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AddCoffee from "./assets/Components/ADD Coffee/AddCoffe.jsx";
import Update from "./assets/Components/Update coffee/Update.jsx";
import Main from "./assets/Components/Main/Main.jsx";
import Home from "./assets/Components/Home/Home.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App></App>,
  //   loader: () => fetch("http://localhost:5000/coffee"),
  // },

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "update/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
