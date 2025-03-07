import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import LoadingGif from "./assets/3aNC.gif";
import Home from "./page/home/home";
import Header from "./componentes/header";
import { ParallaxProvider } from "react-scroll-parallax";
import Vendedor from "./page/vendedor/dashboardV";
import Presupuesto from "./page/vendedor/presupuestoV";
import { Toaster } from "react-hot-toast";
import { AuthLayout } from "./layout/AuthLayout";

const Login = lazy(() => import("./page/login/login"));

function App() {
  return (
    <ParallaxProvider>
      {" "}
      {/* Envuelve la sección relevante */}
      <div>
        <Header />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Suspense
                fallback={
                  <img src={LoadingGif} alt="Cargando..." loading="lazy" />
                }
              >
                <Login />
              </Suspense>
            }
          />
          <Route element={<AuthLayout></AuthLayout>}>
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
