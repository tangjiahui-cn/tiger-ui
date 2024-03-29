import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import { SwitchBarType } from '../SwitchBar';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  carouseBar: () => string;
  carouseBarType: (type: SwitchBarType) => string;
  carouseBarTypeChoose: (type: SwitchBarType) => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const common = (code: StyleObject): StyleObject => {
    return {
      backgroundColor: 'white',
      cursor: 'pointer',
      userSelect: 'none',
      transition: `all ${token.duration}`,
      ...code,
    };
  };

  const carouseBarType = (type: SwitchBarType) => `${prefix}-bar-${type}`;
  const carouseBarTypeChoose = (type: SwitchBarType) => `${prefix}-bar-${type}-choose`;

  const carouseBar = () =>
    css({
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      [`& .${carouseBarType('rect')}`]: {
        ...common({
          width: 30,
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: token.borderRadius,
        }),
        '&:hover': {
          backgroundColor: 'whitesmoke',
        },
        [`&.${carouseBarTypeChoose('rect')}`]: {
          color: 'white',
          backgroundColor: token.primary,
          '&:hover': {
            backgroundColor: token.primaryHover,
          },
        },
      },
      [`& .${carouseBarType('dot')}`]: {
        ...common({
          width: 10,
          height: 10,
          border: `1px solid ${token.borderColor}`,
          borderRadius: '50%',
        }),
        '&:hover': {
          backgroundColor: 'whitesmoke',
        },
        [`&.${carouseBarTypeChoose('dot')}`]: {
          color: 'white',
          backgroundColor: token.primary,
          '&:hover': {
            backgroundColor: token.primaryHover,
          },
        },
      },
      [`& .${carouseBarType('line')}`]: {
        ...common({
          height: 3,
          width: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: 1,
        }),
        [`&.${carouseBarTypeChoose('line')}`]: {
          width: 25,
          height: 4,
          backgroundColor: 'white',
        },
      },
    });

  return {
    carouseBar,
    carouseBarType,
    carouseBarTypeChoose,
  };
}
