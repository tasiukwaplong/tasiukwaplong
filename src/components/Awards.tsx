
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Users, Cloud } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Most Innovative Business",
      year: "2022",
      description: "Recognized for innovative solutions in local commerce"
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      year: "2x",
      description: "Multiple hackathon victories showcasing technical excellence"
    },
    {
      icon: Users,
      title: "Google Hustle Academy Graduate",
      year: "2023",
      description: "Completed Google's entrepreneurship program"
    },
    {
      icon: Cloud,
      title: "Google Cloud Certified Architect",
      year: "2023",
      description: "Certified in cloud architecture and solutions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Awards & Recognitions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <award.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {award.title}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
