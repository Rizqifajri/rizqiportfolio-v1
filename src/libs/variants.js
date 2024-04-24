export const zoomOut = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 10,
      damping: 5,
    },
  },
};

export const fromLeft = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3 * index,
      type: "spring",
      stiffness: 10,
      damping: 5,
    },
  }),
};

export const fromRight = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3 * index,
      type: "spring",
      stiffness: 10,
      damping: 5,
    },
  }),
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: (index) => ({
    opacity: 1,
    transition: {
      delay: 0.3 * index,
      type: "spring",
      stiffness: 10,
      damping: 5,
    },
  }),
};
