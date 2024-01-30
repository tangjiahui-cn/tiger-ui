import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  select: () => string;
  selectHeader: () => string;
  selectHeaderText: () => string;
  selectHeaderIcon: () => string;
  selectPlaceholder: () => string;
  selectOption: () => string;
  selectOptionChoose: () => string;
  selectBlock: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const selectHeader = () => `${prefix}-header`;
  const selectHeaderText = () => `${prefix}-header-text`;
  const selectHeaderIcon = () => `${prefix}-header-icon`;
  const selectPlaceholder = () => `${prefix}-placeholder`;
  const selectOption = () => `${prefix}-option`;
  const selectOptionChoose = () => `${prefix}-option-choose`;
  const selectBlock = () => `${prefix}-block`;

  const select = () =>
    css({
      display: 'inline-block',
      height: 32,
      minWidth: 100,
      cursor: 'pointer',
      transition: `all ${token.duration}`,
      border: `1px solid ${token.borderColor}`,
      overflow: 'hidden',
      borderRadius: token.borderRadius,

      [`&.${selectBlock()}`]: {
        width: '100%',
      },

      '&:focus,&:hover': {
        border: `1px solid ${token.primaryHover}`,
        outline: 'none',
      },

      [`& .${selectHeader()}`]: {
        padding: '0 8px',
        fontSize: ' 0.875em',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        [`& .${selectHeaderText()}`]: {
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          justifyContent: 'space-between',
        },
        [`& .${selectHeaderIcon()}`]: {
          color: token.placeholderColor,
          fontSize: '0.875em',
        },
      },
      [`& .${selectPlaceholder()}`]: {
        color: token.placeholderColor,
      },
      [`.${selectOption()}`]: {
        padding: '6px 12px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: token.selectHover,
        },
        [`&.${selectOptionChoose()}`]: {
          backgroundColor: token.selectPrimary,
          '&:hover': {
            backgroundColor: token.selectPrimary,
          },
        },
      },
    });

  return {
    select,
    selectHeader,
    selectHeaderText,
    selectHeaderIcon,
    selectPlaceholder,
    selectOption,
    selectOptionChoose,
    selectBlock,
  };
}
