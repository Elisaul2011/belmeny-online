import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { validateToken } from "../utils/authentication";
import Header from "../componentes/header";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = validateToken();
    if (!getToken || getToken.expired) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {/* <p>Este es mi layout</p> */}
      <div className=" container py-6 z-50">
        <Header />
      </div>
      <Outlet></Outlet>
    </div>
  );
};
