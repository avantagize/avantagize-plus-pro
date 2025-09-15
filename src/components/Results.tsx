import React from 'react';
import { Users, DollarSign, TrendingUp, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Results: React.FC = () => {
  const results = [
    {
      icon: Users,
      number: '500+',
      label: 'Clients Served',
      description: 'Businesses scaled across industries'
    },
    {
      icon: DollarSign,
      number: '$50M+',
      label: 'Ad Spend Managed',
      description: 'Optimized for maximum ROI'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average ROI Increase',
      description: 'Within first 6 months'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our track record of delivering exceptional growth for businesses of all sizes
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold mb-2">{result.number}</div>
                <div className="text-xl font-semibold mb-2">{result.label}</div>
                <div className="text-purple-100 text-sm">{result.description}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};