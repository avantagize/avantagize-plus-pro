import React, { useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Booking: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book a free 30-minute strategy call to discuss your growth goals
              and discover how we can help you achieve them.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-purple-600" />
                <span>30-minute call</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="w-5 h-5 text-purple-600" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              {/* Preferred Calendly widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/avantagize/30min"
                style={{ minWidth: '320px', height: '700px' }}
              />
              {/* Fallback iframe */}
              <noscript>
                <iframe
                  src="https://calendly.com/avantagize/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                ></iframe>
              </noscript>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
