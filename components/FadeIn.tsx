"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUpTransition } from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ ...fadeUpTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
