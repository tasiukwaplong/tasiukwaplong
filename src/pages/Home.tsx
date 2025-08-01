import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Linkedin, Github, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Header Section */}
      <header className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20 shadow-2xl">
              <AvatarImage 
                src="/lovable-uploads/f58d12a3-5747-4894-a3ab-a8a2704c2b17.png" 
                alt="Tasiu Kwaplong"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                TK
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tasiu Kwaplong
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-medium">
            Software Developer • Community Leader • DevRel • Mentor
          </p>

          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/hire">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </Button>
            </Link>
            <Link to="/learn">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                Learn from Me
              </Button>
            </Link>
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
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <span className="mr-3">👋🏽</span>
            Who I Am
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              I'm a software developer, trainer, and community builder based in Lafia, Nigeria. 
              Over the past 7+ years, I've helped hundreds of people kickstart careers in tech 
              through training, mentorship, and events.
            </p>
            
            <p className="text-lg md:text-xl mb-6">
              I co-founded EasyBuy4Me (an e-commerce platform) and currently lead 02 Innovations Lab — 
              a space that empowers young people with the tools to solve local problems using technology.
            </p>
            
            <p className="text-lg md:text-xl">
              Whether it's building scalable web apps, organizing DevFest, or mentoring beginner developers, 
              I'm passionate about using tech to drive real-world change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;