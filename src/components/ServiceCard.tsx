import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 mb-4 text-accent flex items-center justify-center rounded-full bg-accent/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};