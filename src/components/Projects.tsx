import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Mobile CBT App',
      description: 'QR Verified Exams - Offline-first mobile testing platform',
      link: 'https://github.com/tasiukwaplong/mobilecbt'
    },
    {
      name: 'EasyBuy4Me',
      description: 'Laravel + Logistics Engine - E-commerce platform',
      link: 'https://github.com/tasiukwaplong/easybuy4me'
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What I've Built
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          I build useful tools, platforms, and community-driven solutions. Some of my work is open-source or public.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Github className="mr-3 h-5 w-5" />
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="https://github.com/tasiukwaplong" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </a>
          </Button>
        </div>

        <p className="text-center text-muted-foreground mt-6 font-mono">
          More projects coming soon.
        </p>
      </div>
    </section>
  );
};

export default Projects;