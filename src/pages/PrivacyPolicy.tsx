import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>
        <div className="mt-8 space-y-6 text-gray-700 max-w-4xl mx-auto">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services, as well as to communicate with you.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your information. Contact us if you have any questions or concerns.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;