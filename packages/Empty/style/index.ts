import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';

export function useStyle(componentName: string): {
  empty: () => string;
  emptyBorder: () => string;
  emptyMessage: () => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const emptyBorder = () => `${prefix}-border`;
  const emptyMessage = () => `${prefix}-message`;

  const empty = () =>
    css({
      gap: 2,
      height: 150,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      boxSizing: 'border-box',
      [`&.${emptyBorder()}`]: {
        border: `1px solid ${token.borderColor}`,
      },
      [`& .${emptyMessage()}`]: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.5)',
      },
    });

  return {
    empty,
    emptyBorder,
    emptyMessage,
  };
}
