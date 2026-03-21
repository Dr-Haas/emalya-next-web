"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapFadeIn<T extends HTMLElement = HTMLDivElement>(options?: {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: options?.y ?? 40 },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.8,
          delay: options?.delay ?? 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: options?.start ?? 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    scale?: boolean;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.querySelectorAll(childSelector);
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: options?.y ?? 30,
          scale: options?.scale ? 0.92 : 1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options?.duration ?? 0.7,
          stagger: options?.stagger ?? 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: options?.start ?? 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
