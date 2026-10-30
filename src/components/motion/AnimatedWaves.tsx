"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fond de la première section : trois vagues (beige, corail clair, fine ligne corail).
 * Elles se dessinent au chargement (pathLength 0 → 1, 2,2 s, départs décalés),
 * puis ondulent en boucle en interpolant deux formes de même structure.
 */
const WAVES = [
  {
    // Vague beige, épaisse
    from: "M-200 500 C100 300 400 900 800 300 C1200 -300 1400 400 1600 200",
    to: "M-200 460 C120 360 420 820 800 340 C1180 -200 1420 460 1600 240",
    stroke: "#FEEBDA",
    width: 120,
    opacity: 1,
    delay: 0,
    loop: 11,
  },
  {
    // Vague corail clair
    from: "M-100 600 C200 400 500 1000 900 400 C1300 -200 1500 500 1700 300",
    to: "M-100 560 C220 470 520 920 900 440 C1280 -120 1520 540 1700 340",
    stroke: "#FFBBAB",
    width: 40,
    opacity: 0.25,
    delay: 0.35,
    loop: 13,
  },
  {
    // Fine ligne corail
    from: "M-100 680 C250 520 560 1040 960 480 C1320 -40 1520 560 1700 420",
    to: "M-100 640 C270 590 580 960 960 520 C1300 40 1540 600 1700 460",
    stroke: "#FFBBAB",
    width: 2,
    opacity: 0.9,
    delay: 0.7,
    loop: 9,
  },
];

const AnimatedWaves = () => {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1200" height="800" fill="#FBFAF3" />
      {WAVES.map((wave) =>
        reduceMotion ? (
          <path
            key={wave.stroke + wave.width}
            d={wave.from}
            stroke={wave.stroke}
            strokeWidth={wave.width}
            strokeOpacity={wave.opacity}
            strokeLinecap="round"
          />
        ) : (
          <motion.path
            key={wave.stroke + wave.width}
            d={wave.from}
            stroke={wave.stroke}
            strokeWidth={wave.width}
            strokeOpacity={wave.opacity}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, d: [wave.from, wave.to, wave.from] }}
            transition={{
              pathLength: { duration: 2.2, delay: wave.delay, ease: "easeInOut" },
              d: {
                duration: wave.loop,
                delay: 2.2 + wave.delay,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          />
        ),
      )}
    </svg>
  );
};

export default AnimatedWaves;
