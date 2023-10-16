import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  datepicker: () => string;
  datepickerPanel: () => string;
  datepickerPlaceholder: () => string;
  datepickerBtn: () => string;
  datepickerHead: () => string;
  datepickerBody: () => string;
  datepickerBodyHead: () => string;
  datepickerBodyHeadItem: () => string;
  datepickerBodyContent: () => string;
  datepickerBodyContentLine: () => string;
  datepickerBodyContentItem: () => string;
  datepickerBodyContentItemCurrent: () => string;
  datepickerBodyContentItemChoose: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = createEmotion({ key: prefix });
  const { css: cssPanel } = createEmotion({ key: prefix + 'panel' });

  const item = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    cursor: 'pointer',
    transition: `all ${token.duration}`,
    borderRadius: 2,
    color: token.color,
    '&:hover': {
      backgroundColor: 'whitesmoke',
    },
  };

  const datepickerPlaceholder = () => `${prefix}-placeholder`;
  const datepickerBtn = () => `${prefix}-btn`;
  const datepickerHead = () => `${prefix}-head`;
  const datepickerBody = () => `${prefix}-body`;
  const datepickerBodyHead = () => `${prefix}-body-head`;
  const datepickerBodyHeadItem = () => `${prefix}-body-head-item`;
  const datepickerBodyContent = () => `${prefix}-body-content`;
  const datepickerBodyContentLine = () => `${prefix}-body-content-line`;
  const datepickerBodyContentItem = () => `${prefix}-body-content-item`;
  const datepickerBodyContentItemCurrent = () => `${prefix}-body-content-item-current`;
  const datepickerBodyContentItemChoose = () => `${prefix}-body-content-item-choose`;

  const datepicker = () =>
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
      [`& .${datepickerPlaceholder()}`]: {
        color: token.placeholderColor,
      },
    });

  const datepickerPanel = () =>
    cssPanel({
      display: 'inline-block',
      boxSizing: 'border-box',
      [`& .${datepickerBtn()}`]: {
        padding: '0 6px',
        cursor: 'pointer',
        transition: `all ${token.duration}`,
        userSelect: 'none',
        '&:hover': {
          color: '#bfbfbf',
        },
      },
      [`& .${datepickerHead()}`]: {
        height: 32,
        borderBottom: `1px solid ${token.borderColor}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
      },
      [`& .${datepickerBody()}`]: {
        padding: '8px 16px',
        [`& .${datepickerBodyHead()}`]: {
          display: 'flex',
          justifyContent: 'space-between',
          [`& .${datepickerBodyHeadItem()}`]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
          },
        },

        [`& .${datepickerBodyContent()}`]: {
          [`& .${datepickerBodyContentLine()}`]: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px 0',
            [`& .${datepickerBodyContentItemCurrent()}`]: {
              ...item,
              color: token.color,
            },
            [`& .${datepickerBodyContentItem()}`]: {
              ...item,
            },
            [`& .${datepickerBodyContentItemChoose()}`]: {
              color: 'white',
              backgroundColor: token.primary,
              '&:hover': {
                backgroundColor: token.primaryHover,
              },
            },
          },
        },
      },
    });

  return {
    datepicker,
    datepickerPanel,
    datepickerPlaceholder,
    datepickerBtn,
    datepickerHead,
    datepickerBody,
    datepickerBodyHead,
    datepickerBodyHeadItem,
    datepickerBodyContent,
    datepickerBodyContentLine,
    datepickerBodyContentItem,
    datepickerBodyContentItemCurrent,
    datepickerBodyContentItemChoose,
  };
}
