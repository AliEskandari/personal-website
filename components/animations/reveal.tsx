"use client";

import React, { HTMLProps, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type RevealProps = HTMLProps<HTMLDivElement> & {
  delay?: number;
  once?: boolean;

  animate?: "y"[];
};

export default function Reveal({
  children,
  className,
  delay,
  once,
  animate,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px", once: once ?? true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={twMerge("relative", className)}
      animate={animation}
      initial="hidden"
      transition={{ duration: 0.6, ease: "easeInOut", delay: delay ?? 0.15 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
        hidden: {
          opacity: 0,
          y: animate?.includes("y") ? 50 : 0,
          filter: "blur(10px)",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
