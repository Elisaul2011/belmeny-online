//import { useEffect } from "react";
//import { validateToken } from "../utils/authentication";
//import Header from "../components/navBar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/footer";
import { useEffect } from "react";
import Scroll from '../components/scrollToTop'

export const AuthLayout = () => {
  //const navigate = useNavigate();

  //useEffect(() => {
  // const getToken = validateToken();
  //  if (!getToken || getToken.expired) {
  //    navigate("/login");
  //  }
  //}, []);

  
    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  
  
  return (
    <div>
      <Outlet/>
      <Scroll/>
      <Footer/>
    </div>
  );
};
