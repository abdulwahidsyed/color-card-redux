import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { MoreDetails } from "./Pages/MoreDetails/MoreDetails";
import { Cart } from "./Pages/Cart/Cart";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/more-details" element={<MoreDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
