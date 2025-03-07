import {
  FileText,
  BarChart2,
  Settings,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const sideNavItems = [
  {
    section: "Documentos",
    items: [
      { icon: FileText, label: "Pedidos", href: "/documents" },
      { icon: BarChart2, label: "Facturas", href: "/info" },
      { icon: BarChart2, label: "Cobranzas", href: "/info" },
      { icon: BarChart2, label: "Manifiestos", href: "/info" },
      { icon: BarChart2, label: "Consulta Presupuestos", href: "/info" },
      { icon: BarChart2, label: "Nuevo Presupuesto", href: "/nuevo-presupuesto" },
    ],
  },
  {
    section: "Información general",
    items: [
      { icon: Settings, label: "Clientes", href: "/settings" },
      { icon: HelpCircle, label: "Tracking", href: "/help" },
      { icon: HelpCircle, label: "Tutoriales", href: "/help" },
      { icon: HelpCircle, label: "Lista de Precios", href: "/help" },
      { icon: HelpCircle, label: "Consulta TOP 100", href: "/help" },
    ],
  },
];

interface SideNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideNavigation({ isOpen, onClose }: SideNavigationProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Side Navigation */}
      <aside
        className={`
        fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:hidden
      `}
      >
        <nav className="h-full overflow-y-auto py-4">
          {sideNavItems.map((section) => (
            <div key={section.section} className="px-3 mb-6">
              <button
                className="flex items-center justify-between w-full text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3"
                onClick={() =>
                  setOpenSection(
                    openSection === section.section ? null : section.section
                  )
                }
              >
                {section.section}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openSection === section.section ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`space-y-1 ${openSection === section.section ? "block" : "hidden"}`}
              >
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <p className="flex items-center gap-3 px-5 py-2 absolute bottom-0 left-0 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <a
              href="https://wa.me/+584246375128" //cambiar numero tlf
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <span>
                Cualquier problema técnico contacta al +58 424-6375128
              </span>
            </a>
          </p>
        </nav>
      </aside>
    </>
  );
}
