import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CheckCircle, Calendar, Clock, ArrowRight, MessageSquare } from 'lucide-react';

const Learn: React.FC = () => {
  useEffect(() => {
    document.title = 'Learn from Me | Mentorship & Training';
    const desc = 'Learn from me: 1-on-1 mentorship and hands-on training. Flexible schedule, project-based learning, WhatsApp support.';
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
        <h1 className="text-3xl md:text-4xl font-bold">Learn from me</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Hybrid training (physical/virtual), 1-on-1 mentorship, and structured, project-based learning. Build and deploy a real project before completion.</p>
      </header>
      <main className="container mx-auto px-4 pb-16">
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap /> Full‑Stack Development</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>HTML, CSS, JavaScript, Laravel, Node.js, MySQL, and using AI effectively.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap /> WordPress Theme & Plugin Dev</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Build custom themes, plugins, and end-to-end WordPress solutions.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap /> Startup Coaching / Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Product strategy, MVP scoping, GTM, and community-driven growth.
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><CheckCircle className="text-primary" /> Format: Hybrid (physical or virtual)</p>
              <p className="flex items-center gap-2"><CheckCircle className="text-primary" /> Type: 1‑on‑1 mentorship & structured hands‑on training</p>
              <p className="flex items-center gap-2"><Calendar className="text-primary" /> Schedule: 3 sessions per week (flexible)</p>
              <p className="flex items-center gap-2"><Clock className="text-primary" /> Duration: Minimum 3 months</p>
              <p className="flex items-center gap-2"><MessageSquare className="text-primary" /> Support: WhatsApp + GitHub reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>Mentorship is billed based on hours per week. Typical plans include 4–8 hours/week.</p>
              <p className="font-medium">Contact for a tailored quote based on goals and availability.</p>
              <a
                href="https://wa.me/2349031514346?text=Hello%2C%20I%20wish%20to%20learn%20from%20you%20and%20would%20like%20more%20details."
                className="inline-flex"
              >
                <Button size="lg" className="">
                  Chat on WhatsApp
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

export default Learn;
