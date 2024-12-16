import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1574105079757-0c1b8f9c9a06?q=80&w=1932&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container px-4 py-20 text-center relative z-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          One Stop Solution for All
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 mb-8"
        >
          Your trusted partner in borewell solutions for over 15 years
        </motion.p>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          href="tel:+919606158125"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent rounded-full text-white font-semibold hover:bg-accent/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Contact Us Now
        </motion.a>
      </div>
    </section>
  );
};