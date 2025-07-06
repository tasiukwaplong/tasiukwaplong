
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm Tasiu, a full-stack developer and community manager from Lafia, Nigeria. Since 2017, I've worn many hats—software engineer, trainer, mentor, tech hub founder, and startup CEO.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I currently manage 02 Innovations Lab, where we help build the next generation of entrepreneurs and developers. I've worked on projects ranging from national-scale training programs to e-commerce platforms and government portals.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm passionate about using technology to solve real problems and helping others find their path in tech.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Building the Future</h3>
                  <p className="text-gray-600 dark:text-gray-400">One line of code at a time</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <div className="text-center">
                  <div className="text-lg font-bold">7+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
