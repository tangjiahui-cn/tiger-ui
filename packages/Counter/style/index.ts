import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';

export function useStyle(componentName: string): {
  counter: () => string;
} {
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  return {
    counter: () =>
      css({
        display: 'inline-block',
        fontSize: 22,
        fontWeight: 'bold',
      }),
  };
}
