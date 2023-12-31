"use client";

import React, { HTMLProps, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type RevealProps = HTMLProps<HTMLDivElement>;

export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={twMerge("relative", className)}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
          filter: "blur(10px)",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
