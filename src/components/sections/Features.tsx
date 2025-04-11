import React, { useState } from 'react';
import { Star, MessageCircle, Calendar, Search, Filter } from 'lucide-react';

const FeaturedExperts = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    'All Industries',
    'Business Strategy',
    'Financial Advisory',
    'Technology',
    'Healthcare',
    'Marketing',
    'Legal'
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      industry: 'Business Strategy',
      rating: 4.9,
      reviews: 128,
      rate: '₦2,000/hr',
      availability: 'Next available: Today',
      expertise: ['Strategic Planning', 'Growth Strategy', 'Digital Transformation'],
      image: 'https://randomuser.me/api/portraits/women/21.jpg'
    },
    {
      name: 'Michael Roberts',
      industry: 'Financial Advisory',
      rating: 4.8,
      reviews: 93,
      rate: '₦5,000/hr',
      availability: 'Next available: Tomorrow',
      expertise: ['Investment Banking', 'M&A', 'Venture Capital'],
      image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      name: 'Dr. Emily Parker',
      industry: 'Healthcare',
      rating: 5.0,
      reviews: 156,
      rate: '₦5,000/hr',
      availability: 'Next available: Today',
      expertise: ['Healthcare Policy', 'Medical Technology', 'Clinical Operations'],
      image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    {
      name: 'James Wilson',
      industry: 'Technology',
      rating: 4.9,
      reviews: 142,
      rate: '₦6,000/hr',
      availability: 'Next available: Today',
      expertise: ['Cloud Architecture', 'AI/ML', 'Digital Transformation'],
      image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
      name: 'James Clerk',
      industry: 'Helth care',
      rating: 4.9,
      reviews: 142,
      rate: '₦1,500/hr',
      availability: 'Next available: Today',
      expertise: ['Surgery', 'Optician', 'Medical Technology'],
      image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesIndustry = selectedIndustry === 'all' || expert.industry === selectedIndustry;
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50" id='features'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Experts</h2>
          <p className="text-xl text-gray-600">Connect with top consultants across various industries</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name or expertise..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                className="py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry === 'All Industries' ? 'all' : industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Expert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start mb-4">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-gray-600">{expert.industry}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-700">{expert.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600">{expert.reviews} reviews</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{expert.availability}</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {expert.rate}
                </div>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Session
                </button>
                <button className="flex items-center justify-center w-12 h-10 border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-colors">
                  <MessageCircle className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View All Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperts;