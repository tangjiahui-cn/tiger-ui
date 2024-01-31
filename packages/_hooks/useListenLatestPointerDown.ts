/**
 * listen latest pointer down element.
 *
 * @author tangjiahui
 * @date 2024/01/31
 */
import { GlobalListener } from '@/_model';
import { useEffect, useRef } from 'react';

const globalListener = new GlobalListener();
export function useListenLatestPointerDown() {
  const targetRef = useRef(globalListener);

  useEffect(() => {
    globalListener.listen();
    return () => {
      globalListener.unListen();
    };
  }, []);

  return targetRef;
}
