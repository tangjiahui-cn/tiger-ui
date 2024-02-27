import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  timepicker: () => string;
  timepickerBody: () => string;
  timepickerBottom: () => string;
  timepickerBottomNow: () => string;
  timepickerPlaceholder: () => string;
  timepickerPlaceholderTip: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const timepickerBody = () => `${prefix}-body`;
  const timepickerBottom = () => `${prefix}-bottom`;
  const timepickerBottomNow = () => `${prefix}-bottom-now`;
  const timepickerPlaceholderTip = () => `${prefix}-placeholder-tip`;

  const timepicker = () =>
    css({
      display: 'flex',
      flexDirection: 'column',
      height: 256,
      overflowY: 'auto',
      [`& .${timepickerBody()}`]: { flex: 1, overflowY: 'hidden' },
      [`& .${timepickerBottom()}`]: {
        borderTop: '1px solid #e8e8e8',
        justifyContent: 'space-between',
        padding: '8px 10px',
        alignItems: 'center',
        display: 'flex',
        [`& .${timepickerBottomNow()}`]: {
          fontSize: '0.875em',
          color: '#4b81e5',
          cursor: 'pointer',
        },
      },
    });

  const timepickerPlaceholder = () =>
    css({
      width: 100,
      border: '1px solid #e8e8e8',
      borderRadius: 4,
      height: 32,
      lineHeight: '32px',
      padding: '0 12px',
      cursor: 'pointer',
      fontSize: '0.875em',
      [`& .${timepickerPlaceholderTip()}`]: { color: token.placeholderColor },
    });

  return {
    timepicker,
    timepickerBody,
    timepickerBottom,
    timepickerBottomNow,
    timepickerPlaceholder,
    timepickerPlaceholderTip,
  };
}
