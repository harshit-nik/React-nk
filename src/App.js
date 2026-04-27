import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/BodyComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { CartProvider } from "./components/utils/CartContext";

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Harshit</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);