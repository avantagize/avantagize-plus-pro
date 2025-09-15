import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Scale Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 block">
                Growth Marketing
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help ambitious businesses achieve explosive growth through data-driven marketing strategies, 
              performance optimization, and scalable systems that deliver measurable results.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </button>
            </div>
          </AnimatedSection>

          {/* Feature Highlights */}
          <AnimatedSection delay={600}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Meta/TikTok/Google Ads</h3>
                <p className="text-gray-600">Performance-driven campaigns across all major platforms</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Management</h3>
                <p className="text-gray-600">Build engaged communities and drive organic growth</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics & CRO</h3>
                <p className="text-gray-600">Data-driven optimization for maximum ROI</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};