import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  table: () => string;
  tableBordered: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = createEmotion({ key: prefix });

  const padding = '14px 16px';
  const tableHeaderColor = '#fafafa';
  const tableBorderColor = '#f0f0f0';

  const tableBordered = () => `${prefix}-bordered`;

  const table = () =>
    css({
      border: 0,
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: token.fontSize,
      '& > thead > tr > th': {
        padding,
        backgroundColor: tableHeaderColor,
      },
      '& > tbody > tr > td': {
        padding,
      },
      '& > tbody': {
        '& > tr': {
          backgroundColor: 'white',
          transition: `all ${token.duration}`,
          '&:hover': {
            backgroundColor: tableHeaderColor,
          },
        },
      },
      [`&.${tableBordered()}`]: {
        '& > thead': {
          border: `thin solid ${token.borderColor}`,
        },
        '& > tbody': {
          border: `thin solid ${token.borderColor}`,
        },
        '& > thead > tr > th': {
          borderLeft: `thin solid ${token.borderColor}`,
        },
        '& > tbody > tr > td': {
          borderLeft: `thin solid ${token.borderColor}`,
          borderBottom: `thin solid ${token.borderColor}`,
        },
      },
      [`&:not(.${tableBordered()})`]: {
        thead: {
          borderBottom: `thin solid ${tableBorderColor}`,
        },
        'tbody > tr': {
          borderBottom: `thin solid ${tableBorderColor}`,
        },
        'th + th': {
          position: 'relative',
          '&::before': {
            position: 'absolute',
            display: 'inline-block',
            insetInlineEnd: 0,
            width: 1,
            height: '1.6rem',
            top: '50%',
            left: 0,
            backgroundColor: tableBorderColor,
            transform: 'translateY(-50%)',
            transition: 'background-color 0.2s',
            content: '""',
          },
        },
      },
    });

  return {
    table,
    tableBordered,
  };
}
