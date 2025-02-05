import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-[#C5BAFF]" />
              <span className="font-bold text-xl">Prism AI</span>
            </div>
            <p className="text-gray-600">
              Build and Deploy Realtime AI Employees for Complex Tasks
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C5BAFF]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C5BAFF]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C5BAFF]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-[#C5BAFF]">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-[#C5BAFF]">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#C5BAFF]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#C5BAFF]">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#C5BAFF]">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C5BAFF]">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#C5BAFF]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C5BAFF]">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#C5BAFF]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Prism AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;