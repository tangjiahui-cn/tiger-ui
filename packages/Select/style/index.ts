import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import childrenSelector from '../../_utils/style/childrenSelector';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  select: () => string;
  selectPopup: () => string;
  selectOption: () => string;
  selectOptionChoose: () => string;
  selectPlaceholder: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = createEmotion({ key: prefix });
  const { css: cssPopup } = createEmotion({ key: prefix + 'popup' });

  const selectOption = () => `${prefix}-option`;
  const selectOptionChoose = () => `${prefix}-option-choose`;
  const selectPlaceholder = () => `${prefix}-placeholder`;

  const selectOptionStyle = {
    [selectOption()]: {
      padding: '8px 14px',
      cursor: 'pointer',
      transition: `all ${token.duration}`,
      margin: 4,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: token.color,
        backgroundColor: 'whitesmoke',
      },
      '&-choose': {
        backgroundColor: token.selectPrimary,
        '&:hover': {
          backgroundColor: `${token.selectPrimary} !important`,
        },
      },
    },
  };

  const selectPopup = () =>
    cssPopup({
      marginTop: 2,
      ...childrenSelector(selectOptionStyle),
    });

  const select = () =>
    css({
      fontSize: token.fontSize,
      border: `1px solid ${token.borderColor}`,
      display: 'inline-block',
      padding: '8px 14px',
      cursor: 'pointer',
      transition: `all ${token.duration}`,
      userSelect: 'none',
      '&:focus': {
        borderColor: token.primary,
        outline: 'none',
      },
      '&:hover': {
        borderColor: token.primaryHover,
      },
      '&-placeholder': {
        color: token.placeholderColor,
      },
    });

  return {
    select,
    selectPopup,
    selectOption,
    selectOptionChoose,
    selectPlaceholder,
  };
}
