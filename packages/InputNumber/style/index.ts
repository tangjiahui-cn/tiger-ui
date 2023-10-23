import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

export function useStyle(componentName: string): {
  inputNumber: () => string;
  inputNumberBtn: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const inputNumberBtn = () => `${prefix}-btn`;

  const inputNumber = () =>
    css({
      [`& .${inputNumberBtn()}`]: {
        display: 'inline-block',
        flex: 1,
        cursor: 'pointer',
        padding: '0 8px',
        borderLeft: `1px solid ${token.borderColor}`,
        transition: `all ${token.duration}`,
        // 改变图标颜色
        '& a': {
          color: token.borderColor,
        },
        '&:hover': {
          background: 'whitesmoke',
        },
        '&:first-child': {
          borderBottom: `1px solid ${token.borderColor}`,
        },
      },
    });

  return {
    inputNumber,
    inputNumberBtn,
  };
}
