import createEmotion from '@emotion/css/create-instance';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  collapse: () => string;

  collapseItem: () => string;
  collapseItemExpand: () => string;
  collapseItemLabel: () => string;
  collapseItemLabelIcon: () => string;
  collapseItemChildren: () => string;
  collapseItemChildrenWrap: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = createEmotion({ key: prefix });

  const padding = '8px 16px';

  const collapseItem = () => `${prefix}-item`;
  const collapseItemExpand = () => `${prefix}-item-expand`;
  const collapseItemLabel = () => `${prefix}-item-label`;
  const collapseItemLabelIcon = () => `${prefix}-item-label-icon`;
  const collapseItemChildren = () => `${prefix}-item-children`;
  const collapseItemChildrenWrap = () => `${prefix}-item-children-wrap`;

  const collapse = () =>
    css({
      [`& .${collapseItem()}`]: {
        border: `1px solid ${token.borderColor}`,
        [`& + .${collapseItem()}`]: {
          marginTop: -1,
        },
        [`& .${collapseItemExpand()}`]: {
          transform: 'rotate(90deg)',
        },
        [`& .${collapseItemLabel()}`]: {
          padding,
          background: 'whitesmoke',
          borderRadius: token.borderRadius,
          cursor: 'pointer',
          [`& .${collapseItemLabelIcon()}`]: {
            display: 'inline-block',
            marginRight: 8,
            transition: `all ${token.duration}`,
            '& a': {
              color: token.color,
            },
          },
        },
        [`& .${collapseItemChildren()}`]: {
          padding,
          borderRadius: token.borderRadius,
          borderTop: `1px solid ${token.borderColor}`,
        },
        [`& .${collapseItemChildrenWrap()}`]: {
          overflow: 'hidden',
          transition: `all ${token.duration}`,
        },
      },
    });

  return {
    collapse,
    collapseItem,
    collapseItemExpand,
    collapseItemLabel,
    collapseItemLabelIcon,
    collapseItemChildren,
    collapseItemChildrenWrap,
  };
}
