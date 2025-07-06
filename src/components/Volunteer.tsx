
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { users, mic, handshake, earth } from 'lucide-react';

const Volunteer = () => {
  const volunteerExperiences = [
    {
      icon: users,
      organization: "Google Developer Groups (GDG) Lafia",
      role: "Lead Organizer",
      period: "2022 – Present",
      summary: "Grew the local developer community to 1,500+ members. Organized meetups, DevFest events, and technical training sessions.",
      logo: "https://developers.google.com/static/community/gdg/images/gdg-social-share.png"
    },
    {
      icon: mic,
      organization: "Google Developer Student Clubs & Twitter DSC",
      role: "Mentor / Volunteer Trainer",
      period: "2020 – 2022",
      summary: "Mentored students on projects, helped organize hackathons, and promoted tech community growth.",
      logo: "https://developers.google.com/static/community/dsc/images/dsc-social-share.png"
    },
    {
      icon: handshake,
      organization: "Young Innovators of Nigeria (YIN)",
      role: "Mentor / Program Facilitator",
      period: "2021 – Present",
      summary: "Facilitated entrepreneurship and innovation workshops targeting students and early-stage entrepreneurs.",
      emoji: "🧑‍🏫"
    },
    {
      icon: earth,
      organization: "NASA Space Apps Challenge (Nigeria Chapter)",
      role: "Volunteer Organizer / Judge",
      period: "2019 – 2022",
      summary: "Supported global hackathon locally by mentoring participants and evaluating solutions.",
      logo: "https://www.spaceappschallenge.org/assets/images/share-image.jpg"
    },
    {
      icon: users,
      organization: "Ingressive for Good (I4G) / Financial Services Innovators (FSI)",
      role: "Community Advocate",
      period: "Ongoing",
      summary: "Helped promote and coordinate opportunities for training, funding, and exposure for Northern Nigerian developers.",
      emoji: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Giving Back
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-4">
              "Tech isn't just about building apps. It's about building people and opportunities."
            </blockquote>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Timeline Layout */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>
            
            {volunteerExperiences.map((experience, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>
                
                {/* Content */}
                <Card className="w-full md:ml-20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          {experience.emoji ? (
                            <span className="text-2xl">{experience.emoji}</span>
                          ) : (
                            <experience.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.organization}
                          </h3>
                          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                            {experience.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                          {experience.role}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {experience.summary}
                        </p>
                        {experience.logo && (
                          <div className="mt-4">
                            <img 
                              src={experience.logo} 
                              alt={`${experience.organization} logo`}
                              className="h-8 w-auto object-contain opacity-70"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Impact Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1,500+</div>
            <div className="text-gray-700 dark:text-gray-300">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-700 dark:text-gray-300">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
            <div className="text-gray-700 dark:text-gray-300">People Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
