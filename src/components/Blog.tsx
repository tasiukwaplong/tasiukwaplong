import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      emoji: '📝',
      title: 'How I Built a CBT App with QR Code Verification',
      description: 'A deep dive into building an offline-first, mobile-friendly testing platform.',
      link: 'https://medium.com/@tasiukwaplong/cbt-app-qr-code'
    },
    {
      emoji: '📝',
      title: 'Lessons from Leading 02 Innovations Lab',
      description: 'Reflections on building and managing an innovation community in Northern Nigeria.',
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What I'm Thinking About
        </h2>
        
        <div className="grid md:grid-cols-1 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <span className="text-2xl mr-3">{post.emoji}</span>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;