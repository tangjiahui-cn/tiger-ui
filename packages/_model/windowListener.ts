/**
 * window listener proxy.
 *
 * @author tangjiahui
 * @date 2024/6/6
 */

type Callback = (e: any) => void;

export class WindowListener {
  _callbacksMap = new Map<string, Array<Callback>>();
  _listerMap = new Map<string, Callback>();

  public addEventListener(type: string, callback: Callback) {
    const callbacks = this._callbacksMap.get(type);
    if (callbacks?.length) {
      callbacks.push(callback);
      return;
    }
    const that: any = this;
    const listener = function (e: any) {
      that._callbacksMap.get(type)?.forEach?.((callback: Callback) => callback(e));
    };
    this._callbacksMap.set(type, [callback]);
    this._listerMap.set(type, listener);
    window.addEventListener(type, listener);
  }

  public removeEventListener(type: string, callback: Callback) {
    let callbacks = this._callbacksMap.get(type);
    if (callbacks?.length) {
      callbacks = callbacks.filter((_callback) => _callback !== callback);
    }
    if (!callbacks?.length) {
      const listener = this._listerMap.get(type);
      if (listener) {
        window.removeEventListener(type, listener);
      }
    }
  }
}

export const windowListener = new WindowListener();
