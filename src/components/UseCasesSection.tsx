import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Users, PhoneCall, BarChart3, Play, ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
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

  const useCases = [
    {
      icon: <MessageSquare className="w-16 h-16" />,
      title: "AI Social Media Manager",
      description: "Create, schedule, and engage with content in real-time.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <PhoneCall className="w-16 h-16" />,
      title: "AI Customer Support Agent",
      description: "Answer calls and resolve tickets 24/7.",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "AI Sales Representative",
      description: "Generate leads, make calls, and close deals faster.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-16 h-16" />,
      title: "AI Market Research Analyst",
      description: "Scrape data, analyze trends, and generate insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#E8F9FF] to-[#FBFBFB] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            Transform Your Workflow with AI Employees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-[600px] mx-auto"
          >
            From social media management to customer support, Prism AI empowers you to automate complex tasks in real-time.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
                title="Prism AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <Play className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg bg-[#7b2cbf] hover:bg-opacity-90 transition-all duration-200"
          >
            Start Building Your AI Team
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const UseCaseCard = ({ icon, title, description, image, gradient }) => {
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
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl -z-10`} />
      <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="relative mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className={`absolute -top-4 -right-4 p-4 bg-gradient-to-r ${gradient} rounded-2xl text-white shadow-lg`}
          >
            {icon}
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 max-w-[250px]">{description}</p>
        
        <motion.div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default UseCasesSection;