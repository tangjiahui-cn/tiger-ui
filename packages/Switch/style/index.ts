import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  switchClass: () => string;
  switchDisabled: () => string;
  switchChecked: () => string;
  switchInner: () => string;
  switchInnerChecked: () => string;
  switchInnerUnChecked: () => string;
  switchCircle: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const size = 20;
  const activeAddition = 4;
  const padding = 2;

  const textEllipsis = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const innerColor = (color: string, hoverColor: string, important?: boolean): StyleObject => {
    const tail = important ? ' !important' : '';
    return {
      border: `1px solid ${color}` + tail,
      background: color + tail,
      '&:hover': {
        background: hoverColor + tail,
        borderColor: hoverColor + tail,
      },
    };
  };
  const innerContent = (code: StyleObject): StyleObject => {
    return {
      ...textEllipsis,
      color: 'white',
      boxSizing: 'border-box',
      transition: `all ${token.duration} ease-in-out`,
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '100%',
      ...code,
    };
  };

  const switchDisabled = () => `${prefix}-disabled`;
  const switchChecked = () => `${prefix}-checked`;
  const switchInner = () => `${prefix}-inner`;
  const switchInnerChecked = () => `${prefix}-inner-checked`;
  const switchInnerUnChecked = () => `${prefix}-inner-unchecked`;
  const switchCircle = () => `${prefix}-circle`;

  const switchClass = () =>
    css({
      cursor: 'pointer',
      position: 'relative',
      height: size + padding * 2,
      borderRadius: 100,
      overflow: 'hidden',
      userSelect: 'none',

      [`&.${switchDisabled()}`]: {
        cursor: 'not-allowed',
      },

      // 颜色
      [`&:not(${switchChecked()}).${switchDisabled()}`]: {
        [`& .${switchInner()}`]: innerColor(token.switchTextDisabled, token.switchTextDisabled),
      },
      [`&.${switchChecked()}:not(.${switchDisabled()})`]: {
        [`& .${switchInner()}`]: innerColor(token.primary, token.primaryHover),
      },
      [`&.${switchChecked()}.${switchDisabled()}`]: {
        [`& .${switchInner()}`]: innerColor(token.primaryDisabled, token.primaryDisabled, true),
      },

      // 内容跟随移动
      [`&.${switchChecked()}`]: {
        [`& .${switchInner()} .${switchInnerChecked()}`]: {
          left: 0,
        },
        [`& .${switchInner()} .${switchInnerUnChecked()}`]: {
          left: '100%',
        },
      },
      [`&:not(.${switchChecked()})`]: {
        [`& .${switchInner()} .${switchInnerChecked()}`]: {
          left: '-100%',
        },
        [`& .${switchInner()} .${switchInnerUnChecked()}`]: {
          left: 0,
        },
      },

      // 修改circle样式
      [`&.${switchChecked()} .${switchCircle()}`]: {
        left: `calc(100% - ${size}px - ${padding}px)`,
      },
      [`&:active:not(.${switchDisabled()})`]: {
        [`& .${switchCircle()}`]: {
          width: size + activeAddition,
        },
        [`&.${switchChecked()} .${switchCircle()}`]: {
          left: `calc(100% - ${size}px - ${activeAddition}px - ${padding}px)`,
        },
      },

      [`& .${switchInner()}`]: {
        position: 'relative',
        height: '100%',
        width: '100%',
        borderRadius: 100,
        textAlign: 'center',
        transition: `all ${token.duration} ease-in-out`,
        border: `1px solid ${token.switchText}`,
        background: token.switchText,
        ...innerColor(token.switchText, token.switchTextHover),
        [`& .${switchInnerChecked()}`]: {
          ...innerContent({
            paddingRight: size + padding,
            paddingLeft: padding,
          }),
        },
        [`& .${switchInnerUnChecked()}`]: {
          ...innerContent({
            paddingLeft: size + padding,
            paddingRight: padding,
          }),
        },
      },
      [`& .${switchCircle()}`]: {
        top: padding,
        left: padding,
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: 100,
        background: 'white',
        transition: `all ${token.duration} ease-in-out`,
      },
    });

  return {
    switchClass,
    switchDisabled,
    switchChecked,
    switchInner,
    switchInnerChecked,
    switchInnerUnChecked,
    switchCircle,
  };
}
