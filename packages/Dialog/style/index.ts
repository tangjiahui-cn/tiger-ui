import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  dialog: () => string;
  dialogMask: () => string;
  dialogContent: () => string;
  dialogContentHeader: () => string;
  dialogContentBody: () => string;
  dialogContentFooter: () => string;
  closeIcon: () => string;

  contentAppear: (x: number, y: number, delay: number) => string;
  contentDisAppear: (x: number, y: number, delay: number) => string;
  backgroundAppear: (delay: number) => string;
  backgroundDisAppear: (delay: number) => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useCssInJs({ key: prefix });

  const dialogMask = () => `${prefix}-background`;
  const dialogContent = () => `${prefix}-content`;
  const dialogContentHeader = () => `${prefix}-content-header`;
  const dialogContentBody = () => `${prefix}-content-body`;
  const dialogContentFooter = () => `${prefix}-content-footer`;
  const closeIcon = () => `${prefix}-close-icon`;

  const dialog = () =>
    css({
      zIndex: 999,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [`& .${dialogMask()}`]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      },
      [`& .${dialogContent()}`]: {
        position: 'fixed',
        background: 'white',
        boxShadow: token.shadow2,
        [`& .${dialogContentHeader()}`]: {
          padding: '16px 24px',
          borderBottom: `1px solid ${token.borderLightColor}`,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        },
        [`& .${dialogContentBody()}`]: {
          padding: '16px 24px',
          fontSize: '0.875em',
          color: token.color,
          minHeight: 48,
        },
        [`& .${dialogContentFooter()}`]: {
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

  function contentAppear(x: number, y: number, delay: number = 300) {
    const appearKeyframes = keyframes({
      from: {
        opacity: 0,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%) scale(0.1,0.1)',
      },
      to: {
        opacity: 1,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%) scale(1,1)',
      },
    });
    const appearClass = css({
      opacity: 1,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(1,1)',
      animation: `${appearKeyframes} ${delay}ms`,
    });
    return appearClass;
  }

  function contentDisAppear(x: number, y: number, delay: number = 300) {
    const disAppearKeyframes = keyframes({
      from: {
        opacity: 1,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%) scale(1,1)',
      },
      to: {
        opacity: 0,
        left: x,
        top: y,
        transform: 'translate(-50%, -50%) scale(0.1,0.1)',
      },
    });

    const disAppearClass = css({
      pointerEvents: 'none',
      opacity: 0,
      top: ' -100%',
      left: ' -100%',
      transform: 'scale(0.1, 0.1)',
      animation: `${disAppearKeyframes} ${delay}ms`,
    });

    return disAppearClass;
  }

  function backgroundAppear(delay: number = 350) {
    const appearBgAnimation = keyframes({
      from: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      to: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    });
    const appearBg = css({
      background: 'rgba(0, 0, 0, 0.5)',
      animation: `${appearBgAnimation} ${delay}ms`,
    });
    return appearBg;
  }

  function backgroundDisAppear(delay: number = 350) {
    const disAppearBgAnimation = keyframes({
      from: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      to: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    });
    const disAppearBg = css({
      background: 'rgba(0, 0, 0, 0)',
      animation: `${disAppearBgAnimation} ${delay}ms`,
    });
    return disAppearBg;
  }

  return {
    dialog,
    dialogMask,
    dialogContent,
    dialogContentHeader,
    dialogContentBody,
    dialogContentFooter,
    contentAppear,
    contentDisAppear,
    backgroundAppear,
    backgroundDisAppear,
    closeIcon,
  };
}
