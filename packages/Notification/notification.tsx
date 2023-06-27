import * as React from 'react';
import NotificationBox from './NotificationBox';
import ReactDOM from 'react-dom/client';
import styles from './index.less';
import type { NotificationBoxProps } from './NotificationBox';

export type NotificationConfig = Omit<NotificationBoxProps, 'onRemove'> & {
  onClose?: () => void;
};
export type NotificationType = 'success' | 'error' | 'warn' | 'info' | 'none';

export type NotificationReturn = Promise<undefined>;
export type NotificationStaticFunc = (config: NotificationConfig) => NotificationReturn;
export interface NotificationProps {
  open: NotificationStaticFunc;
  success: NotificationStaticFunc;
  error: NotificationStaticFunc;
  warn: NotificationStaticFunc;
  info: NotificationStaticFunc;
}

const defaultConfig: NotificationConfig = {};

function genConfig(config: NotificationConfig): NotificationConfig {
  return Object.assign({}, defaultConfig, config);
}

export class NotificationGen {
  private containerDom?: HTMLDivElement;

  private createContainerDom(): HTMLDivElement {
    const dom = document.createElement('div');
    dom.className = styles['notification-container'];
    return dom;
  }

  public open(config: NotificationConfig) {
    return new Promise((resolve) => {
      if (!this.containerDom) {
        this.containerDom = this.createContainerDom();
        document.body.appendChild(this.containerDom);
      }

      const div = document.createElement('div');
      const props = genConfig(config);
      ReactDOM.createRoot(div).render(
        <NotificationBox
          {...props}
          onRemove={() => {
            this.containerDom?.removeChild(div);
            props?.onClose?.();
            resolve(null);
          }}
        />,
      );
      this.containerDom?.appendChild(div);
    });
  }

  public success(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'success' }));
  }

  public error(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'error' }));
  }

  public warn(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'warn' }));
  }

  public info(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'info' }));
  }
}
