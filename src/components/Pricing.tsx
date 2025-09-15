import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Pricing: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Launch',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for startups and small businesses ready to scale',
      features: [
        'Meta & Google Ads Management',
        'Landing Page Optimization',
        'Monthly Strategy Sessions',
        'Performance Reporting',
        'Email Marketing Setup',
        'Basic Analytics Tracking'
      ],
      popular: false
    },
    {
      name: 'Scale',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses looking to accelerate growth',
      features: [
        'Multi-Platform Ad Management',
        'Advanced CRO & Testing',
        'Social Media Management',
        'Marketing Automation',
        'Weekly Strategy Calls',
        'Advanced Analytics & Reporting',
        'Creative Development',
        'Influencer Partnerships'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '$10,000',
      period: '/month',
      description: 'Enterprise solution for maximum growth and scale',
      features: [
        'Full-Service Growth Marketing',
        'Dedicated Account Team',
        'Custom Strategy Development',
        'Advanced Attribution Modeling',
        'Priority Support & Communication',
        'Quarterly Business Reviews',
        'Custom Integrations',
        'White-Label Reporting'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative ${
                plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToBooking}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25' 
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};