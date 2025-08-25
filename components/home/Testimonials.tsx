import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-white min-h-screen px-6">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Inspiring Media. <br /> The Apple Way.
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-600 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Asal Media Group unifies innovation, creativity, and technology —
        shaping the future of entertainment in Somalia.
      </motion.p>

      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800"
        >
          Download Nasiye
        </a>
        <a
          href="#services"
          className="px-6 py-3 rounded-full border border-gray-400 text-gray-900 font-medium hover:border-black"
        >
          Explore Services
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
