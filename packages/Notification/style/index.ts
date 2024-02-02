import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  notificationBox: () => string;
  notificationBoxTitle: () => string;
  notificationBoxAppear: (isAppear: boolean) => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useCssInJs({ key: prefix });

  const appear = keyframes({
    from: {
      transform: 'translate(110%, 0)',
    },

    to: {
      transform: 'translate(0, 0)',
    },
  });

  const disappear = keyframes({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  });

  const notificationBoxTitle = () => `${prefix}-title`;
  const notificationBoxAppear = (isAppear: boolean) =>
    `${prefix}-${isAppear ? 'appear' : 'disappear'}`;

  const notificationBox = () =>
    css({
      position: 'relative',
      padding: 16,
      background: 'white',
      boxShadow: token.shadow3,
      marginBottom: 16,
      [`& .${notificationBoxTitle()}`]: {
        // fontSize: '1.15em'
        fontSize: '1.1em',
      },
      [`&.${notificationBoxAppear(true)}`]: {
        animationName: appear,
      },
      [`&.${notificationBoxAppear(false)}`]: {
        animationName: disappear,
      },
    });

  return {
    notificationBox,
    notificationBoxTitle,
    notificationBoxAppear,
  };
}
