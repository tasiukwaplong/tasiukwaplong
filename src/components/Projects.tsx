
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const toolLogos = {
    "Laravel": "https://laravel.com/img/logomark.min.svg",
    "MySQL": "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    "Bootstrap": "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
    "PWA": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Progressive_Web_Apps_Logo.svg",
    "Node.js": "https://nodejs.org/static/images/logo.svg",
    "MongoDB": "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    "WordPress": "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "Linux": "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    "Grafana": "https://grafana.com/static/assets/img/grafana_icon.svg",
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  };

  const projects = [
    {
      name: "EasyBuy4Me",
      description: "Built a full e-commerce and logistics solution for local vendors",
      tools: ["Laravel", "MySQL", "Bootstrap"],
      link: "https://twitter.com/easybuy4me",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      name: "MobileCBT",
      description: "A computer-based testing platform with QR verification and offline sync",
      tools: ["PWA", "Node.js", "MongoDB"],
      link: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    {
      name: "Punch Nigeria CMS",
      description: "Developed internal CMS and automated publishing tools for national newspaper",
      tools: ["WordPress", "AWS", "Linux", "Grafana"],
      link: "#",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop"
    },
    {
      name: "Digital Nasarawa Hub Website",
      description: "Designed and deployed the training & program portal for state innovation hub",
      tools: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Selected Work
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of projects that demonstrate my passion for building solutions that make a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {toolLogos[tool] && (
                        <img 
                          src={toolLogos[tool]} 
                          alt={`${tool} logo`}
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
