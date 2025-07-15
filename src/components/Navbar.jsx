import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded transition ${
      isActive ? "text-indigo-600 font-medium" : "text-gray-600"
    } hover:text-indigo-500`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-indigo-600">
            <span>
              <NavLink
                to="/"
                className={(navLinkClasses, "text-3xl font-extrabold")}
              >
                AnimeArt.io
              </NavLink>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center font-bold">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/text-to-image" className={navLinkClasses}>
              Text to Image
            </NavLink>
            <NavLink to="/image-to-image" className={navLinkClasses}>
              Image to Image
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink
            to="/text-to-image"
            className={navLinkClasses}
            onClick={closeMenu}
          >
            Text to Image
          </NavLink>
          <NavLink
            to="/image-to-image"
            className={navLinkClasses}
            onClick={closeMenu}
          >
            Image to Image
          </NavLink>
        </div>
      )}
    </nav>
  );
}
