import * as React from 'react';
import NotificationBox from './NotificationBox';
import ReactDOM from 'react-dom/client';
import type { NotificationBoxProps } from './NotificationBox';
import { createClassCss } from 'class-css';

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

const ins = createClassCss({ key: 'notification' });
const css = ins.css.bind(ins);
export class NotificationGen {
  private containerDom?: HTMLDivElement;

  private createContainerDom(): HTMLDivElement {
    const dom = document.createElement('div');
    dom.className = css({
      position: 'fixed',
      right: 16,
      top: 16,
      zIndex: 999,
    });
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

  public warning(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'warn' }));
  }

  public info(config: NotificationConfig) {
    return this.open(Object.assign(config, { type: 'info' }));
  }
}
