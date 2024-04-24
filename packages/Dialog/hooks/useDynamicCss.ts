import { useRef } from 'react';
import { createClassCss } from 'class-css';

interface Operate {
  contentAppear: (x: number, y: number, delay?: number) => string;
  contentDisAppear: (x: number, y: number, delay?: number) => string;
  backgroundAppear: (delay?: number) => string;
  backgroundDisAppear: (delay?: number) => string;
}

const throwFn: any = () => {
  throw new Error('dynamicCss is not init');
};

const INIT: Operate = {
  contentAppear: throwFn,
  backgroundAppear: throwFn,
  contentDisAppear: throwFn,
  backgroundDisAppear: throwFn,
};

export function useDynamicCss(prefix: string) {
  const ref = useRef<
    Operate & {
      init?: boolean;
    }
  >(INIT);

  const dynamicCss = useRef<{
    css: (o: any) => string;
    keyframes: (o: any) => string;
  }>();

  if (!ref.current?.init) {
    if (!dynamicCss.current) {
      dynamicCss.current = createClassCss({ key: `${prefix}-dynamic` });
    }

    function contentAppear(x: number, y: number, delay: number = 300) {
      const appearKeyframes =
        dynamicCss.current?.keyframes({
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
        }) || '';
      const appearClass =
        dynamicCss.current?.css({
          opacity: 1,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) scale(1,1)',
          animation: `${appearKeyframes} ${delay}ms`,
        }) || '';
      return appearClass;
    }

    function contentDisAppear(x: number, y: number, delay: number = 300) {
      const disAppearKeyframes =
        dynamicCss.current?.keyframes({
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
        }) || '';

      const disAppearClass =
        dynamicCss.current?.css({
          pointerEvents: 'none',
          opacity: 0,
          top: ' -100%',
          left: ' -100%',
          transform: 'scale(0.1, 0.1)',
          animation: `${disAppearKeyframes} ${delay}ms`,
        }) || '';

      return disAppearClass;
    }

    function backgroundAppear(delay: number = 350) {
      const appearBgAnimation =
        dynamicCss.current?.keyframes({
          from: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          to: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }) || '';
      const appearBg =
        dynamicCss.current?.css({
          background: 'rgba(0, 0, 0, 0.5)',
          animation: `${appearBgAnimation} ${delay}ms`,
        }) || '';
      return appearBg;
    }

    function backgroundDisAppear(delay: number = 350) {
      const disAppearBgAnimation =
        dynamicCss.current?.keyframes({
          from: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          to: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        }) || '';
      const disAppearBg =
        dynamicCss.current?.css({
          background: 'rgba(0, 0, 0, 0)',
          animation: `${disAppearBgAnimation} ${delay}ms`,
        }) || '';
      return disAppearBg;
    }

    ref.current = {
      contentAppear,
      contentDisAppear,
      backgroundAppear,
      backgroundDisAppear,
    };

    ref.current.init = true;
  }

  return ref as React.MutableRefObject<Operate>;
}
