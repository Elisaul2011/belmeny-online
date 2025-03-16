//import { useEffect } from "react";
import { Outlet } from "react-router";
//import { validateToken } from "../utils/authentication";
//import Header from "../components/navBar";
import Footer from "../components/footer";

export const AuthLayout = () => {
  //const navigate = useNavigate();

  //useEffect(() => {
  // const getToken = validateToken();
  //  if (!getToken || getToken.expired) {
  //    navigate("/login");
  //  }
  //}, []);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
