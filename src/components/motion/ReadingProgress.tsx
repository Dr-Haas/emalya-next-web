"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Fine barre de progression de lecture en haut de page (3 px, couleur principale). */
const ReadingProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-emalya-blue"
      style={{ scaleX }}
    />
  );
};

export default ReadingProgress;
