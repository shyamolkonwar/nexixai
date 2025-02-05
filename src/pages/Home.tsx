import React from 'react';
import { ArrowRight } from 'lucide-react';
import FeatureSection from '../components/FeatureSection';
import UseCasesSection from '../components/UseCasesSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Build Realtime AI Employees in Minutes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Automate complex tasks, from customer support to social media management, with AI that works in real-time.
            </p>
            <div className="mt-8 mb-12 flex justify-center space-x-4">
              <button className="bg-[#7b2cbf] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center text-sm">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border-2 border-[#7b2cbf] text-[#7b2cbf] px-6 py-2 rounded-lg hover:bg-[#7b2cbf] hover:text-white text-sm">
                Book Demo
              </button>
            </div>
            <div className="max-w-3xl mx-auto">
              <iframe 
                className="w-full rounded-xl shadow-lg aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Prism AI has transformed how we manage social media. It's like having an extra team member!"
              author="Sarah Johnson"
              role="Marketing Director"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
            />
            <TestimonialCard
              quote="The AI sales agent has doubled our lead conversion rate. Incredible!"
              author="Michael Chen"
              role="Sales Manager"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
            />
            <TestimonialCard
              quote="Customer support has never been easier. Our response times are down by 80%!"
              author="Emily Rodriguez"
              role="Support Lead"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C4D9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your AI Employees?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join Prism AI today and automate your workflow in minutes.
          </p>
          <button className="bg-[#7b2cbf] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 flex items-center mx-auto">
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

const TestimonialCard = ({ quote, author, role, avatar }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

export default Home;