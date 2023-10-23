import useCssInJs from '../../_utils/hooks/useCssInJs';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  tabs: () => string;
  tabsBar: () => string;
  tabsBarItem: () => string;
  tabsBarItemChoose: () => string;
  tabsBody: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useCssInJs({ key: prefix });

  const tabsBar = () => `${prefix}-bar`;
  const tabsBarItem = () => `${prefix}-bar-item`;
  const tabsBarItemChoose = () => `${prefix}-bar-item-choose`;
  const tabsBody = () => `${prefix}-body`;

  const tabs = () =>
    css({
      padding: 16,
      [`& .${tabsBar()}`]: {
        padding: '0 8px',
        borderBottom: `1px solid ${token.borderColor}`,
        [`& .${tabsBarItem()}`]: {
          cursor: 'pointer',
          display: 'inline-block',
          transition: `all ${token.duration}`,
          userSelect: 'none',
          padding: '8px 0',
          borderBottom: '2px solid transparent',
          '&:hover': {
            color: token.primary,
            borderBottom: `2px solid ${token.primary}`,
          },
          '&:active': {
            color: token.primaryActive,
          },
          [`& + .${tabsBarItem()}`]: {
            marginLeft: 32,
          },
          [`&.${tabsBarItemChoose()}`]: {
            color: token.primary,
            borderBottom: `2px solid ${token.primary}`,
          },
        },
      },
      [`& .${tabsBody()}`]: {
        padding: 8,
      },
    });

  return {
    tabs,
    tabsBar,
    tabsBarItem,
    tabsBarItemChoose,
    tabsBody,
  };
}
