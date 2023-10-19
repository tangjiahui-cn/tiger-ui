import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  tag: () => string;
  tagNoBorder: () => string;
  tagSuccess: () => string;
  tagError: () => string;
  tagWarn: () => string;
  tagInfo: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const tagNoBorder = () => `${prefix}-no-border`;
  const tagSuccess = () => `${prefix}-success`;
  const tagError = () => `${prefix}-error`;
  const tagWarn = () => `${prefix}-warn`;
  const tagInfo = () => `${prefix}-info`;

  const tag = () =>
    css({
      color: token.color,
      fontSize: 12,
      padding: '2px 6px',
      backgroundColor: 'whitesmoke',
      border: `1px solid ${token.borderColor}`,
      display: 'inline-block',
      [`&.${tagNoBorder()}`]: {
        border: 'none !important',
      },
      [`&.${tagSuccess()}`]: {
        color: token.successColor,
        border: `1px solid ${token.successBorderColor}`,
        backgroundColor: token.successBg,
      },
      [`&.${tagError()}`]: {
        color: token.errorColor,
        border: `1px solid ${token.errorBorderColor}`,
        backgroundColor: token.errorBg,
      },
      [`&.${tagWarn()}`]: {
        color: token.warnColor,
        border: `1px solid ${token.warnBorderColor}`,
        backgroundColor: token.warnBg,
      },
      [`&.${tagInfo()}`]: {
        color: token.infoColor,
        border: `1px solid ${token.infoBorderColor}`,
        backgroundColor: token.infoBg,
      },
    });

  return {
    tag,
    tagNoBorder,
    tagSuccess,
    tagError,
    tagWarn,
    tagInfo,
  };
}
