import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Function to dynamically set nav link classes based on active state
  const navLinkClass = ({ isActive }) =>
    `text-white transition-colors ${
      isActive ? "text-indigo-400" : "hover:text-indigo-400"
    }`;

  return (
    <header className="backdrop-blur-md w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">react-dashboard-kit</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink to="/components" className={navLinkClass}>
                Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/documentation" className={navLinkClass}>
                Documentation
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li>
              <NavLink
                to="/components"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documentation"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                Documentation
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
