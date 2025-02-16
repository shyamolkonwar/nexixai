import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-white py-20 flex justify-center items-center">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 font-poppins">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-xl text-black mb-8 font-open-sans">
          Join Prism AI today and automate your workflow in minutes.
        </p>
        <button
          className="px-8 py-4 bg-[#7b2cbf] text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
        >
          Get Started for Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};