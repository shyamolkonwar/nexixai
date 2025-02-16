import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-[#C5BAFF]" />
              <span className="font-bold text-xl">Nexix AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-[#C5BAFF]">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#C5BAFF]">Pricing</Link>
            {/* <Link to="/blog" className="text-gray-700 hover:text-[#C5BAFF]">Blog</Link> */}
            <Link to="/about" className="text-gray-700 hover:text-[#C5BAFF]">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#7b2cbf]">Contact</Link>
            <button className="bg-[#7b2cbf] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/features" className="block px-3 py-2 text-gray-700 hover:text-[#C5BAFF]">Features</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-[#C5BAFF]">Pricing</Link>
              {/* <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-[#C5BAFF]">Blog</Link> */}
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#C5BAFF]">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#C5BAFF]">Contact</Link>
              <button className="w-full bg-[#7b2cbf] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;