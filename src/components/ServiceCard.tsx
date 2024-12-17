import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, image, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 mb-4 text-accent flex items-center justify-center rounded-full bg-accent/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};