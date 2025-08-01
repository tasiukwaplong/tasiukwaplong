import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, DollarSign, Calendar } from 'lucide-react';

const Consulting = () => {
  const services = [
    'Part-time remote software development',
    'DevRel support (docs, content, community)',
    'Community advisory or tech training'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How We Can Work Together
        </h2>
        
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <span className="text-3xl mr-4">🧑🏽‍💻</span>
              Available for:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-4 bg-card rounded-lg border">
                <DollarSign className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-semibold">Starting at</p>
                  <p className="text-sm text-muted-foreground">$500/month</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-card rounded-lg border">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-semibold">Clear milestones</p>
                  <p className="text-sm text-muted-foreground">& delivery</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-card rounded-lg border">
                <MessageCircle className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-semibold">Book a session</p>
                  <p className="text-sm text-muted-foreground">Let's chat</p>
                </div>
              </div>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <a 
                href="https://wa.me/2349031514346?text=Hello%2C%20I%20wish%20to%20discuss%20freelance%20or%20consulting%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Reach Out on WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Consulting;