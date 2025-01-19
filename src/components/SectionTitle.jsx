import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center my-8"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-orangee to-white/80">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 mt-2 text-lg max-w-md">{subtitle}</p>
      )}
      <div className="w-16 h-1  bg-gradient-to-l from-orangee to-white/80 rounded-full mt-3"></div>
    </motion.div>
  );
};

export default SectionTitle;
