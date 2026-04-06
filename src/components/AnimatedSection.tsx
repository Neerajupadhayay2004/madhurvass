import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "fade-in";
  delay?: number;
}

const animationClasses = {
  "fade-up": "translate-y-10 opacity-0",
  "fade-left": "-translate-x-10 opacity-0",
  "fade-right": "translate-x-10 opacity-0",
  "zoom-in": "scale-95 opacity-0",
  "fade-in": "opacity-0",
};

const AnimatedSection = ({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : animationClasses[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
