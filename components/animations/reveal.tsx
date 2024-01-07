"use client";

import React, {
  ButtonHTMLAttributes,
  HTMLProps,
  useEffect,
  useRef,
} from "react";
import { MotionProps, motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type RevealProps = Omit<
  HTMLProps<HTMLDivElement>, // Exclude conflicting HTML button element props
  keyof MotionProps // from Framer Motion's MotionProps interface
> &
  MotionProps & {
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
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: once ?? true,
  });
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
      {...props}
      ref={ref}
      className={twMerge("", className)}
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
