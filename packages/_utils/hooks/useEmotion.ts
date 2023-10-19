import { useMemo } from 'react';
import createEmotion from '@emotion/css/create-instance';

export default function useEmotion(options: { key: string }) {
  return useMemo(() => {
    return createEmotion(options);
  }, [options.key]);
}
