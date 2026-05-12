import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1]; // expo-out — fast start, elegant deceleration

export const FadeUp = ({ children, delay = 0, duration = 0.65, style, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, ease: EASE, delay }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0, duration = 0.7, style, ...rest }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, ease: 'easeOut', delay }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0, style, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, x: -36 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0, style, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, x: 36 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

// Fires immediately on mount (not scroll-triggered) — use inside the hero/above-fold
export const SlideInLeftLoad = ({ children, delay = 0, duration = 0.75, style, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, x: -48 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, ease: EASE, delay }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

// Wrap a grid container — children with StaggerItem will animate in sequence
export const StaggerContainer = ({ children, stagger = 0.1, style, ...rest }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, style, ...rest }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
    }}
    style={style}
    {...rest}
  >
    {children}
  </motion.div>
);
