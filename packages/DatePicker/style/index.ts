import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  datepickerPanel: () => string;
  datepickerPanelHead: () => string;
  datepickerPanelBody: () => string;
  datepickerPanelFoot: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const datepickerPanelHead = () => `${prefix}-panel-head`;
  const datepickerPanelBody = () => `${prefix}-panel-body`;
  const datepickerPanelFoot = () => `${prefix}-panel-foot`;

  const datepickerPanel = () =>
    css({
      width: 250,
      background: 'white',
      fontSize: '0.875em',
      [`& .${datepickerPanelHead()}`]: {
        borderBottom: `1px solid ${token.borderColor}`,
        display: 'flex',
        justifyContent: 'space-between',
        height: 32,
        padding: '4px 12px',
        userSelect: 'none',
      },
      [`& .${datepickerPanelBody()}`]: {
        padding: '4px 8px',
      },
      [`& .${datepickerPanelFoot()}`]: {
        color: token.primary,
        borderTop: `1px solid ${token.borderColor}`,
        textAlign: 'center',
        padding: '8px 0',
        letterSpacing: 1,
        ['& > span']: {
          userSelect: 'none',
          cursor: 'pointer',
          transition: 'all .3s',
          '&:hover': {
            color: token.primaryHover,
          },
        },
      },
    });

  return {
    datepickerPanel,
    datepickerPanelHead,
    datepickerPanelBody,
    datepickerPanelFoot,
  };
}
