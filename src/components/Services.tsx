import React from 'react';
import { Megaphone, Users, Cog } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Strategic campaigns across Meta, Google, TikTok, and LinkedIn that drive qualified leads and maximize ROAS.',
      features: ['Campaign Strategy', 'Creative Development', 'Audience Targeting', 'Performance Optimization']
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Build authentic brand presence and engaged communities across all social platforms with content that converts.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Commerce']
    },
    {
      icon: Cog,
      title: 'Growth Operations',
      description: 'Systematic approach to scaling your business with automation, analytics, and conversion optimization.',
      features: ['Marketing Automation', 'CRO & Testing', 'Analytics Setup', 'Growth Strategy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive growth marketing solutions designed to scale your business at every stage
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};