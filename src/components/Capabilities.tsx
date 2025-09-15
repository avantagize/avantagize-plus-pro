import React from 'react';
import { 
  Target, 
  Share2, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Users, 
  Globe, 
  Settings 
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Target,
      title: 'Ad Campaigns',
      description: 'High-converting campaigns across Meta, Google, TikTok, and LinkedIn with advanced targeting and optimization.'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Comprehensive social media strategy, content creation, and community management for brand growth.'
    },
    {
      icon: TrendingUp,
      title: 'Business Scaling',
      description: 'Strategic growth planning and execution to scale your business operations and revenue streams.'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Advanced analytics and reporting to measure, analyze, and optimize all marketing performance.'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamlined workflows and automated systems to nurture leads and maximize conversion rates.'
    },
    {
      icon: Users,
      title: 'Audience Development',
      description: 'Build and nurture high-value audiences through strategic content and engagement tactics.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Strategy',
      description: 'Integrated marketing approach across all digital channels for maximum reach and impact.'
    },
    {
      icon: Settings,
      title: 'Conversion Optimization',
      description: 'Systematic testing and optimization of landing pages, funnels, and user experience.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end growth marketing expertise to drive your business forward
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <capability.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};