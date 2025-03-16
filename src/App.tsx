import { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/navBar";
import { ParallaxProvider } from "react-scroll-parallax";
import Vendedor from "./pages/vendedor/dashboardV";
import Presupuesto from "./pages/vendedor/presupuestoV";
import { Toaster } from "react-hot-toast";
import { AuthLayout } from "./layout/AuthLayout";
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import Catalog from "./pages/catalog/catalog";
import Distributors from "./pages/distributors/distributors";

const Login = lazy(() => import("./pages/login/login"));

function App() {
  return (
    <ParallaxProvider>
      {" "}
      {/* Envuelve la sección relevante */}
      <div>
        <Header />
        <Outlet />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/distributors" element={<Distributors />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route element={<AuthLayout />}>
            <Route path="/Dashboard-vendedor" element={<Vendedor />} />
            <Route path="/nuevo-presupuesto" element={<Presupuesto />} />
          </Route>
        </Routes>
      </div>
      <Toaster />
    </ParallaxProvider>
  );
}

export default App;
