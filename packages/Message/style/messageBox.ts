import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import brotherSelector from '../../_utils/style/brotherSelector';
import childrenSelector from '@/_utils/style/childrenSelector';

export function useStyle(componentName: string): {
  messageBox: () => string;
  appear: (isAppear: boolean) => string;
  body: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useCssInJs({ key: prefix });

  const appearKeyframes = keyframes({
    from: {
      marginTop: 0,
    },
    to: {
      marginTop: 16,
    },
  });

  const disAppearKeyframes = keyframes({
    from: {
      marginTop: 16,
      opacity: 1,
    },
    to: {
      marginTop: 0,
      opacity: 0,
    },
  });

  const appear = (isAppear: boolean) => `${prefix}-${isAppear ? 'appear' : 'disappear'}`;
  const appearStyle = {
    [appear(true)]: {
      animation: `${appearKeyframes} 0.2s`,
    },
    [appear(false)]: {
      animation: `${disAppearKeyframes} 0.2s`,
    },
  };

  const body = () => `${prefix}-body`;
  const bodyStyle = {
    [body()]: {
      backgroundColor: 'white',
      padding: '8px 16px',
      display: 'inline-flex',
      alignItems: 'center',
      boxShadow: token.shadow3,
      gap: 8,
    },
  };

  const messageBox = () =>
    css({
      marginTop: 16,
      fontSize: token.fontSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `all ${token.duration}`,
      ...brotherSelector(appearStyle),
      ...childrenSelector(bodyStyle),
    });

  return {
    messageBox,
    appear,
    body,
  };
}
