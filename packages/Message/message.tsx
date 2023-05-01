import { isFunction, isNumber, isObject, isString } from '../_utils/type';
import MessageBox from './messageBox';
import styles from './index.less';
import React from 'react';
import { createRoot } from 'react-dom/client';

export type MessageReturn = Promise<undefined>;
export type MessageType = 'none' | 'success' | 'error' | 'warn' | 'warning' | 'info' | 'loading';
export type MessageOptions = {
  // 对话框消息图标
  icon?: JSX.Element;
  // 对话框内容
  type: MessageType;
  // 对话框提示内容
  content?: string | JSX.Element;
  // 对话框关闭延时
  duration?: number;
  // 对话框关闭回调函数
  onClose?: () => void;
};

const defaultMessageOptions: MessageOptions = {
  type: 'none',
  content: '',
  duration: 1200,
  onClose: undefined,
};

export type MessageOnCloseFn = () => void;
export type MessageFunction = (
  msg: string | MessageOptions,
  duration?: number | MessageOnCloseFn,
  onClose?: MessageOnCloseFn,
) => MessageReturn;

export interface MessageProps {
  // 打开对话框
  open: (options: MessageOptions) => void;
  // 成功提示语
  success: MessageFunction;
  // 失败提示语
  error: MessageFunction;
  // 警告提示语
  warn: MessageFunction;
  // 警告提示语 (别名)
  warning: MessageFunction;
  // 消息提示语
  info: MessageFunction;
  // 加载中提示语
  loading: MessageFunction;
}

export class Message {
  private containerDom?: HTMLDivElement;

  private createContainerDom(): HTMLDivElement {
    const dom = document.createElement('div');
    dom.className = styles['message-container'];
    return dom;
  }

  private openMessageBox(options: MessageOptions): MessageReturn {
    return new Promise((resolve) => {
      // duration not less than 0.
      if (typeof options.duration === 'number' && options.duration < 0) {
        throw new Error(`duration "${options.duration}" is Not less than 0.`);
      }

      // check container.
      if (!this.containerDom) {
        this.containerDom = this.createContainerDom();
        document.body.appendChild(this.containerDom);
      }

      // mount messageBox.
      const messageBoxDom = document.createElement('div');
      createRoot(messageBoxDom).render(<MessageBox {...options} />);
      this.containerDom.appendChild(messageBoxDom);

      // unmount messageBox.
      setTimeout(() => {
        this.containerDom?.removeChild(messageBoxDom);
        options?.onClose?.();
        return resolve?.(undefined);
      }, options.duration);
    });
  }

  private getOptions(args: IArguments): MessageOptions {
    if (!args?.[0]) return defaultMessageOptions;
    if (isObject(args[0])) {
      return args[0];
    }

    const options: MessageOptions = Object.assign({}, defaultMessageOptions);
    if (isString(args[0])) {
      options.content = args[0];
    }

    if (args?.[1] !== undefined) {
      if (isNumber(args[1])) {
        options.duration = args[1];
      } else if (isFunction(args[1])) {
        options.onClose = args[1];
      }
    }

    if (args?.[2] !== undefined) {
      options.onClose = args[2];
    }

    return options;
  }

  private openMessage(args: IArguments, type: MessageType): MessageReturn {
    const options: MessageOptions = this.getOptions(args);
    options.type = type;
    return this.openMessageBox(options);
  }

  public open(): MessageReturn {
    const options: MessageOptions = Object.assign(
      {},
      defaultMessageOptions,
      this.getOptions(arguments),
    );
    return this.openMessageBox(options);
  }

  // success
  public success(): MessageReturn {
    return this.openMessage(arguments, 'success');
  }

  // error
  public error(): MessageReturn {
    return this.openMessage(arguments, 'error');
  }

  // warn
  public warn(): MessageReturn {
    return this.openMessage(arguments, 'warn');
  }

  // warning
  public warning(): MessageReturn {
    return this.openMessage(arguments, 'warning');
  }

  public info(): MessageReturn {
    return this.openMessage(arguments, 'info');
  }

  public loading(): MessageReturn {
    return this.openMessage(arguments, 'loading');
  }
}
