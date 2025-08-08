
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-white overflow-hidden transition-colors duration-500">
      {/* Enhanced Blurred Mesh Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-24 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-400"></div>
        <div className="absolute bottom-32 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-88 h-88 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-800"></div>
      </div>

      {/* Theme Toggle - Positioned absolutely */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-white/20 shadow-2xl">
              <AvatarImage 
                src="/lovable-uploads/f58d12a3-5747-4894-a3ab-a8a2704c2b17.png" 
                alt="Tasiu Kwaplong"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                TK
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Tasiu</span>
            <span className="block text-blue-200 dark:text-blue-300">Kwaplong</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-4 font-medium">
            <span className="text-blue-200 dark:text-blue-300">Software Engineer</span>
            <span className="mx-3">•</span>
            <span className="text-blue-200 dark:text-blue-300">Community Builder</span>
            <span className="mx-3">•</span>
            <span className="text-blue-200 dark:text-blue-300">Startup Mentor</span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            "Empowering people and solving real-world problems through tech."
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/hire" aria-label="Hire me page">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Hire me
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-700 dark:border-slate-300 dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/learn" aria-label="Learn from me page">
                  Learn from me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/tasiukwaplong" className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:tasiukwaplong@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/tasiukwaplong" className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/tasiukwaplong" className="p-3 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800/50 dark:hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
