/**
 * listen to freeze HTML body.
 *
 * @author tangjiahui
 * @date 2024/02/01
 */
import { useEffect, useRef } from 'react';
import { useUnmount } from '.';

// judge target is has a scroll bar.
function isHasScrollBar(node: HTMLElement): boolean {
  try {
    return node.scrollHeight > node.clientHeight;
  } catch {
    return false;
  }
}

// get target scroll bar width.
function getScrollBarWidth(node: HTMLElement): number {
  try {
    const parentWidth =
      node?.parentNode === document.documentElement
        ? window.innerWidth
        : (node?.parentNode as HTMLElement)?.clientWidth || 0;
    return parentWidth - (document.body?.clientWidth || 0);
  } catch {
    return 0;
  }
}

export function useFreezeHTMLBody(isFreeze: boolean) {
  const isMount = useRef<boolean>(false);
  const styleRef = useRef<any>(null);

  useEffect(() => {
    if (isFreeze) {
      const isScroll = isHasScrollBar(document.body);
      const el: HTMLStyleElement = document.createElement('style');
      el.innerHTML = `html body {height:100vh;width:${
        isScroll ? `calc(100vw - ${getScrollBarWidth(document.body)}px)` : '100vw'
      };overflow:hidden;}`;
      document.head.appendChild((styleRef.current = el));
      isMount.current = true;
    } else {
      if (isMount.current) {
        document.head.removeChild(styleRef.current);
        isMount.current = false;
      }
    }
  }, [isFreeze]);

  useUnmount(() => {
    if (isMount.current) {
      document.body.removeChild(styleRef.current);
    }
    styleRef.current = null;
  });
}
