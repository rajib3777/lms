import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost" | "soft";
};

export default function AnimatedButton({ variant="primary", className, children, ...rest }: Props){
  const base = "focus-ring inline-flex items-center justify-center gap-2 rounded-xl2 px-4 py-2.5 font-medium transition";
  const styles = {
    primary: "btn-grad text-white shadow-soft hover:shadow-glow animate-shimmer",
    ghost: "glass hover:bg-[color-mix(in_srgb,var(--card)_86%,transparent)]",
    soft: "bg-[color-mix(in_srgb,var(--card)_88%,transparent)] border border-[var(--border)] hover:shadow-soft"
  }[variant];

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(base, styles, className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
