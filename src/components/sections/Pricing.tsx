import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals seeking expert guidance",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "3 consultation hours per month",
        "Access to 20+ industries",
        "Video conferencing",
        "Basic document sharing",
        "Email support",
        "48-hour response time"
      ],
      highlight: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "10 consultation hours per month",
        "Access to all 50+ industries",
        "Priority video conferencing",
        "Advanced document collaboration",
        "24/7 priority support",
        "24-hour response time",
        "Team access (up to 3 members)",
        "Custom session scheduling"
      ],
      highlight: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited consultation hours",
        "Dedicated expert pool",
        "Premium video conferencing",
        "Enterprise document management",
        "24/7 dedicated support",
        "4-hour response time",
        "Unlimited team access",
        "Custom integration options",
        "Dedicated account manager"
      ],
      highlight: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id='pricing'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your consultation needs</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${isAnnual ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-blue-600 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                  isAnnual ? 'left-9' : 'left-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-lg ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                Annual
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-white shadow-xl border-2 border-blue-600 transform hover:-translate-y-1 transition-all'
                  : 'bg-white shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>
                {isAnnual && (
                  <p className="mt-2 text-sm text-green-600">
                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12} annually
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Looking for custom enterprise solutions? Let's talk about your needs.
          </p>
          <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Contact Our Sales Team
          </button>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 flex items-center justify-center p-6 bg-blue-50 rounded-xl">
          <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
          <p className="text-gray-700">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;