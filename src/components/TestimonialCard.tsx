import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ content, author, role }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
    >
      <Quote className="w-8 h-8 text-accent mb-4" />
      <p className="text-lg mb-4">{content}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
};