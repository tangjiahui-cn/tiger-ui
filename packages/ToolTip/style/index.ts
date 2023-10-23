import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  tooltipOverlay: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const tooltipOverlay = () =>
    css({
      boxShadow: token.shadow3,
      position: 'absolute',
      color: 'white',
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '8px 12px',
      borderRadius: token.borderRadius,
    });

  return {
    tooltipOverlay,
  };
}
