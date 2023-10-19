import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  checkbox: () => string;
  checkboxIcon: () => string;
  checkboxIconChecked: () => string;
  checkboxIconIndeterminate: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const common = (code: StyleObject): StyleObject => {
    return {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: token.primary,
      ...code,
    };
  };

  const size = 16;
  const padding = 2;
  const checkboxIcon = () => `${prefix}-icon`;
  const checkboxIconChecked = () => `${prefix}-icon-checked`;
  const checkboxIconIndeterminate = () => `${prefix}-icon-indeterminate`;

  const checkbox = () =>
    css({
      cursor: 'pointer',
      '& > span': {
        verticalAlign: 'middle',
      },
      [`&:hover > .${checkboxIcon()}`]: {
        borderColor: token.primaryHover,
      },
      [`& .${checkboxIcon()}`]: {
        width: size,
        height: size,
        boxSizing: 'border-box',
        display: 'inline-block',
        verticalAlign: 'middle',
        position: 'relative',
        cursor: 'pointer',
        border: `1px solid ${token.borderColor}`,
        marginRight: 8,
        transition: `all ${token.duration}`,
        [`&.${checkboxIconChecked()}`]: {
          borderColor: token.primary,
          '&::after': {
            ...common({
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              content: '"√"',
              fontSize: 12,
            }),
          },
        },
        [`&.${checkboxIconIndeterminate()}`]: {
          borderColor: token.primary,
          '&::after': {
            ...common({
              top: padding,
              left: padding,
              width: `calc(100% - ${padding * 2}px)`,
              height: `calc(100% - ${padding * 2}px)`,
              background: token.primary,
              content: '" "',
            }),
          },
        },
      },
    });

  return {
    checkbox,
    checkboxIcon,
    checkboxIconChecked,
    checkboxIconIndeterminate,
  };
}
