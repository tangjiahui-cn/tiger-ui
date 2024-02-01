import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  drawer: () => string;
  drawerMask: () => string;
  drawerContent: () => string;
  drawerContentHeader: () => string;
  drawerContentBody: () => string;
  drawerContentFooter: () => string;
  closeIcon: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const drawerMask = () => `${prefix}-background`;
  const drawerContent = () => `${prefix}-content`;
  const drawerContentHeader = () => `${prefix}-content-header`;
  const drawerContentBody = () => `${prefix}-content-body`;
  const drawerContentFooter = () => `${prefix}-content-footer`;
  const closeIcon = () => `${prefix}-close-icon`;

  const drawer = () =>
    css({
      zIndex: 999,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      [`& .${drawerMask()}`]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      [`& .${drawerContent()}`]: {
        position: 'fixed',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: token.shadow2,
        minWidth: 350,
        minHeight: 250,
        [`& .${drawerContentHeader()}`]: {
          padding: '16px 24px',
          borderBottom: '1px solid #e8e8e8',
          fontWeight: 'bold',
          alignItems: 'center',
        },
        [`& .${drawerContentBody()}`]: {
          padding: '16px 24px',
          fontSize: '0.875em',
          color: token.color,
          minHeight: 48,
          flex: 1,
        },
        [`& .${drawerContentFooter()}`]: {
          padding: '10px 16px',
          borderTop: `1px solid ${token.borderLightColor}`,
          overflow: 'hidden',
        },
      },
      [`& .${closeIcon()}`]: {
        color: 'rgba(151, 151, 151)',
        cursor: 'pointer',
        position: 'absolute',
        top: 20,
        right: 20,
      },
    });

  return {
    drawer,
    drawerMask,
    drawerContent,
    drawerContentHeader,
    drawerContentBody,
    drawerContentFooter,
    closeIcon,
  };
}
