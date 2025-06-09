
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface Modern3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const Modern3DCard = ({ 
  children, 
  className, 
  intensity = 1 
}: Modern3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10 * intensity;
    const rotateY = ((centerX - x) / centerX) * 10 * intensity;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "transition-transform duration-200 ease-out transform-gpu",
        className
      )}
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default Modern3DCard;
