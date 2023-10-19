import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  slider: () => string;
  sliderTrack: () => string;
  sliderTrackThumb: () => string;
  sliderPoint: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const sliderTrack = () => `${prefix}-track`;
  const sliderTrackThumb = () => `${prefix}-track-thumb`;
  const sliderPoint = () => `${prefix}-point`;

  const slider = () =>
    css({
      height: 16,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      [`& .${sliderTrack()}`]: {
        height: 8,
        flex: 1,
        border: `1px solid ${token.borderColor}`,
        backgroundColor: 'white',
        position: 'relative',
        [`& .${sliderTrackThumb()}`]: {
          height: '100%',
          backgroundColor: token.primary,
          '&:hover': {
            backgroundColor: token.primaryHover,
          },
        },
      },
      [`& .${sliderPoint()}`]: {
        width: 16,
        height: 16,
        position: 'absolute',
        borderRadius: '50%',
        top: '50%',
        transform: 'translate(0, -50%) scale(1)',
        cursor: 'pointer',
        transition: `transform ${token.duration}`,
        border: `2px solid ${token.primary}`,
        backgroundColor: 'white',
        '&:hover': {
          transform: 'translate(0, -50%) scale(1.25)',
        },
      },
    });

  return {
    slider,
    sliderTrack,
    sliderTrackThumb,
    sliderPoint,
  };
}
