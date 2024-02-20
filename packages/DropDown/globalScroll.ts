/**
 * globalScroll
 *
 * @author tangjiahui
 * @date 2024/2/20
 */
import React from 'react';
import throttle from 'lodash/throttle';

type Callback = (e: React.MouseEventHandler) => void;
export class GlobalScroll {
  private callbacks: Callback[] = [];
  private listenCallback: Callback | undefined;

  public listen(callback: Callback) {
    this.callbacks.push(callback);

    if (this.callbacks.length && !this.listenCallback) {
      const that = this;
      this.listenCallback = throttle(function (e: React.MouseEventHandler) {
        that.callbacks.forEach((cb: Callback) => cb(e));
      }, 20);
      window.addEventListener('scroll', this.listenCallback as any, {
        capture: true,
      });
    }
  }

  public unListen(callback: Callback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    if (!this.callbacks.length && this.callbacks) {
      window.removeEventListener('scroll', this.listenCallback as any);
      this.listenCallback = undefined;
    }
  }

  public getAll() {
    return this.callbacks;
  }
}
