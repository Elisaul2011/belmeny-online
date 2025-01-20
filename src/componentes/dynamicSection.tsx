import type { FC } from "react";
import { motion } from "framer-motion";

interface DynamicSectionProps {
  title: string;
  content: string;
  isRightAligned?: boolean;
}

const DynamicSection: FC<DynamicSectionProps> = ({
  title,
  content,
  isRightAligned = false,
}) => {
  return (
    <section
      className={`py-20 ${isRightAligned ? "bg-red-600" : "bg-gray-900"}`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${isRightAligned ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
        >
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: isRightAligned ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
            <p className="text-lg text-gray-300">{content}</p>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white h-64 rounded-lg shadow-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
