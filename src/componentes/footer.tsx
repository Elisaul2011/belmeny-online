import type { FC } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Contacto</h4>
            <p>Email: info@empresa.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: Calle Principal 123, Ciudad</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-red-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-red-600 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-red-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-red-600 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-2xl font-bold mb-4">Empresa</h4>
            <img src="/logo.png" alt="Logo de la empresa" className="h-16" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; 2023 Nombre de la Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
