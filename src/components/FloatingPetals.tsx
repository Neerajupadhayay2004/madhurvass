import { useEffect, useState } from "react";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 10 + Math.random() * 14,
}));

const FloatingPetals = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);
  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float-petal text-lotus-pink opacity-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
};

export default FloatingPetals;
