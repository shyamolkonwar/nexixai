import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Workflow, Box, Link as LinkIcon, ArrowRight } from 'lucide-react';

const FeatureSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Realtime AI Employees",
      description: "Create AI agents that work in real-time, from answering calls to managing social media.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: <Workflow className="h-12 w-12" />,
      title: "Customizable Workflows",
      description: "Build and customize AI employees for your specific needs with an intuitive, no-code interface.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Box className="h-12 w-12" />,
      title: "Pre-Built AI Employees",
      description: "Use our ready-to-deploy AI agents for common tasks like social media management and lead generation.",
      gradient: "from-pink-400 to-red-500",
    },
    {
      icon: <LinkIcon className="h-12 w-12" />,
      title: "Seamless Integrations",
      description: "Connect with your favorite tools and platforms to streamline your workflow.",
      gradient: "from-red-400 to-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Prism AI Can Do for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From real-time task automation to seamless integrations, Prism AI empowers you to build and deploy AI employees that work smarter, not harder.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7b2cbf] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 inline-flex items-center group"
          >
            Get Started for Free
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, gradient, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="mb-6 text-[#7b2cbf]"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default FeatureSection;