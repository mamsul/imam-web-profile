export const navVariants = {
  initial: {
    y: -150,
    x: '-50%',
    opacity: 0.3,
  },
  animate: {
    y: 0,
    x: '-50%',
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      stifness: 1,
      damping: 14,
    },
  },
};
