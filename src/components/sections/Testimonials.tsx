import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Matthews",
      position: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "ConsultHub connected us with a strategic advisor who transformed our business model. Our revenue grew 300% in just 6 months after implementing their recommendations.",
      rating: 5,
      industry: "Technology",
      consultantName: "Dr. Sarah Chen",
      videoThumbnail: "/images/pet.jpg"
    },
    {
      id: 2,
      name: "Rebecca Torres",
      position: "Founder, HealthTech Solutions",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      quote: "The healthcare expertise we accessed through ConsultHub was instrumental in our successful product launch. The platform made it incredibly easy to find and connect with the right specialist.",
      rating: 5,
      industry: "Healthcare",
      consultantName: "Dr. Emily Parker",
      videoThumbnail: "/images/pet.jpg"
    },
    {
      id: 3,
      name: "David Kim",
      position: "CFO, Growth Ventures",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      quote: "The financial advisory services we received through ConsultHub helped us secure Series B funding. The expert's insights were invaluable throughout the entire process.",
      rating: 5,
      industry: "Finance",
      consultantName: "Michael Roberts",
      videoThumbnail: "/images/pet.jpg"
    }
  ];

  const statistics = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "92%", label: "Return Rate" },
    { value: "5000+", label: "Monthly Sessions" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">See how ConsultHub transforms businesses</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-blue-50">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex items-center">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Testimonial Cards */}
            <div className="flex w-full overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 transform transition-transform duration-500 ease-in-out ${
                    index === activeSlide ? 'translate-x-0' : index < activeSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Video Testimonial */}
                    <div className="relative">
                      <img
                        src={testimonial.videoThumbnail}
                        alt="Video thumbnail"
                        className="rounded-xl shadow-lg w-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="p-4 rounded-full bg-blue-600 bg-opacity-90 hover:bg-opacity-100 transition-opacity">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <Quote className="h-8 w-8 text-blue-600 mb-6" />
                      <p className="text-xl text-gray-700 mb-6">{testimonial.quote}</p>
                      
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">
                          Consulted with: {testimonial.consultantName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;