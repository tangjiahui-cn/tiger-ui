interface EventEmitterMsgData {
  once?: boolean;
  fn?: ((payload: any) => void) | ((payload: any) => () => void);
}

interface EventEmitterMsg {
  [k: string]: EventEmitterMsgData[];
}

/**
 * 发布-订阅事件
 */
export class EventEmitter {
  msg: EventEmitterMsg = {};

  on(type: string, fn: (payload: any) => void, once?: boolean) {
    const msgData: EventEmitterMsgData = {
      fn,
      once,
    };
    this.msg[type] ? this.msg[type].push(msgData) : (this.msg[type] = [msgData]);
  }

  once(type: string, fn: (payload: any) => void) {
    this.on(type, fn, true);
  }

  emit(type: string, payload: any) {
    if (this.msg[type]) {
      this.msg[type] = this.msg[type].filter((msgData: EventEmitterMsgData) => {
        msgData?.fn?.(payload)?.();
        return !msgData?.once;
      });
    }
  }

  cancel(type: string) {
    delete this.msg[type];
  }
}
