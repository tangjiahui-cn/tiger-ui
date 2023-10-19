import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  popoverOverlay: () => string;
  popoverOverlayTitle: () => string;
  popoverOverlayContent: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const popoverOverlayTitle = () => `${prefix}-title`;
  const popoverOverlayContent = () => `${prefix}-content`;

  const popoverOverlay = () =>
    css({
      boxShadow: token.shadow3,
      background: 'white',
      position: 'absolute',
      padding: 16,
      borderRadius: token.borderRadius,
      [`& .${popoverOverlayTitle()}`]: {
        fontWeight: 'bolder',
      },
      [`& .${popoverOverlayContent()}`]: {},
    });

  return {
    popoverOverlay,
    popoverOverlayTitle,
    popoverOverlayContent,
  };
}
