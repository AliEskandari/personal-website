"use client";

import React, { HTMLProps, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type UnderlineProps = HTMLProps<HTMLSpanElement>;

export default function Underline({ children, className }: UnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <span ref={ref} className={twMerge("relative", className)}>
      {children}
      <motion.div
        animate={animation}
        initial="hidden"
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 rounded-xl"
        variants={{
          visible: {
            width: "100%",
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
          hidden: {
            width: 0,
          },
        }}
      />
    </span>
  );
}
