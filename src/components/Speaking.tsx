
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Speaking = () => {
  const events = [
    {
      title: "DevFest Lafia 2023",
      talk: "Empowering Local Innovation Through Community Building",
      location: "Lafia, Nigeria",
      date: "2023",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Skills for All – Nasarawa",
      talk: "Digital Literacy for the Next Generation",
      location: "Nasarawa State, Nigeria",
      date: "2023",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
    },
    {
      title: "NITDA Innovation Series",
      talk: "Scaling Startups in Underrepresented Regions",
      location: "Abuja, Nigeria",
      date: "2023",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      title: "Youth Tech Connect 2024",
      talk: "Building Your First Product as a Student Founder",
      location: "Lagos, Nigeria",
      date: "2024",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where I've Spoken
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and inspiring the next generation of tech innovators across Nigeria and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  <strong>Talk:</strong> {event.talk}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaking;
