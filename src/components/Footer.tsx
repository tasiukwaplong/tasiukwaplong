
import React from 'react';
import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/tasiukwaplong" 
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:tasiukwaplong@gmail.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/tasiukwaplong" 
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/tasiukwaplong" 
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            "The goal isn't just to build tech. It's to build people who can build tech."
          </blockquote>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              © 2024 Tasiu Kwaplong. Made with 
              <Heart className="h-4 w-4 mx-2 text-red-500" fill="currentColor" />
              in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
