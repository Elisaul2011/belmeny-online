import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/navBar";
import Vendedor from "./pages/vendedor/dashboardV";
import Supervisor from './pages/supervisor/components/dashboardS'
import Gerente from './pages/gerente/components/dashboardG'
import Presupuesto from "./pages/vendedor/presupuestoV";
import { Toaster } from "react-hot-toast";
import { AuthLayout } from "./layout/AuthLayout";
//import { AuthProvider } from "./layout/AuthContext"
import {CartProvider} from './layout/cartContext'
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import Catalog from "./pages/catalog/catalog";
import Offers from "./pages/offers/offers";
import Distributors from "./pages/concepts-store/conceptsStore";
import Register from "./pages/login/register";
import Postulate from './pages/about-us/jobApplication'

//PRUEBAS
// import P from './utils/Loader'

const Login = lazy(() => import("./pages/login/login"));

function App() {
  return (
  <CartProvider>
    <Router>
        
          <div>
            <Header />
            <Outlet />
            <Routes>
            {/* <AuthProvider> */}
              <Route element={<AuthLayout />}>
              
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/distributors" element={<Distributors />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/register" element={<Register />} />
                <Route path="/postulate" element={<Postulate />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/prueba" element={<P />} /> */}
              <Route element={<AuthLayout />}>
                <Route path="/dashboard-vendedor" element={<Vendedor />} />
                <Route path="/dashboard-supervisor" element={<Supervisor />} />
                <Route path="/dashboard-gerente" element={<Gerente />} />
                <Route path="/nuevo-presupuesto" element={<Presupuesto />} />
              </Route>
              
            {/* </AuthProvider> */}
            </Routes>
          </div>
          <Toaster />
        
    </Router>
  </CartProvider>  
  );
}

export default App;
