import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  tree: () => string;
  treeBordered: () => string;
  treeDisplayNone: () => string;
  treeLine: () => string;
  treeLineHide: () => string;
  treeLineHead: () => string;
  treeLineHeadArrow: () => string;
  treeLineHeadTitle: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const textEllipsis: StyleObject = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const treeBordered = () => `${prefix}-bordered`;
  const treeDisplayNone = () => `${prefix}-display-none`;
  const treeLine = () => `${prefix}-line`;
  const treeLineHide = () => `${prefix}-line-hide`;
  const treeLineHead = () => `${prefix}-line-head`;
  const treeLineHeadArrow = () => `${prefix}-line-head-arrow`;
  const treeLineHeadTitle = () => `${prefix}-line-head-title`;

  const treeLineStyle: StyleObject = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    [`& .${treeLineHide()} > .${treeLine()}`]: {
      display: 'none',
    },
    [`& .${treeLineHead()}`]: {
      display: 'flex',
      [`& .${treeLineHeadArrow()}`]: {
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
          transition: `all ${token.duration}`,
        },
      },
      [`& .${treeLineHeadTitle()}`]: {
        flex: 1,
        ...textEllipsis,
      },
    },
  };

  const tree = () =>
    css({
      padding: 8,
      [`&.${treeLine()}`]: treeLineStyle,
      [`& .${treeLine()}`]: {
        ...treeLineStyle,
        '& > &': {
          marginLeft: 16,
        },
      },
      [`&.${treeBordered()}`]: {
        border: `1px solid ${token.borderColor}`,
      },
      [`& .${treeDisplayNone()}`]: {
        display: 'none',
      },
    });

  return {
    tree,
    treeBordered,
    treeDisplayNone,
    treeLine,
    treeLineHide,
    treeLineHead,
    treeLineHeadArrow,
    treeLineHeadTitle,
  };
}
