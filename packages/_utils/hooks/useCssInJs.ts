import { useMemo } from 'react';
import { createClassCss } from 'class-css';

export default function useCssInJs(options: { key: string }) {
  return useMemo(() => {
    const ins = createClassCss(options);
    return {
      css: ins.css.bind(ins),
      keyframes: ins.keyframes.bind(ins),
    };
  }, [options.key]);
}
