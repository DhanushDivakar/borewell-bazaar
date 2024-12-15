import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export const ContactBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <a
        href="tel:+919606158125"
        className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Phone className="w-5 h-5" />
        <span>+91 9606158125</span>
      </a>
    </motion.div>
  );
};