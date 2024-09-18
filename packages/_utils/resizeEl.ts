/**
 * listen resize element
 *
 * @author tangjiahui
 * @date 2024/9/18
 */

export function resizeEl(el: HTMLElement, callback: (rectInfo: DOMRect) => void): () => void {
  let observer: null | ResizeObserver = new ResizeObserver(() => {
    const domRect = el.getBoundingClientRect();
    callback?.(domRect);
  });
  observer.observe(el);
  return () => {
    observer!.disconnect();
    observer = null;
  };
}
