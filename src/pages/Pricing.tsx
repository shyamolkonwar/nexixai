import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for trying out Prism AI"
              features={[
                "1 AI Employee",
                "Basic features",
                "Community support",
                "5 workflows/month",
                "Standard response time"
              ]}
              buttonText="Get Started"
              isPopular={false}
            />
            <PricingCard
              title="Pro"
              price="$49"
              description="Ideal for growing businesses"
              features={[
                "5 AI Employees",
                "Advanced features",
                "Priority support",
                "Unlimited workflows",
                "Custom integrations",
                "Analytics dashboard"
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large organizations"
              features={[
                "Unlimited AI Employees",
                "Enterprise features",
                "24/7 dedicated support",
                "Custom development",
                "SLA guarantees",
                "Advanced security",
                "Training & onboarding"
              ]}
              buttonText="Contact Sales"
              isPopular={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#E8F9FF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQItem
              question="What's included in the free plan?"
              answer="The free plan includes 1 AI employee, basic features, and community support. Perfect for small projects and testing."
            />
            <FAQItem
              question="Can I upgrade or downgrade anytime?"
              answer="Yes! You can change your plan at any time. Upgrades are effective immediately, while downgrades take effect at the end of your billing cycle."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
            />
            <FAQItem
              question="What kind of support do you provide?"
              answer="We offer community support for free plans, priority support for Pro plans, and 24/7 dedicated support for Enterprise plans."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <button className="bg-[#C5BAFF] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 flex items-center mx-auto">
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

const PricingCard = ({ title, price, description, features, buttonText, isPopular }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 relative ${isPopular ? 'border-2 border-[#C5BAFF]' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-[#C5BAFF] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
        Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-2">
        {price}
        {price !== 'Custom' && <span className="text-lg text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Check className="h-5 w-5 text-[#C5BAFF]" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg flex items-center justify-center ${
      isPopular 
        ? 'bg-[#C5BAFF] text-white hover:bg-opacity-90' 
        : 'border-2 border-[#C5BAFF] text-[#C5BAFF] hover:bg-[#C5BAFF] hover:text-white'
    }`}>
      {buttonText}
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Pricing;