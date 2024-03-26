// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function Layout() {
  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
}
