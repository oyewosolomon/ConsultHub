import React, { useState } from 'react';
import { 
  ArrowRight, 
  BarChart, 
  Clock, 
  Users, 
  Building2,
  Filter
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Result[];
  image: string;
  logo: string;
  tags: string[];
}

interface Result {
  metric: string;
  value: string;
  icon: React.FC<{ className?: string }>;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Automating Contract Review Process',
    company: 'Global Law Partners',
    industry: 'Corporate Law',
    challenge: 'Manual contract review taking 12+ hours per document, causing delays and bottlenecks',
    solution: 'Implemented AI-powered contract analysis with automated compliance checking',
    results: [
      { metric: 'Review Time', value: '75% Reduction', icon: Clock },
      { metric: 'Cost Savings', value: '$500K Annually', icon: BarChart },
      { metric: 'Team Efficiency', value: '3x Improvement', icon: Users }
    ],
    image: '/images/legal-1.jpg',
    logo: 'https://logo.clearbit.com/google.com',
    tags: ['Contract Analysis', 'AI Implementation', 'Corporate Law']
  },
  {
    id: '2',
    title: 'Streamlining Multi-jurisdictional Compliance',
    company: 'Martinez Legal',
    industry: 'International Law',
    challenge: 'Complex compliance requirements across multiple jurisdictions causing delays',
    solution: 'Deployed automated compliance checking system with jurisdiction-specific rules',
    results: [
      { metric: 'Compliance Rate', value: '99.9% Accuracy', icon: BarChart },
      { metric: 'Processing Time', value: '60% Faster', icon: Clock },
      { metric: 'Coverage', value: '25 Jurisdictions', icon: Building2 }
    ],
    image: '/images/legal.jpg',
    logo: 'https://logo.clearbit.com/amazon.com',
    tags: ['Compliance', 'International Law', 'Automation']
  },
  {
    id: '3',
    title: 'Case Management Transformation',
    company: 'Smith & Associates',
    industry: 'Family Law',
    challenge: 'Disorganized case management leading to missed deadlines and inefficiencies',
    solution: 'Implemented comprehensive case management system with automated tracking',
    results: [
      { metric: 'Task Completion', value: '40% Faster', icon: Clock },
      { metric: 'Client Satisfaction', value: '95% Rating', icon: Users },
      { metric: 'Revenue Growth', value: '32% Increase', icon: BarChart }
    ],
    image: '/images/legal-1.jpg',
    logo: 'https://logo.clearbit.com/google.com',
    tags: ['Case Management', 'Family Law', 'Client Success']
  }
];

const industries = ['All Industries', 'Corporate Law', 'International Law', 'Family Law'];

const CaseStudiesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const filteredCaseStudies = selectedIndustry === 'All Industries'
    ? caseStudies
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading law firms are transforming their practice with our platform
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex items-center justify-center mb-12 space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <div className="flex space-x-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Case Study Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <img
                  src={study.logo}
                  alt={`${study.company} logo`}
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.company}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <result.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Content */}
                <div className={`space-y-4 ${
                  expandedCase === study.id ? 'block' : 'hidden'
                }`}>
                  <div>
                    <h4 className="font-semibold text-gray-900">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setExpandedCase(
                    expandedCase === study.id ? null : study.id
                  )}
                  className="mt-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>{expandedCase === study.id ? 'Show Less' : 'Read More'}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <span>Schedule a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;