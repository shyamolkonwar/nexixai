import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
          Please read these Terms of Service carefully before using our platform.
        </p>
        <div className="mt-8 space-y-6 text-gray-700 max-w-4xl mx-auto">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or using our platform, you agree to be bound by these Terms of Service.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p>
              You are responsible for your use of the platform and for any content you provide.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              We are not liable for any damages arising from your use of the platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;