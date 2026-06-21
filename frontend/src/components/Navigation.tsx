import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <span className="text-white font-bold text-lg">Quincy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Dashboard
            </Link>
            <Link to="/companies" className="text-gray-300 hover:text-white transition">
              Companies
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition">
              Portfolio
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-300 hover:text-white transition py-2">
              Dashboard
            </Link>
            <Link to="/companies" className="block text-gray-300 hover:text-white transition py-2">
              Companies
            </Link>
            <Link to="/portfolio" className="block text-gray-300 hover:text-white transition py-2">
              Portfolio
            </Link>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
