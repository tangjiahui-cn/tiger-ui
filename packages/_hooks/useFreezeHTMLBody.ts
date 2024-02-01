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

export function useFreezeHTMLBody(isFreeze: boolean) {
  const isMount = useRef<boolean>(false);
  const styleRef = useRef<any>(null);

  useEffect(() => {
    if (isFreeze) {
      const isScroll = isHasScrollBar(document.body);
      const el: HTMLStyleElement = document.createElement('style');
      el.innerHTML = `html body {height:100vh;width:${
        isScroll ? 'calc(100vw - 15px)' : '100vw'
      };overflow:hidden;}`;
      document.body.appendChild((styleRef.current = el));
      isMount.current = true;
    } else {
      if (isMount.current) {
        document.body.removeChild(styleRef.current);
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