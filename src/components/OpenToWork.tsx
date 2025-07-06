
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Brain, Settings, Cloud, MessageSquare, Globe, TrendingUp, GraduationCap, Calendar } from 'lucide-react';

const OpenToWork = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: GraduationCap,
      title: "Private Web Development Classes",
      description: "One-on-one personalized web development training sessions"
    },
    {
      icon: Calendar,
      title: "Startup Advisory Sessions",
      description: "Book private consultation sessions for strategic startup guidance"
    },
    {
      icon: Users,
      title: "Tech Mentorship & Training",
      description: "Empowering the next generation of developers"
    },
    {
      icon: Brain,
      title: "Community Management",
      description: "Building and nurturing tech communities"
    },
    {
      icon: Settings,
      title: "Startup & Hub Advisory",
      description: "Strategic guidance for early-stage startups"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Consulting",
      description: "Scalable infrastructure and deployment solutions"
    },
    {
      icon: MessageSquare,
      title: "Tech Speaking Engagements",
      description: "Sharing knowledge at conferences and events"
    },
    {
      icon: Globe,
      title: "WordPress + Custom CMS",
      description: "Content management solutions that scale"
    },
    {
      icon: TrendingUp,
      title: "Product Strategy for Early-Stage Startups",
      description: "From idea to market-ready product"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What I Can Help With
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next big idea? Here's how I can add value to your project or organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenToWork;
