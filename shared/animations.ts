import { type Variants } from "framer-motion";

// ── Shared animation variants for all templates ──────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

export const slideLeft = (i = 0): Variants => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 },
  },
});

export const slideRight = (i = 0): Variants => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 },
  },
});

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Shared viewport config — apply to any motion element
export const viewportConfig = { once: true, margin: "-50px" };
