"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Apparition d'une section au défilement : opacité 0 → 1, montée de 48 px,
 * flou 6 px → 0, 0,9 s, une seule fois. Rendu direct, sans mouvement,
 * si l'utilisateur a demandé une réduction des animations.
 */
const Reveal = ({ children, className }: { children: ReactNode; className?: string }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
