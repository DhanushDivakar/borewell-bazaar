import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const ServiceCard = ({ title, description, image, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative h-[350px] rounded-lg overflow-hidden group",
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-white">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/90 text-center text-sm">{description}</p>
      </div>
    </motion.div>
  );
};