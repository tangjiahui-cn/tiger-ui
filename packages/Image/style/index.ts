import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  image: () => string;
  imagePreviewButton: () => string;
  imagePreviewWindow: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = createEmotion({ key: prefix });
  const { css: cssPreview } = createEmotion({ key: `${prefix}-window` });

  const imagePreviewButton = () => `${prefix}-preview-button`;
  const imagePreviewWindow = () =>
    cssPreview({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: token.maskBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      overflow: 'hidden',
    });

  const image = () =>
    css({
      position: 'relative',
      fontSize: 0,
      display: 'inline-block',
      [`& .${imagePreviewButton()}`]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: `all ${token.duration}`,
        color: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        '&:hover': {
          color: 'whitesmoke',
          backgroundColor: token.maskBg,
        },
      },
    });

  return {
    image,
    imagePreviewButton,
    imagePreviewWindow,
  };
}
