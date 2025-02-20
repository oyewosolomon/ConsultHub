import React from 'react';
import { ArrowRight, Users, Video, Shield, Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-28">
        <div className="text-center lg:text-left">
          {/* Main content */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              {/* Stats banner */}
              <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-2 mb-8">
                <span className="text-blue-600 font-medium">
                  10,000+ Verified Specialists
                </span>
                <div className="ml-3 h-4 w-px bg-blue-200" />
                <span className="ml-3 text-blue-600 font-medium">
                  5,000+ Monthly Consultations
                </span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Connect with Expert Consultants 
                <span className="text-blue-600"> in Minutes</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Access verified specialists across 50+ industries. Get personalized consultation through secure video conferencing and document sharing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Find a Consultant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Become a Consultant
                </button>
              </div>

              {/* Feature list */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Verified Experts" },
                  { icon: Video, text: "Video Conferencing" },
                  { icon: Shield, text: "Secure Payments" },
                  { icon: Search, text: "50+ Industries" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                    <span className="ml-3 text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side image/card stack */}
            <div className="hidden lg:block lg:col-span-6">
              <div className="relative mt-12 lg:mt-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-50" />
                  <div className="w-48 h-48 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -ml-12 mt-12" />
                </div>
                
                {/* Expert cards */}
                <div className="relative space-y-4">
                  {[
                    { name: "Sarah Chen", role: "Business Strategy", rating: "4.9" },
                    { name: "Michael Roberts", role: "Financial Advisory", rating: "4.8" },
                    { name: "Dr. Emily Parker", role: "Healthcare Consultant", rating: "5.0" },
                  ].map((expert, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl
                        ${index === 1 ? 'ml-12' : index === 2 ? 'ml-24' : ''}`}
                    >
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-200" />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{expert.name}</h3>
                          <p className="text-sm text-gray-500">{expert.role}</p>
                        </div>
                        <div className="ml-auto">
                          <div className="flex items-center bg-blue-50 rounded-full px-3 py-1">
                            <span className="text-blue-600 font-medium">{expert.rating}</span>
                            <span className="ml-1 text-yellow-400">★</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;