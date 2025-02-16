import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Cookie Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
          This Cookie Policy explains how we use cookies and similar technologies on our platform.
        </p>
        <div className="mt-8 space-y-6 text-gray-700 max-w-4xl mx-auto">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device to improve your experience on our platform.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>
              We use cookies to analyze traffic, personalize content, and provide social media features.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
            <p>
              You can manage your cookie preferences through your browser settings or our cookie consent tool.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;