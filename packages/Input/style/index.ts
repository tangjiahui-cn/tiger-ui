import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import brotherSelector from '../../_utils/style/brotherSelector';
import React from 'react';
import type { InputSize } from '..';
import childrenSelector from '@/_utils/style/childrenSelector';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  input: () => string;
  size: (size: InputSize) => string;
  pure: () => string;
  prefix: () => string;
  suffix: () => string;
  border: () => string;
  inputWrapper: () => string;
  wrapperDisabled: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });
  const { css: cssWrapper } = useEmotion({ key: `${prefix}-wrapper` });
  const pure = () => `${prefix}-pure`;

  const textEllipsis = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const disabled = {
    borderColor: token.colorDisabled,
    color: token.colorDisabled,
    backgroundColor: token.colorBgDisabled,
    cursor: 'not-allowed',
  };

  const commonInput: React.CSSProperties = {
    width: '100%',
    color: token.color,
    lineHeight: 1.125,
    fontSize: token.fontSize,
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    backgroundColor: 'white',
  };

  function genSizeStyle() {
    const getClassName = (size: InputSize) => `${prefix}-${size}`;

    const sizeStyle = {
      [getClassName('large')]: {
        padding: 12,
        fontSize: token.fontSizeLarge,
      },
      [getClassName('middle')]: {
        padding: '8px 12px',
      },
      [getClassName('small')]: {
        padding: '4px 12px',
      },
    };

    return {
      size: getClassName,
      sizeStyle,
    };
  }

  const { size, sizeStyle } = genSizeStyle();
  const pureStyle = {
    [pure()]: {
      transition: `all ${token.duration}`,
      border: `1px solid ${token.borderColor}`,
      '&:focus': {
        border: `1px solid ${token.primary}`,
      },
    },
  };

  const inputPrefix = () => `${prefix}-prefix`;
  const inputPrefixStyle = {
    [inputPrefix()]: {
      ...textEllipsis,
      marginLeft: 12,
    },
  };

  const inputSuffix = () => `${prefix}-suffix`;
  const inputSuffixStyle = {
    [inputSuffix()]: {
      ...textEllipsis,
      marginRight: 12,
    },
  };

  const border = () => `${prefix}-border`;

  const wrapperDisabled = () => `${prefix}-wrapper-disabled`;
  const wrapperDisabledStyle = {
    [wrapperDisabled()]: disabled,
  };

  const input = () => {
    return css({
      ...commonInput,
      border: 'none',
      display: 'inline-block',
      '&::placeholder': {
        color: token.colorHover,
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': disabled,
      ...brotherSelector(sizeStyle),
      ...brotherSelector(pureStyle),
    });
  };

  const inputWrapper = () => {
    return cssWrapper({
      ...commonInput,
      position: 'relative',
      display: 'inline-flex',
      transition: `all ${token.duration}`,
      alignItems: 'center',
      border: '1px solid transparent',
      [`& > .${border()}`]: {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        border: `1px solid ${token.borderColor}`,
        pointerEvents: 'none',
      },
      [`& > input:focus ~ .${border()}`]: {
        border: `1px solid ${token.primary}`,
      },
      '& input': {
        flex: 1,
        border: 'none',
      },
      ...brotherSelector(wrapperDisabledStyle),
      ...childrenSelector(inputPrefixStyle),
      ...childrenSelector(inputSuffixStyle),
    });
  };

  return {
    input,
    size,
    pure,
    border,
    prefix: inputPrefix,
    suffix: inputSuffix,
    wrapperDisabled,
    inputWrapper,
  };
}
