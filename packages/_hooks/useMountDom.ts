/**
 * useMountDom
 *
 * @author tangjiahui
 * @date 2024/02/02
 * @description you can mount a react-element at a html node, which provide an easy
 *   way to 'mount'、'unmount' the react-element.
 */
import React, { useCallback, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { useEffectOnce } from '.';

export function useMountDom<Payload = any>(
  // mount dom node.
  target: HTMLElement,
  // be mounted react-element.
  element: React.ReactNode | ((payload?: Payload) => React.ReactNode),
  // the last time that will unmount react-element.
  delay: number = 300,
) {
  const divRef = useRef<HTMLDivElement>();
  const nodeRef = useRef<Root>();
  const ref = useRef<{
    mount?: (payload: Payload) => void;
    unMount?: () => void;
    willUnMount?: () => void;
    cancelWillUnMount?: () => void;
  }>({
    mount: undefined,
    unMount: undefined,
    willUnMount: undefined,
    cancelWillUnMount: undefined,
  });

  const mount = useCallback((payload: Payload) => {
    if (!divRef.current) {
      divRef.current = document.createElement('div');
    }
    nodeRef.current = createRoot(divRef.current);
    nodeRef.current.render(typeof element === 'function' ? element?.(payload) : element);
    document.body.appendChild(divRef.current);

    // bind unmount.
    ref.current.unMount = () => {
      if (!ref.current.unMount) {
        return;
      }
      nodeRef.current?.unmount?.();
      if (divRef.current) {
        document.body.removeChild(divRef.current);
      }
      ref.current.unMount = undefined;
    };
  }, []);

  const willUnMount = useCallback(() => {
    let timerId: any = setTimeout(() => {
      ref.current.unMount?.();
      timerId = undefined;
    }, delay);

    ref.current.cancelWillUnMount = () => {
      ref.current.cancelWillUnMount = undefined;
      if (timerId) {
        clearTimeout(timerId);
        timerId = undefined;
      }
    };
  }, []);

  useEffectOnce(() => {
    ref.current.mount = mount;
    ref.current.willUnMount = willUnMount;
    return () => {
      ref.current?.unMount?.();
    };
  });

  return ref;
}
