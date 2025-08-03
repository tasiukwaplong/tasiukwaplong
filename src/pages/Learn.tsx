import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, MessageCircle, Calendar, Clock, Users, Video, CheckCircle, MapPin } from 'lucide-react';
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

  const howItWorks = [
    { icon: MapPin, label: 'Format', value: 'Hybrid (Physical or Virtual sessions available)' },
    { icon: Users, label: 'Type', value: '1-on-1 mentorship & structured hands-on training' },
    { icon: Calendar, label: 'Duration', value: 'Minimum 3 months' },
    { icon: Clock, label: 'Schedule', value: '3 sessions per week (flexible timing)' },
    { icon: CheckCircle, label: 'Outcome', value: 'Build and deploy a real project before completion' },
    { icon: Video, label: 'Tools Used', value: 'Google Meet, WhatsApp, GitHub, and project tracking tools' }
  ];

  const studentTestimonials = [
    {
      name: 'Maryam Bala',
      role: 'Frontend Developer Intern',
      quote: 'I started as a complete beginner. After 3 months of learning with Tasiu, I built and deployed my first portfolio site. His mentorship gave me direction, confidence, and real technical skill.',
      avatar: 'MB'
    },
    {
      name: 'Ahmed Yusuf',
      role: 'Now working as a WordPress Developer',
      quote: 'I had no idea how to build WordPress plugins before. Tasiu taught me step-by-step, and I now freelance for 3 clients monthly.',
      avatar: 'AY'
    },
    {
      name: 'Grace Obi',
      role: 'Student, Nasarawa Polytechnic',
      quote: 'The project-based style helped me a lot. I feel proud every time I show my friends the web app I built.',
      avatar: 'GO'
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

          {/* How It Works Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              👨🏽‍🏫 Learn From Me – How It Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {howItWorks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <IconComponent className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">Open to: Beginners, career switchers, and junior developers</span>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-4">💰 Billing: Priced based on hours per week (contact for details)</p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <a 
                    href="https://wa.me/2349031514346?text=Hello%2C%20I%20wish%20to%20learn%20from%20you%20and%20would%20like%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with Me on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Student Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              💬 What My Students Say
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {studentTestimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16 flex-shrink-0">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="mb-3">
                          <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                        </div>
                        <p className="text-muted-foreground italic leading-relaxed mb-2">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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