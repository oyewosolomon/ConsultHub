import React, { useState } from 'react';
import { Menu, X, User, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Find Experts', href: '#features' },
    // { label: 'Industries', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Resources', href: '#resources' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
          <svg fill="#2563eb" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M495.26,89.044h-267.13c-9.22,0-16.696,7.475-16.696,16.696v50.087h-69.009v267.13h219.27c0.001,0,0.001,0,0.002,0 c9.297-0.002,16.693-7.599,16.693-16.696v-50.087h116.87c9.22,0,16.696-7.475,16.696-16.696V105.739 C511.955,96.519,504.48,89.044,495.26,89.044z M344.999,379.246l-46.146-23.072h46.146V379.246z M311.608,256l-33.391-33.391 l33.391-33.391l33.391,33.391L311.608,256z M411.782,256l-33.391-33.391l33.391-33.391l33.391,33.391L411.782,256z"></path> </g> </g> <g> <g> <path d="M66.827,166.957c-14.706,0-28.68-3.186-41.272-8.902v337.25c0,9.22,7.475,16.696,16.696,16.696h50.087 c9.22,0,16.696-7.475,16.696-16.696c0-12.03,0-325.561,0-337.544v-0.144C96.199,163.604,81.899,166.957,66.827,166.957z"></path> </g> </g> <g> <g> <path d="M66.827,0C30.001,0,0.045,29.956,0.045,66.783c0,36.826,29.956,66.783,66.783,66.783s66.783-29.956,66.783-66.783 C133.61,29.956,103.653,0,66.827,0z"></path> </g> </g> </g></svg>
            <a href="#" className="text-2xl font-bold text-gray-900">
              ConsultHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Authentication and CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                <User className="w-5 h-5 mr-2" />
                Account
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Login
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;