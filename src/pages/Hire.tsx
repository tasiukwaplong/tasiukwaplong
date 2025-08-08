import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';

const Hire: React.FC = () => {
  useEffect(() => {
    document.title = 'Hire Me | Consulting & Development';
    const desc = 'Hire me for part-time development, DevRel, or community advisory. Clear milestones, flexible engagement, and remote-friendly.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <header className="container mx-auto px-4 pt-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold">Hire me</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Part-time software development, DevRel support, and community advisory with clear milestones and delivery.</p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Briefcase /> Part-time Development</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Frontend/Backend, integrations, dashboards, and production support.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Briefcase /> DevRel & Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Documentation, tutorials, demos, community programs, and events.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Briefcase /> Community Advisory</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Program design, training, and mentorship for tech communities.
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><CheckCircle className="text-primary" /> Remote-first, open to on-site as needed</p>
              <p className="flex items-center gap-2"><Calendar className="text-primary" /> Milestone-driven with clear deliverables</p>
              <p className="flex items-center gap-2"><Clock className="text-primary" /> Flexible time blocks (weekly/monthly)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p className="font-medium">Starting at $500/month for remote consulting.</p>
              <p>Pricing varies based on scope, timeline, and complexity. Get a custom quote.</p>
              <a
                href="https://wa.me/2349031514346?text=Hello%2C%20I%20want%20to%20hire%20you%20for%20a%20project.%20Can%20we%20discuss%20scope%20and%20pricing%3F"
                className="inline-flex"
              >
                <Button size="lg">
                  Discuss on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Hire;
