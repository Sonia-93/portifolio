import React, { useState } from 'react';
import { motion } from 'framer-motion';

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'wobble' | 'flip';
  backContent?: React.ReactNode;
  onFlipChange?: (flipped: boolean) => void;
};

export default function InteractiveCard({
  children,
  className = '',
  variant = 'wobble',
  backContent,
  onFlipChange,
}: InteractiveCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [wobbleKey, setWobbleKey] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (variant === 'flip') {
      const next = !flipped;
      setFlipped(next);
      onFlipChange?.(next);
      return;
    }
    setIsActive(true);
    setWobbleKey((k) => k + 1);
  };

  if (variant === 'flip' && backContent) {
    return (
      <div className={`perspective-[1200px] cursor-pointer ${className}`} onClick={handleClick}>
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="w-full h-full"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {backContent}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      key={wobbleKey}
      className={`cursor-pointer ${className} ${isActive ? 'ring-2 ring-primary/40 ring-offset-2 ring-offset-dark-900' : ''}`}
      onClick={handleClick}
      initial={false}
      animate={
        wobbleKey > 0
          ? {
              x: [0, -12, 12, -8, 8, -4, 4, 0],
              rotate: [0, -2, 2, -1.5, 1.5, 0],
              scale: [1, 1.04, 1.02, 1],
            }
          : { x: 0, rotate: 0, scale: 1 }
      }
      transition={{ duration: 0.65, ease: 'easeOut' }}
      onAnimationComplete={() => {
        if (wobbleKey > 0) setIsActive(true);
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}
