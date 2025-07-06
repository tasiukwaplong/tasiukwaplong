
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Header />
      <About />
      <OpenToWork />
      <Projects />
      <Speaking />
      <Experience />
      <Volunteer />
      <Education />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
