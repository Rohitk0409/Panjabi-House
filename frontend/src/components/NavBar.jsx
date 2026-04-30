import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Active link style
  const activeClass = "text-amber-400";
  const baseClass = "hover:text-amber-400 text-white transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-amber-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-black">P</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-amber-400">
              PUNJABI HOUSE
            </h1>
            <p className="text-xs text-amber-500 -mt-1 tracking-widest">
              HUB OF CHAAP & CURRIES
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-wh">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:918595502055"
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-zinc-950 border-t border-amber-900 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-8 px-6 gap-6 text-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Menu
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            Contact
          </NavLink>

          <a
            href="tel:8595502055"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 rounded-2xl text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call to Order
          </a>
        </div>
      </div>
    </nav>
  );
}
