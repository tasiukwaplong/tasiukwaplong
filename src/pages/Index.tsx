
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import OpenToWork from '../components/OpenToWork';
import Projects from '../components/Projects';
import Speaking from '../components/Speaking';
import Experience from '../components/Experience';
import Volunteer from '../components/Volunteer';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full overflow-x-auto">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <About />
          </TabsContent>
          <TabsContent value="services">
            <OpenToWork />
          </TabsContent>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          <TabsContent value="speaking">
            <Speaking />
          </TabsContent>
          <TabsContent value="experience">
            <Experience />
          </TabsContent>
          <TabsContent value="volunteer">
            <Volunteer />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
          <TabsContent value="skills">
            <Skills />
          </TabsContent>
          <TabsContent value="awards">
            <Awards />
          </TabsContent>
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
