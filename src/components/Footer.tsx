
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, MessageCircle, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          {/* Speaker Branding Kit Button */}
          <div>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <a href="/files/speaker-branding-kit.zip" download>
                <Download className="mr-2 h-4 w-4" />
                Get My Speaker Branding Kit
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/tasiukwaplong" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/tasiukwaplong" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://wa.me/2349031514346" 
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2025 Tasiu Kwaplong. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
