import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  upload: () => string;
  uploadItem: () => string;
  uploadItemName: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const textEllipsis: StyleObject = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const uploadItem = () => `${prefix}-item`;
  const uploadItemName = () => `${prefix}-item-name`;
  const upload = () =>
    css({
      [`& .${uploadItem()}`]: {
        padding: '4px 0',
        cursor: 'default',
        transition: `all ${token.duration}`,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        [`& .${uploadItemName()}`]: {
          flex: 1,
          ...textEllipsis,
        },
      },
    });

  return { upload, uploadItem, uploadItemName };
}
