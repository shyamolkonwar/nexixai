import React from 'react';
import { Bot, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Nexix AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Prism AI is a platform that empowers businesses to build and deploy real-time AI employees for complex tasks. Our mission is to make AI accessible and actionable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that AI should be accessible to businesses of all sizes. Our platform democratizes AI technology, making it possible for anyone to create and deploy intelligent automation solutions.
              </p>
              <p className="text-lg text-gray-600">
                By providing tools that are both powerful and user-friendly, we're helping businesses transform their operations and achieve new levels of efficiency and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatsCard number="1M+" label="Tasks Automated" />
              <StatsCard number="10K+" label="Active Users" />
              <StatsCard number="98%" label="Satisfaction Rate" />
              <StatsCard number="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#E8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target className="h-8 w-8 text-[#C5BAFF]" />}
              title="Innovation First"
              description="We're constantly pushing the boundaries of what's possible with AI technology."
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-[#C5BAFF]" />}
              title="Customer Success"
              description="Your success is our success. We're committed to helping you achieve your goals."
            />
            <ValueCard
              icon={<Zap className="h-8 w-8 text-[#C5BAFF]" />}
              title="Empowerment"
              description="We believe in giving you the tools to take control of your automation needs."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              name="Sarah Johnson"
              role="CEO & Founder"
              description="Former AI researcher at Stanford, passionate about making AI accessible to everyone."
            />
            <TeamMemberCard
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
              name="Michael Chen"
              role="CTO"
              description="15 years of experience in AI and machine learning, previously at Google AI."
            />
            <TeamMemberCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              name="Emily Rodriguez"
              role="Head of Product"
              description="Product leader with a track record of building successful AI products."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard = ({ number, label }: StatsCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
    <div className="text-3xl font-bold text-[#C5BAFF] mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMemberCard = ({ image, name, role, description }: TeamMemberCardProps) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-[#C5BAFF] font-medium mb-3">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;