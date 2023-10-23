import { useMemo } from 'react';
// import createEmotion from '@emotion/css/create-instance';
import { createClassCss } from 'class-css';

export default function useEmotion(options: { key: string }) {
  return useMemo(() => {
    return createClassCss(options);
  }, [options.key]);
}
