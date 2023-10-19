import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import brotherSelector from '../../_utils/style/brotherSelector';
import type { ButtonType, ButtonSize } from '..';
import useEmotion from '../../_utils/hooks/useEmotion';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  button: (danger?: boolean) => string;
  type: (type: ButtonType) => string;
  size: (type: ButtonSize) => string;
  block: () => string;
  danger: () => string;
  disabled: () => string;
  stayFocus: () => string;
  focus: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const danger = () => `${prefix}-danger`;
  const disabled = () => `${prefix}-disabled`;
  const stayFocus = () => `${prefix}-stay-focus`;
  const focus = () => `${prefix}-focus`;

  function genTypeStyle() {
    const getClassName = (type: ButtonType) => `${prefix}-${type}`;
    const dangerClassName = danger();
    const disabledClassName = disabled();

    const defaultStyle = {
      color: token.color,
      '&:hover': {
        color: token.primaryHover,
        borderColor: token.primaryHover,
      },
      '&:active': {
        color: token.primaryActive,
        borderColor: token.primaryActive,
      },
      // disabled
      [`&.${disabledClassName}`]: {
        cursor: 'not-allowed',
        color: token.colorDisabled,
        borderColor: token.colorDisabled,
        '&:hover': {
          color: token.colorDisabled,
          borderColor: token.colorDisabled,
        },
        '&:active': {
          color: token.colorDisabled,
          borderColor: token.colorDisabled,
        },
      },
      // danger
      [`&.${dangerClassName}`]: {
        color: token.danger,
        borderColor: token.danger,
        '&:hover': {
          color: token.dangerHover,
          borderColor: token.dangerHover,
        },
        '&:active': {
          color: token.dangerActive,
          borderColor: token.dangerActive,
        },
        [`&.${disabledClassName}`]: {
          cursor: 'not-allowed',
          color: token.dangerDisabled,
          borderColor: token.dangerDisabled,
          '&:hover': {
            color: token.dangerDisabled,
            borderColor: token.dangerDisabled,
          },
          '&:active': {
            color: token.dangerDisabled,
            borderColor: token.dangerDisabled,
          },
        },
      },
    };

    const typeStyle = {
      [getClassName('primary')]: {
        color: 'white',
        background: token.primary,
        borderColor: token.primary,
        '&:hover': {
          background: token.primaryHover,
          borderColor: token.primaryHover,
        },
        '&:active': {
          background: token.primaryActive,
          borderColor: token.primaryActive,
        },
        // disabled
        [`&.${disabledClassName}`]: {
          cursor: 'not-allowed',
          background: token.primaryDisabled,
          borderColor: token.primaryDisabled,
          '&:hover': {
            background: token.primaryDisabled,
            borderColor: token.primaryDisabled,
          },
          '&:active': {
            background: token.primaryDisabled,
            borderColor: token.primaryDisabled,
          },
        },
        // danger
        [`&.${dangerClassName}`]: {
          background: token.danger,
          borderColor: token.danger,
          '&:hover': {
            background: token.dangerHover,
            borderColor: token.dangerHover,
          },
          '&:active': {
            background: token.dangerActive,
            borderColor: token.dangerActive,
          },
          [`&.${disabledClassName}`]: {
            cursor: 'not-allowed',
            background: token.dangerDisabled,
            borderColor: token.dangerDisabled,
            '&:hover': {
              background: token.dangerDisabled,
              borderColor: token.dangerDisabled,
            },
            '&:active': {
              background: token.dangerDisabled,
              borderColor: token.dangerDisabled,
            },
          },
        },
      },
      [getClassName('default')]: defaultStyle,
      [getClassName('dashed')]: {
        borderStyle: 'dashed',
        ...defaultStyle,
      },
      [getClassName('dotted')]: {
        borderStyle: 'dotted',
        ...defaultStyle,
      },
      [getClassName('text')]: {
        background: 'white',
        borderColor: 'transparent',
        '&:hover': {
          color: token.colorHover,
        },
        '&:active': {
          color: token.colorActive,
        },
        // disabled
        [`&.${disabledClassName}`]: {
          cursor: 'not-allowed',
          color: token.colorDisabled,
          '&:hover': {
            color: token.colorDisabled,
          },
          '&:active': {
            color: token.colorDisabled,
          },
        },
        // danger
        [`&.${dangerClassName}`]: {
          color: token.danger,
          '&:hover': {
            color: token.dangerHover,
          },
          '&:active': {
            color: token.dangerActive,
          },
          [`&.${disabledClassName}`]: {
            cursor: 'not-allowed',
            color: token.dangerDisabled,
            '&:hover': {
              color: token.dangerDisabled,
            },
            '&:active': {
              color: token.dangerDisabled,
            },
          },
        },
      },
    };

    return {
      type: getClassName,
      typeStyle: typeStyle,
    };
  }

  function genSizeStyle() {
    const getClassName = (size: ButtonSize) => `${prefix}-${size}`;

    const sizeStyle = {
      [getClassName('large')]: {
        padding: '12px 16px',
      },
      [getClassName('middle')]: {
        padding: '8px 14px',
      },
      [getClassName('small')]: {
        padding: '4px 8px',
      },
    };

    return {
      size: getClassName,
      sizeStyle,
    };
  }

  function genBlockStyle() {
    const getClassName = () => `${prefix}-block`;

    const blockStyle = {
      [getClassName()]: {
        width: '100%',
        display: 'block',
      },
    };

    return {
      block: getClassName,
      blockStyle,
    };
  }

  const { type, typeStyle } = genTypeStyle();
  const { size, sizeStyle } = genSizeStyle();
  const { block, blockStyle } = genBlockStyle();

  const button = (danger?: boolean): string => {
    return css({
      fontSize: token.fontSize,
      cursor: 'pointer',
      userSelect: 'none',
      color: token.color,
      background: 'white',
      border: `1px solid ${token.borderColor}`,
      transition: `all ${token.duration}`,
      lineHeight: 1.125,
      verticalAlign: 'middle',

      ...brotherSelector(typeStyle),
      ...brotherSelector(sizeStyle),
      ...brotherSelector(blockStyle),

      [`&:focus.${stayFocus()}`]: {
        borderColor: danger ? token.danger : token.primary,
      },
      [`&.${focus()}`]: {
        borderColor: danger ? token.danger : token.primary,
      },
    });
  };

  return {
    button,
    block,
    type,
    size,
    danger,
    disabled,
    stayFocus,
    focus,
  };
}
