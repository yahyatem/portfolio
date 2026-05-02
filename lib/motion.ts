export const easeSmooth = [0.25, 0.1, 0.25, 1] as const;

export const fadeUpTransition = {
  duration: 0.55,
  ease: easeSmooth,
} as const;

export const purpleGlowKeyframes = [
  "0 0 28px -6px rgba(139, 92, 246, 0.55), inset 0 0 22px -14px rgba(139, 92, 246, 0.25)",
  "0 0 42px -4px rgba(192, 38, 211, 0.45), inset 0 0 28px -10px rgba(139, 92, 246, 0.35)",
  "0 0 28px -6px rgba(139, 92, 246, 0.55), inset 0 0 22px -14px rgba(139, 92, 246, 0.25)",
] as const;

export const primaryGlowKeyframes = [
  "0 0 44px -10px rgba(139, 92, 246, 0.8)",
  "0 0 56px -6px rgba(192, 38, 211, 0.55)",
  "0 0 44px -10px rgba(139, 92, 246, 0.8)",
] as const;
