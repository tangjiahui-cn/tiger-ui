/**
 * listen global event.
 *
 * @author tangjiahui
 * @date 2024/01/31
 */
export type GlobalListenerLatestElement = HTMLElement | null | undefined;
export class GlobalListener {
  private isListening = false;
  private listenCount = 0;
  private latest: GlobalListenerLatestElement = null;

  private callback(e: PointerEvent) {
    this.latest = e.target as any;
  }

  public listen(): void {
    this.listenCount++;
    if (this.isListening) {
      return;
    }
    window.addEventListener('pointerdown', this.callback.bind(this));
    this.isListening = true;
  }

  public unListen(): void {
    if (!this.isListening) {
      return;
    }
    this.listenCount--;
    if (this.listenCount <= 0) {
      window.removeEventListener('pointerdown', this.callback.bind(this));
    }
  }

  public getLatest(): GlobalListenerLatestElement {
    return this.latest;
  }

  public getLatestRectInfo(): DOMRect | undefined {
    return this.getLatest()?.getBoundingClientRect?.();
  }
}
