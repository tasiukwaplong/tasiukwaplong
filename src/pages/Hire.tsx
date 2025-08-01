import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hire = () => {
  const roles = [
    {
      emoji: '🧑🏽‍💻',
      title: 'Hire as Developer Relations Professional',
      summary: 'I help build bridges between developers and products by creating content, organizing events, and fostering community growth.',
      buttonText: 'Download DevRel Profile (PDF)',
      downloadUrl: '/files/devrel-profile.pdf'
    },
    {
      emoji: '💻',
      title: 'Hire as Software Developer',
      summary: 'I design and build scalable, secure, and user-friendly web applications using Laravel, Node.js, and WordPress.',
      buttonText: 'Download Developer CV (PDF)',
      downloadUrl: '/files/developer-cv.pdf'
    },
    {
      emoji: '🌍',
      title: 'Hire as Community Manager',
      summary: 'I\'ve led developer communities of over 1,500 members, organized major tech events, and trained over 2,000 people in digital skills.',
      buttonText: 'Download Community Profile (PDF)',
      downloadUrl: '/files/community-profile.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire Me
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              I'm available for freelance, consulting, speaking, or leadership roles in the following areas:
            </p>
            <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-muted-foreground flex items-center justify-center">
                <span className="text-xl mr-2">🌍</span>
                I'm open to both <strong className="mx-1">remote roles</strong> and <strong className="mx-1">relocation</strong> opportunities (Canada, Germany, UK, Australia). I've worked with async teams and I'm comfortable building across time zones.
              </p>
            </div>
          </div>

          {/* Role Cards */}
          <div className="grid gap-8 mb-16">
            {roles.map((role, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <span className="text-3xl mr-4">{role.emoji}</span>
                    {role.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {role.summary}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <a href={role.downloadUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      {role.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;