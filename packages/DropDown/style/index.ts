import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

const scale100 = 'translate(0, 0) scale(1, 1)';
const scale25 = 'translate(0, -37.5%) scale(1, 25%)';
const scale50 = 'translate(0, -25%) scale(1, 50%)';
const scale75 = 'translate(0, -12.5%) scale(1, 75%)';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  dropDown: () => string;
  dropDownExpand: () => string;
  dropDownUnExpand: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useCssInJs({ key: prefix });

  const keyframesUtils = {
    expandDynamic: keyframes({
      '0%': {
        opacity: 0,
        transform: scale75,
      },
      '85%': {
        opacity: 0.9,
        transform: scale100,
      },
      to: {
        opacity: 1,
        transform: scale100,
      },
    }),
    unExpandDynamic: keyframes({
      from: {
        opacity: 1,
        transform: scale100,
      },
      '15%': {
        opacity: 1,
        transform: scale100,
      },
      '35%': {
        opacity: 1,
        transform: scale100,
      },
      '90%': {
        opacity: 0.05,
        transform: scale75,
      },
      '100%': {
        opacity: 0,
        transform: scale50,
      },
    }),
  };
  const dropDownExpand = () => `${prefix}-expand`;
  const dropDownUnExpand = () => `${prefix}-unExpand`;

  const dropDown = () =>
    css({
      opacity: 0,
      minHeight: 12,
      background: 'white',
      boxShadow:
        '0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08),0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
      [`&.${dropDownExpand()}`]: {
        opacity: 1,
        transform: 'translate(0, 0) scale(1, 1)',
        animation: `${keyframesUtils.expandDynamic} ${token.duration}`,
      },
      [`&.${dropDownUnExpand()}`]: {
        opacity: 0,
        animation: `${keyframesUtils.unExpandDynamic} 0.3s`,
      },
    });

  return {
    dropDown,
    dropDownExpand,
    dropDownUnExpand,
  };
}
