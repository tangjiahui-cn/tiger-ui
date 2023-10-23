import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  radio: () => string;
  radioCircle: () => string;
  radioContent: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const radioCircle = () => `${prefix}-circle`;
  const radioContent = () => `${prefix}-content`;

  const radio = () =>
    css({
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',

      [`&:hover .${radioCircle()}`]: {
        borderColor: token.primaryHover,
      },
      '& > input[type="radio"]': {
        display: 'none',
        [`&:checked + .${radioCircle()}`]: {
          border: `4px solid ${token.primaryActive}`,
        },
      },
      [`& .${radioCircle()}`]: {
        boxSizing: 'border-box',
        height: 16,
        width: 16,
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        borderRadius: '50%',
        border: `1px solid ${token.primary}`,
        transition: `border-color ${token.duration}`,
      },
      [`& .${radioContent()}`]: {
        verticalAlign: 'middle',
        marginLeft: 8,
      },
    });

  return {
    radio,
    radioCircle,
    radioContent,
  };
}
