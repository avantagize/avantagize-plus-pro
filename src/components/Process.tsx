import React from 'react';
import { Search, Wrench, Target, Rocket } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Deep dive into your business, audience, and market to identify growth opportunities and create a strategic foundation.'
    },
    {
      icon: Wrench,
      title: 'Build',
      description: 'Develop comprehensive marketing systems, campaigns, and content strategies tailored to your specific goals and audience.'
    },
    {
      icon: Target,
      title: 'Optimize',
      description: 'Continuously test, analyze, and refine all marketing elements to maximize performance and return on investment.'
    },
    {
      icon: Rocket,
      title: 'Scale',
      description: 'Expand successful strategies across channels and markets to accelerate growth and achieve sustainable results.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to growth that delivers consistent, measurable results
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-600 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};