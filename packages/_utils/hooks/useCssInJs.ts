import { useMemo } from 'react';
import { createClassCss } from 'class-css';

export default function useCssInJs(options: { key: string }) {
  return useMemo(() => {
    return createClassCss(options);
  }, [options.key]);
}
