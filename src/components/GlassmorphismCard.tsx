
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'intense' | 'subtle';
}

const GlassmorphismCard = ({ 
  children, 
  className, 
  variant = 'default' 
}: GlassmorphismCardProps) => {
  const variants = {
    default: "bg-white/10 backdrop-blur-md border border-white/20",
    intense: "bg-white/20 backdrop-blur-xl border border-white/30",
    subtle: "bg-white/5 backdrop-blur-sm border border-white/10"
  };

  return (
    <div className={cn(
      "rounded-xl shadow-xl",
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;
