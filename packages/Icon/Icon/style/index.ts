import usePrefix from '../../../_utils/hooks/usePrefix';
import useToken from '../../../_utils/hooks/useToken';
import brotherSelector from '../../../_utils/style/brotherSelector';
import childrenSelector from '@/_utils/style/childrenSelector';
import useCssInJs from '@/_utils/hooks/useCssInJs';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  iconWrapper: () => string;
  pointer: () => string;
  icon: () => string;
  spin: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useCssInJs({ key: prefix });

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
        color: token.color,
      }),

      ...brotherSelector(pointerStyle),
      ...childrenSelector(iconStyle),
      ...childrenSelector(spinStyle),

      '& a': {
        color: token.color,
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
