import useEmotion from '../../_utils/hooks/useEmotion';
import usePrefix from '../../_utils/hooks/usePrefix';
import useToken from '../../_utils/hooks/useToken';
export type AlertType = 'info' | 'success' | 'error' | 'warn';
type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  alert: () => string;
  alertHidden: () => string;
  alertIcon: () => string;
  alertMessage: () => string;
  alertDescription: () => string;
  alertClose: () => string;
  alertType: (type: AlertType) => string;
} {
  const token = useToken();
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const alertHidden = () => `${prefix}-hidden`;
  const alertIcon = () => `${prefix}-icon`;
  const alertMessage = () => `${prefix}-message`;
  const alertDescription = () => `${prefix}-description`;
  const alertType = (type: AlertType) => `${prefix}-${type}`;
  const alertClose = () => `${prefix}-close`;

  const alert = () =>
    css({
      border: `1px solid ${token.borderColor}`,
      padding: '8px 16px',
      borderRadius: 2,
      display: 'flex',
      [`&.${alertHidden()}`]: {
        display: 'none',
        color: 'red',
      },
      [`& .${alertIcon()}`]: {
        paddingRight: 8,
        alignSelf: 'flex-start',
        fontSize: 16,
      },
      [`& .${alertMessage()}`]: {
        fontSize: 16,
        width: '100%',
        wordBreak: 'break-all',
      },
      [`& .${alertDescription()}`]: {
        width: '100%',
        wordBreak: 'break-all',
      },
      [`& .${alertClose()}`]: {
        cursor: 'pointer',
        fontSize: 12,
        paddingLeft: 8,
        display: 'flex',
        '&:hover': {
          color: token.colorHover,
        },
      },
      [`&.${alertType('info')}`]: {
        borderColor: token.infoBorderColor,
        backgroundColor: token.infoBg,
      },
      [`&.${alertType('success')}`]: {
        borderColor: token.successBorderColor,
        backgroundColor: token.successBg,
      },
      [`&.${alertType('error')}`]: {
        borderColor: token.errorBorderColor,
        backgroundColor: token.errorBg,
      },
      [`&.${alertType('warn')}`]: {
        borderColor: token.warnBorderColor,
        backgroundColor: token.warnBg,
      },
    });

  return {
    alert,
    alertHidden,
    alertIcon,
    alertMessage,
    alertDescription,
    alertClose,
    alertType,
  };
}
