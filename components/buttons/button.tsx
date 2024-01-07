import { MotionProps, motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>, // Exclude conflicting HTML button element props
  keyof MotionProps // from Framer Motion's MotionProps interface
> &
  MotionProps & {
    variant?: keyof typeof variants;
    isLoading?: boolean;
    loadingText?: string;
    as?: "Link";
    href?: string;
  }; // and add Framer Motion's animation props

const variants = {
  primary: "bg-violet-500 text-white hover:bg-violet-400 active:bg-violet-300",
  secondary: "bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300",
  red: "bg-red-100 text-red-500 hover:bg-red-200 active:bg-red-300",
  dark: "bg-black text-white hover:bg-neutral-800 active:bg-neutral-700",
  outline:
    "text-violet-500 hover:text-violet-400 active:text-violet-300 border border-violet-500 hover:border-violet-400 active:border-violet-300",
  "outline-dark": "text-black hover:text-neutral-800 active:text-neutral-700",
  text: "text-violet-500 hover:text-violet-400 active:text-violet-300",
  none: "p-0",
} as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      loadingText,
      as,
      href,
      ...props
    },
    ref
  ) => {
    const _props = {
      className: twMerge(
        "transition-colors outline-none focus:outline-none rounded-full disabled:cursor-pointer py-3 px-4",
        variants[variant ?? "none"],
        className,
        isLoading && variants.secondary,
        props.disabled && variants.secondary,
        props.hidden && "hidden"
      ),
      disabled: isLoading,
    };
    if (as == "Link") {
      return (
        <Link href={href ?? ""} {..._props}>
          {children as ReactNode}
        </Link>
      );
    }

    return (
      <motion.button ref={ref} type="button" {..._props} {...props}>
        {isLoading && loadingText ? loadingText : children}
      </motion.button>
    );
  }
);

export default Button;
