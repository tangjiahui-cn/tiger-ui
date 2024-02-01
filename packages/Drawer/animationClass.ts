import { css, keyframes } from 'class-css';

export type Direction = 'left' | 'top' | 'right' | 'bottom';

const drawerAppearKeyframes: any = {
  right: keyframes({
    from: {
      transform: 'translate(100%, 0)',
    },
    to: {
      transform: 'translate(0, 0)',
    },
  }),
  bottom: keyframes({
    from: {
      transform: 'translate(0, 100%)',
    },
    to: {
      transform: 'translate(0, 0%)',
    },
  }),
  left: keyframes({
    from: {
      transform: 'translate(-100%, 0)',
    },
    to: {
      transform: 'translate(0, 0%)',
    },
  }),
  top: keyframes({
    from: {
      transform: 'translate(0, -100%)',
    },
    to: {
      transform: 'translate(0, 0%)',
    },
  }),
};

const animationAppearClass: any = {
  right: {
    top: 0,
    right: 0,
    height: '100%',
    transform: 'translate(0, 0)',
  },
  bottom: {
    bottom: 0,
    left: 0,
    width: '100%',
    transform: 'translate(0, 0)',
  },
  left: {
    top: 0,
    left: 0,
    height: '100%',
    transform: 'translate(0, 0)',
  },
  top: {
    top: 0,
    left: 0,
    width: '100%',
    transform: 'translate(0, 0)',
  },
};

const drawerDisAppearKeyframes: any = {
  right: keyframes({
    to: {
      transform: 'translate(100%, 0)',
    },
    from: {
      transform: 'translate(0, 0)',
    },
  }),
  bottom: keyframes({
    to: {
      transform: 'translate(0, 100%)',
    },
    from: {
      transform: 'translate(0, 0%)',
    },
  }),
  left: keyframes({
    to: {
      transform: 'translate(-100%, 0)',
    },
    from: {
      transform: 'translate(0, 0%)',
    },
  }),
  top: keyframes({
    to: {
      transform: 'translate(0, -100%)',
    },
    from: {
      transform: 'translate(0, 0%)',
    },
  }),
};

const animationDisAppearClass: any = {
  right: {
    ...animationAppearClass.right,
    transform: 'translate(100%, 0)',
  },
  bottom: {
    ...animationAppearClass.bottom,
    transform: 'translate(0, 100%)',
  },
  left: {
    ...animationAppearClass.left,
    transform: 'translate(-100%, 0)',
  },
  top: {
    ...animationAppearClass.top,
    transform: 'translate(0, -100%)',
  },
};

export function drawerContentAppear(direction: Direction, delay: number = 300) {
  return css({
    ...animationAppearClass[direction],
    animation: `${drawerAppearKeyframes[direction]} ${delay}ms`,
  });
}

export function drawerContentDisAppear(direction: Direction, delay: number = 300) {
  return css({
    ...animationDisAppearClass[direction],
    animation: `${drawerDisAppearKeyframes[direction]} ${delay}ms`,
  });
}

export function contentAppear(x: number, y: number, delay: number = 300) {
  const appearKeyframes = keyframes({
    from: {
      opacity: 0,
      left: x,
      top: y,
      transform: 'translate(-50%, -50%) scale(0.1,0.1)',
    },
    to: {
      opacity: 1,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(1,1)',
    },
  });
  const appearClass = css({
    opacity: 1,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%) scale(1,1)',
    animation: `${appearKeyframes} ${delay}ms`,
  });
  return appearClass;
}

export function contentDisAppear(x: number, y: number, delay: number = 300) {
  const disAppearKeyframes = keyframes({
    from: {
      opacity: 1,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(1,1)',
    },
    to: {
      opacity: 0,
      left: x,
      top: y,
      transform: 'translate(-50%, -50%) scale(0.1,0.1)',
    },
  });

  const disAppearClass = css({
    pointerEvents: 'none',
    opacity: 0,
    top: ' -100%',
    left: ' -100%',
    transform: 'scale(0.1, 0.1)',
    animation: `${disAppearKeyframes} ${delay}ms`,
  });

  return disAppearClass;
}

export function backgroundAppear(delay: number = 350) {
  const appearBgAnimation = keyframes({
    from: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    to: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });
  const appearBg = css({
    background: 'rgba(0, 0, 0, 0.5)',
    animation: `${appearBgAnimation} ${delay}ms`,
  });
  return appearBg;
}

export function backgroundDisAppear(delay: number = 350) {
  const disAppearBgAnimation = keyframes({
    from: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    to: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  });
  const disAppearBg = css({
    background: 'rgba(0, 0, 0, 0)',
    animation: `${disAppearBgAnimation} ${delay}ms`,
  });
  return disAppearBg;
}
