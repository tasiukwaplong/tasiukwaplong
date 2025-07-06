
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Punch Nigeria Ltd.",
      period: "2024 – Present",
      description: "Developing and maintaining web applications for Nigeria's leading newspaper"
    },
    {
      title: "Founder & Hub Manager",
      company: "02 Innovations Lab",
      period: "2022 – Present",
      description: "Building the next generation of entrepreneurs and developers"
    },
    {
      title: "Founder/CEO",
      company: "EasyBuy4Me",
      period: "2022 – 2024",
      description: "E-commerce and logistics solution for local vendors"
    },
    {
      title: "Training Facilitator",
      company: "Digital Nasarawa Innovation Hub",
      period: "2022 – 2023",
      description: "Facilitating digital skills training programs"
    },
    {
      title: "CTO",
      company: "Startup Nasarawa",
      period: "2017 – 2019",
      description: "Leading technical strategy and development"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Journey So Far
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <span className="text-blue-600 font-medium text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
