import brotherSelector from '../../../_utils/style/brotherSelector';
import childrenSelector from '@/_utils/style/childrenSelector';
import { css, keyframes } from 'class-css';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  iconWrapper: () => string;
  pointer: () => string;
  icon: () => string;
  spin: () => string;
} {
  const prefix = usePrefix(componentName);
  const spinKeyframes = keyframes({
    '100%': {
      transform: 'rotate(360deg)',
    },
  });

  function iconHover(style: StyleObject) {
    return {
      '& a:hover:hover:hover': {
        ...style,
      },
    };
  }

  const icon = () => `${prefix}-icon`;
  const iconStyle = {
    [icon()]: {
      display: 'inline-block',
    },
  };

  const pointer = () => `${prefix}-pointer`;
  const pointerStyle = {
    [pointer()]: iconHover({
      cursor: 'pointer',
    }),
  };

  const spin = () => `${prefix}-spin`;
  const spinStyle = {
    [spin()]: {
      animation: `${spinKeyframes} 1s infinite linear`,
    },
  };

  const iconWrapper = () =>
    css({
      ...iconHover({
        color: 'black',
      }),

      ...brotherSelector(pointerStyle),
      ...childrenSelector(iconStyle),
      ...childrenSelector(spinStyle),

      '& a': {
        color: 'black',
        cursor: 'default',
      },
    });

  return {
    iconWrapper,
    icon,
    pointer,
    spin,
  };
}
