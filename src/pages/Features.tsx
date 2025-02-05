import React from 'react';
import { Bot, Zap, Settings, Box, Link as LinkIcon, ArrowRight, Shield, Cpu, Workflow } from 'lucide-react';

const Features = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore Prism AI's Features
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how our AI platform can transform your business operations with powerful, easy-to-use features.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureBlock
              icon={<Bot className="h-12 w-12 text-[#C5BAFF]" />}
              title="Realtime AI Employees"
              description="Create AI agents that work 24/7, handling tasks with human-like intelligence. Perfect for customer support, sales, and more."
              features={[
                "Natural language processing",
                "Context-aware responses",
                "Multi-language support",
                "Voice and text capabilities"
              ]}
            />
            <div className="bg-[#E8F9FF] rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&q=80"
                alt="AI Interface"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Features */}
      <section className="bg-[#E8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkflowCard
              icon={<Workflow className="h-8 w-8 text-[#C5BAFF]" />}
              title="Custom Workflows"
              description="Build and customize AI workflows that match your business processes perfectly."
            />
            <WorkflowCard
              icon={<Cpu className="h-8 w-8 text-[#C5BAFF]" />}
              title="Smart Automation"
              description="Automate repetitive tasks with intelligent decision-making capabilities."
            />
            <WorkflowCard
              icon={<Shield className="h-8 w-8 text-[#C5BAFF]" />}
              title="Enterprise Security"
              description="Bank-grade security with end-to-end encryption and compliance features."
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <IntegrationCard name="Slack" />
            <IntegrationCard name="Google Workspace" />
            <IntegrationCard name="Microsoft Teams" />
            <IntegrationCard name="Salesforce" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FBFBFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Transform your business with AI employees today.
          </p>
          <button className="bg-[#C5BAFF] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 flex items-center mx-auto">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureBlock = ({ icon, title, description, features }) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      {icon}
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-lg text-gray-600">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Zap className="h-5 w-5 text-[#C5BAFF]" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WorkflowCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IntegrationCard = ({ name }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="text-[#C5BAFF] mb-2">
      <LinkIcon className="h-8 w-8 mx-auto" />
    </div>
    <p className="font-semibold">{name}</p>
  </div>
);

export default Features;