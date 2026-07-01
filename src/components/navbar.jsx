import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Menu" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      {/* Floating Navbar Container */}
      <nav
        className={`mx-auto max-w-5xl transition-all duration-500 rounded-2xl border ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-leaf-100/60 shadow-lg py-3 px-6"
            : "bg-white/60 backdrop-blur-xs border-white/40 shadow-xs py-4 px-6 md:px-8"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Brand Logo & Name */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-leaf-200/40 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/Logo-Icon/user_logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-base font-extrabold tracking-wider text-leaf-950 flex items-center gap-1 group-hover:text-leaf-800 transition-colors">
              DAUN JATI
              <span className="font-cursive text-xs font-normal text-honey-600 lowercase tracking-normal">
                cafe
              </span>
            </span>
          </NavLink>

          {/* Center Navigation Links */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-leaf-800 text-white shadow-md shadow-leaf-950/10"
                        : "text-sand-700 hover:bg-leaf-50 hover:text-leaf-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/order"
              className="bg-honey-500 hover:bg-honey-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-honey-500/10 flex items-center gap-2"
            >
              <ShoppingBag size={14} />
              Order Online
            </NavLink>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sand-700 hover:text-leaf-800 p-2 cursor-pointer focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[250px] mt-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-2 pt-2 border-t border-sand-200">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive ? "bg-leaf-800 text-white" : "text-sand-700 hover:bg-leaf-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink
                to="/order"
                onClick={() => setIsOpen(false)}
                className="w-full bg-honey-500 hover:bg-honey-600 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} />
                Order Online
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}