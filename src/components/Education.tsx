
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M.Sc. Computer Science",
      school: "Federal University of Lafia",
      period: "2024–2025",
      status: "In Progress"
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Federal University of Lafia",
      period: "2017–2020",
      status: "Completed"
    },
    {
      degree: "ND. Computer Science",
      school: "Nasarawa State Polytechnic",
      period: "2014–2016",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {edu.school}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.period}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  edu.status === 'In Progress' 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                }`}>
                  {edu.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
