'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    // Hide default cursor when over the page
    document.body.style.cursor = 'none';

    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block w-2 h-2 bg-primary rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
          mass: 0.1
        }}
      />

      {/* Following circle */}
      <motion.div
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[998] hidden md:block rounded-full border-2",
          isDarkMode ? "border-white/30" : "border-black/30"
        )}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          width: 48,
          height: 48
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.4
        }}
      />
    </>
  );
}
