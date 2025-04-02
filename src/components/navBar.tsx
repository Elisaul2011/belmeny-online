import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import logo from "../assets/img/logo-BG.png";
import menuData from "../data/menuData";
import type { MenuItem } from "../types/menu";
import { useClickOutside } from "../hooks/useClickOutside";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubmenu = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useClickOutside(navRef, () => {
    setOpenSubmenus({});
  });

  const renderMenuItem = (item: MenuItem, isMobile = false, level = 0) => {
    if (item.externalLink && item.path) {
      return (
        <button
          className={`${isMobile ? "block w-full text-left px-3 py-2 text-sm font-medium text-gray-200 hover:bg-blue-600 rounded-md" : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}`}
          onClick={() => {
            window.open(item.path, item.newTab ? "_blank" : "_self");
            if (isMobile) toggleMenu();
          }}
        >
          {item.title}
        </button>
      );
    }

    // Item with submenu
    if (item.submenu && item.submenu.length > 0) {
      return (
        <div className={isMobile ? "space-y-1" : "relative"}>
          <button
            className={
              isMobile
                ? "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-black hover:bg-gray-300 rounded-md"
                : "flex items-center px-3 py-2 text-sm font-medium hover:bg-gray-300 rounded-md"
            }
            onClick={(e) => toggleSubmenu(item.id, e)}
          >
            {item.title}
            <ChevronDown
              className={`ml-1 h-4 w-4 transform ${openSubmenus[item.id] ? "rotate-180" : ""}`}
            />
          </button>

          {openSubmenus[item.id] && (
            <div
              className={
                isMobile
                  ? "pl-4 space-y-1"
                  : "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              }
            >
              {item.submenu.map((subItem) => (
                <div key={subItem.id}>
                  {renderMenuItem(subItem, isMobile, level + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Regular menu item with path
    if (item.path) {
      return (
        <Link
          to={item.path}
          className={
            isMobile
              ? "block px-3 py-2 text-base font-medium text-black hover:bg-gray-200 rounded-md"
              : level === 0
                ? "px-3 py-2 text-sm font-medium hover:bg-gray-300 rounded-md"
                : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          }
          onClick={() => {
            if (isMobile) toggleMenu();
            setOpenSubmenus({});
          }}
        >
          {item.title}
        </Link>
      );
    }

    // Fallback for items without path or submenu
    return <span className="px-3 py-2 text-sm font-medium">{item.title}</span>;
  };

  return (
    <>
      <div className="h-16" />
      <nav
        className={`fixed top-0 left-0 right-0 bg-white text-black z-40 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        ref={navRef}
      >
        {/* Added relative and z-40 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 w-auto" />
                <span className="ml-2 font-medium">Belmeny Group</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {menuData.map((item) => (
                  <div key={item.id} onClick={(e) => e.stopPropagation()}>
                    {renderMenuItem(item)}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium">
                Mi Cuenta
              </Link>
              <Link to="/register" className="text-sm font-medium ">
                Registro
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuData.map((item) => (
                <div key={item.id}>{renderMenuItem(item, true)}</div>
              ))}
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-black hover:bg-blueteal-600 rounded-md"
                onClick={toggleMenu}
              >
                Mi Cuenta
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-200 rounded-md"
                onClick={toggleMenu}
              >
                Registro
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
