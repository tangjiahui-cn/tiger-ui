/**
 * window listener proxy.
 *
 * @author tangjiahui
 * @date 2024/6/6
 */

type Callback = (e: any) => void;

interface EventOption {
  once?: boolean;
}

interface CallbackData {
  // runtime callback.
  callback: Callback;
  // only run one time
  once?: boolean;
}

interface MapData {
  listener: Callback;
  list: CallbackData[];
}

export class WindowListener {
  private _map: Map<string, MapData> = new Map();

  public addEventListener<K extends keyof WindowEventMap>(
    type: K,
    callback: Callback,
    option?: EventOption,
  ) {
    let eventData = this._map.get(type);

    // new a callback data.
    const callbackData: CallbackData = {
      callback,
      once: option?.once,
    };

    // create a new listener.
    if (!eventData) {
      const that = this;
      const listener = (e: any) => {
        const _eventData = that._map.get(type);
        if (!_eventData) {
          return;
        }
        const list = _eventData?.list || [];
        // run all callbacks, and filter the once event.
        const nextList = list.filter((callbackData: CallbackData) => {
          callbackData?.callback?.(e);
          return !callbackData.once;
        });
        // clear the window listener.
        if (!nextList.length) {
          this.clearOriginListener(type, listener);
          return;
        }
        // update listen callback list.
        if (list.length !== nextList.length) {
          _eventData.list = nextList;
        }
      };

      this._map.set(type, {
        list: [callbackData],
        listener,
      });

      window.addEventListener(type, listener);
      return;
    }

    // window event listener exist already.
    eventData.list.push(callbackData);
  }

  public removeEventListener<K extends keyof WindowEventMap>(type: K, callback?: Callback) {
    const mapData = this._map.get(type);
    if (!mapData) {
      return;
    }
    mapData.list = mapData.list.filter((x: CallbackData) => x.callback !== callback);
    if (!mapData.list.length) {
      this.clearOriginListener(type, mapData.listener);
    }
  }

  private clearOriginListener(type: string, listener: Callback) {
    window.removeEventListener(type, listener);
    this._map.delete(type);
  }
}

export const windowListener = new WindowListener();
