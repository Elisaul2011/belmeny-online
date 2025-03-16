import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const location = {
  lat: 10.650293376791547,
  lng: -71.631540495164,
  name: "Ferreteria Belmeny",
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Belmeny Group</h3>
            <p className="text-white mb-4 font-medium">
              Ofrecemos herramientas y equipos de alta calidad para
              profesionales y entusiastas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/belmenygroupca/?hl=es"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <a
                  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  Av. 28 La Limpia, Zulia, Venezuela
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <a
                  href="https://wa.me/584246375128" //cambiar numero tlf
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <span>+58 424-6375128</span>
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@empresa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer "
                >
                  contacto@belmeny.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Belmeny Group. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
