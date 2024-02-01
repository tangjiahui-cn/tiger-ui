import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  carousel: () => string;
  carouselBody: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const carouselBody = () => `${prefix}-body`;

  const carousel = () =>
    css({
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      [`& .${carouselBody()}`]: {
        display: 'flex',
        height: '100%',
        transition: 'transform .3s',
      },
    });

  return {
    carousel,
    carouselBody,
  };
}
