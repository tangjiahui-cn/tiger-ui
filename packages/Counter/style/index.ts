import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';

export function useStyle(componentName: string): {
  counter: () => string;
} {
  const prefix = usePrefix(componentName);
  const { css } = createEmotion({ key: prefix });

  return {
    counter: () =>
      css({
        display: 'inline-block',
        fontSize: 22,
        fontWeight: 'bold',
      }),
  };
}
