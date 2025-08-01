import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Tasiu is a brilliant community builder. He helped us train over 500 youths in just 3 months!",
      author: "Digital Nasarawa Hub Coordinator"
    },
    {
      quote: "Working with Tasiu on our e-commerce project was seamless — he's both technical and strategic.",
      author: "Co-founder, EasyBuy4Me"
    },
    {
      quote: "He's one of the few tech leads I've met who truly knows how to mentor and lead at the same time.",
      author: "Volunteer, GDG Lafia"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Others Say About Me
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-muted-foreground italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-foreground">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;