import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import childrenSelector from '@/_utils/style/childrenSelector';
import { DirectionType } from '..';
import brotherSelector from '@/_utils/style/brotherSelector';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  drawer: () => string;
  drawerMask: () => string;
  drawerMaskAppear: (isAppear: boolean) => string;
  drawerContent: () => string;
  drawerContentDirection: (direction: DirectionType) => string;
  drawerContentDirectionAppear: (direction: DirectionType, isAppear: boolean) => string;
  drawerContentHead: () => string;
  drawerContentHeadTitle: () => string;
  drawerContentHeadClose: () => string;
  drawerContentBody: () => string;
  drawerContentFooter: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useEmotion({ key: prefix });

  const drawerMask = () => `${prefix}-mask`;
  const drawerMaskAppear = (isAppear: boolean) =>
    `${drawerMask()}-${isAppear ? 'appear' : 'disappear'}`;
  const drawerContent = () => `${prefix}-content`;
  const drawerContentDirection = (direction: DirectionType) => `${drawerContent()}-${direction}`;
  const drawerContentDirectionAppear = (direction: DirectionType, isAppear: boolean) => {
    return `${drawerContentDirection(direction)}-${isAppear ? 'appear' : 'disappear'}`;
  };
  const drawerContentHead = () => `${prefix}-head`;
  const drawerContentHeadTitle = () => `${prefix}-head-title`;
  const drawerContentHeadClose = () => `${prefix}-head-close`;
  const drawerContentBody = () => `${prefix}-body`;
  const drawerContentFooter = () => `${prefix}-footer`;

  function genKeyframes(xStart: string, xEnd: string, yStart: string, yEnd: string) {
    return keyframes({
      from: {
        transform: `translate(${xStart}, ${yStart})`,
      },
      to: {
        transform: `translate(${xEnd}, ${yEnd})`,
      },
    });
  }

  const keyframesUtils = {
    maskAppear: keyframes({
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    }),
    maskDisAppear: keyframes({
      '0%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
      },
    }),
  };

  const drawerMaskStyle = {
    [drawerMask()]: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: token.maskBg,
    },
  };
  const drawerMaskAppearStyle = {
    [drawerMaskAppear(true)]: {
      color: 'red',
      animation: `${keyframesUtils.maskAppear} ${token.duration}`,
    },
    [drawerMaskAppear(false)]: {
      animation: `${keyframesUtils.maskDisAppear} ${token.duration}`,
    },
  };

  const drawerContentDirectionStyle = {
    [drawerContentDirection('left')]: {
      top: 0,
      left: 0,
      ['&.' + drawerContentDirectionAppear('left', true)]: {
        animation: `${genKeyframes('-100%', '0', '0', '0')}`,
      },
      ['&.' + drawerContentDirectionAppear('left', false)]: {
        animation: `${genKeyframes('0', '-100%', '0', '0')}`,
      },
    },
    [drawerContentDirection('right')]: {
      top: 0,
      right: 0,
      ['&.' + drawerContentDirectionAppear('right', true)]: {
        animation: `${genKeyframes('100%', '0', '0', '0')}`,
      },
      ['&.' + drawerContentDirectionAppear('right', false)]: {
        animation: `${genKeyframes('0', '100%', '0', '0')}`,
      },
    },
    [drawerContentDirection('top')]: {
      top: 0,
      left: 0,
      ['&.' + drawerContentDirectionAppear('top', true)]: {
        animation: `${genKeyframes('0', '0', '-100%', '0')}`,
      },
      ['&.' + drawerContentDirectionAppear('top', false)]: {
        animation: `${genKeyframes('0', '0', '0', '-100%')}`,
      },
    },
    [drawerContentDirection('bottom')]: {
      bottom: 0,
      left: 0,
      ['&.' + drawerContentDirectionAppear('bottom', true)]: {
        animation: `${genKeyframes('0', '0', '100%', '0')}`,
      },
      ['&.' + drawerContentDirectionAppear('bottom', false)]: {
        animation: `${genKeyframes('0', '0', '0', '100%')}`,
      },
    },
  };
  const drawerContentHeadStyle = {
    [drawerContentHead()]: {
      padding: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ['& .' + drawerContentHeadTitle()]: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      ['& .' + drawerContentHeadClose()]: {
        cursor: 'pointer',
      },
    },
  };
  const drawerContentBodyStyle = {
    [drawerContentBody()]: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px',
    },
  };
  const drawerContentFooterStyle = {
    [drawerContentFooter()]: {
      overflow: 'hidden',
      padding: 16,
    },
  };

  const drawerContentStyle = {
    [drawerContent()]: {
      position: 'absolute',
      background: 'white',
      zIndex: 999,
      boxShadow: token.shadow3,
      display: 'flex',
      flexDirection: 'column',
      ...brotherSelector(drawerContentDirectionStyle),
      ...childrenSelector(drawerContentHeadStyle),
      ...childrenSelector(drawerContentBodyStyle),
      ...childrenSelector(drawerContentFooterStyle),
    },
  };

  const drawer = () =>
    css({
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      ...childrenSelector(drawerContentStyle),
      ...childrenSelector(drawerMaskStyle),
      ...childrenSelector(drawerMaskAppearStyle),
    });

  return {
    drawer,
    drawerMask,
    drawerMaskAppear,
    drawerContent,
    drawerContentDirection,
    drawerContentDirectionAppear,
    drawerContentHead,
    drawerContentHeadTitle,
    drawerContentHeadClose,
    drawerContentBody,
    drawerContentFooter,
  };
}
