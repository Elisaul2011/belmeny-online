import { useState } from "react";
import { Menu, FileText, User } from "lucide-react";
import { cn } from "../../lib/utils";
import { SideNavigation } from "./sideNavigation";
import { Link } from "react-router";


const documentMenuItems = [
  { label: "Pedidos", href: "/documents/pedidos" },
  { label: "Facturas", href: "/documents/facturas" },
  { label: "Cobranzas", href: "/documents/cobranzas" },
  { label: "Manifiestos", href: "/documents/manifiestos" },
  { label: "Consulta Presupuestos", href: "/documents/consulta-presupuesto" },
  { label: "Nuevo Presupuesto", href: "/nuevo-presupuesto" },
];
const informationMenuItems = [
  { label: "Clientes", href: "/documents/consulta-cliente" },
  { label: "Tracking", href: "/documents/tracking" },
  { label: "Tutoriales", href: "/documents/tutoriales" },
  { label: "Lista de Precios", href: "/documents/lista-precio" },
  { label: "Consulta Top 100", href: "/documents/consulta-top-100" },
];

interface HeaderProps {
  userCode?: string;
  userName?: string;
  userLastName?: string;
}

export function Header({
  userCode = "USR001",
  userName = "John",
  userLastName = "Doe",
}: HeaderProps) {
  const [showDocMenu, setShowDocMenu] = useState(false);
  const [showInfoMenu, setShowInfoMenu] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-600 text-white fixed top-0 w-full z-50">
        <div className="max-w-[1940px] mx-auto">
          <div className="flex h-14 items-center px-4 gap-8">
            {/* Left side - Menu Icon (visible only on mobile) */}
            <button
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              className="p-2 hover:bg-blue-700 rounded-lg transition-colors lg:hidden"
              aria-label={isSideNavOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <Menu className="h-5 w-5" />
            </button>

            

            {/* Center - Navigation Items */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Documentos with dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowDocMenu(true)}
                  onMouseLeave={() => setShowDocMenu(false)}
                  className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Documentos</span>
                </button>

                {/* Dropdown Menu for Documentos */}
                <div
                  onMouseEnter={() => setShowDocMenu(true)}
                  onMouseLeave={() => setShowDocMenu(false)}
                  className={cn(
                    "absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 transform",
                    showDocMenu
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  )}
                >
                  {documentMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Información general with dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowInfoMenu(true)}
                  onMouseLeave={() => setShowInfoMenu(false)}
                  className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Información general</span>
                </button>

                {/* Dropdown Menu for Información general */}
                <div
                  onMouseEnter={() => setShowInfoMenu(true)}
                  onMouseLeave={() => setShowInfoMenu(false)}
                  className={cn(
                    "absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 transform",
                    showInfoMenu
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  )}
                >
                  {informationMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Información General
              <button className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded-lg transition-colors">
                <BarChart2 className="h-5 w-5" />
                <span>Información General</span>
              </button> */}
            </div>

            {/* Right side - Profile */}
            <div className="ml-auto flex items-center gap-2">
              <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm">
                <User className="h-5 w-5" />
                <div className="hidden sm:flex flex-col items-start">
                  <span className="font-medium">{`${userName} ${userLastName}`}</span>
                  <span className="text-xs text-blue-200">{userCode}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <SideNavigation
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
      />
    </>
  );
}

export default Header;
