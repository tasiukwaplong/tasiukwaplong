import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Learn = () => {
  const skills = [
    {
      title: 'Full-Stack Web Development',
      description: 'Learn how to build websites and web apps from scratch using Laravel, Node.js, WordPress, HTML/CSS, and MySQL.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Understand the basics of AWS, Linux, server management, and monitoring using tools like Grafana.'
    },
    {
      title: 'Community Leadership',
      description: 'Discover how to build, grow, and lead tech communities through events, mentorship, and structure.'
    },
    {
      title: 'Tech Career Kickstart',
      description: 'Get guidance on CV building, GitHub setup, personal branding, and applying for internships, scholarships, or jobs abroad.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn From Me
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              I love teaching. Whether you're a complete beginner or looking to improve specific skills, 
              I offer practical, hands-on learning in the following areas:
            </p>
          </div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mb-16">
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to learn directly from me? Let's connect.
              </h2>
              <Button 
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <a 
                  href="https://wa.me/2349031514346?text=Hello%2C%20I%20wish%20to%20learn%20from%20you%20about%20your%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with Me on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;