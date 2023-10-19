import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
import childrenSelector from '../../_utils/style/childrenSelector';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  dialog: () => string;
  appear: (isAppear: boolean) => string;
  mask: () => string;
  content: () => string;
  contentHead: () => string;
  contentHeadTitle: () => string;
  contentHeadClose: () => string;
  contentBody: () => string;
  contentFooter: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css, keyframes } = useEmotion({ key: prefix });

  const appearKeyframe = keyframes({
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  });

  const disAppearKeyframe = keyframes({
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  });

  const appear = (isAppear: boolean) => `${prefix}-${isAppear ? 'appear' : 'disappear'}`;
  const appearStyle = {
    [appear(true)]: {
      opacity: 1,
      animation: `${appearKeyframe} 500ms`,
    },
    [appear(false)]: {
      opacity: 0,
      animation: `${disAppearKeyframe} 500ms`,
    },
  };

  const mask = () => `${prefix}-mask`;
  const maskStyle = {
    [mask()]: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: token.maskBg,
    },
  };

  const content = () => `${prefix}-content`;
  const contentHead = () => `${content()}-head`;
  const contentHeadTitle = () => `${contentHead()}-title`;
  const contentHeadClose = () => `${contentHead()}-close`;
  const contentBody = () => `${content()}-body`;
  const contentFooter = () => `${content()}-footer`;

  const contentStyle = {
    [content()]: {
      zIndex: 1,
      backgroundColor: 'white',
      boxShadow: token.shadow3,
      ...childrenSelector({
        [contentHead()]: {
          padding: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...childrenSelector({
            [contentHeadTitle()]: {
              fontSize: 16,
              fontWeight: 'bold',
            },
          }),
          ...childrenSelector({
            [contentHeadClose()]: {
              cursor: 'pointer',
            },
          }),
        },
      }),
      ...childrenSelector({
        [contentBody()]: {
          padding: '0 16px',
        },
      }),
      ...childrenSelector({
        [contentFooter()]: {
          overflow: 'hidden',
          padding: 16,
        },
      }),
    },
  };

  const dialog = () =>
    css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...childrenSelector(appearStyle),
      ...childrenSelector(maskStyle),
      ...childrenSelector(contentStyle),
    });

  return {
    dialog,
    appear,
    mask,
    content,
    contentHead,
    contentHeadTitle,
    contentHeadClose,
    contentBody,
    contentFooter,
  };
}
