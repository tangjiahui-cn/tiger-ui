import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';

export function useStyle(componentName: string): {
  counter: () => string;
} {
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  return {
    counter: () =>
      css({
        display: 'inline-block',
        fontSize: 22,
        fontWeight: 'bold',
      }),
  };
}
