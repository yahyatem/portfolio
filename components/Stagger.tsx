"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUpTransition } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "variants">;

export function Stagger({
  children,
  className,
  stagger = 0.08,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.03 },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

export function StaggerItem({ children, className, ...rest }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={item} {...rest}>
      {children}
    </motion.div>
  );
}

/** Hover scale + lift for cards (use inside client components) */
type ScaleHoverProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number;
};

export function ScaleHover({
  children,
  className,
  scale = 1.02,
}: ScaleHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
