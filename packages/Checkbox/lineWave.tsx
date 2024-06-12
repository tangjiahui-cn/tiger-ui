/**
 * triggerWave
 *
 * @author tangjiahui
 * @date 2024/6/12
 */
import { cloneElement, MutableRefObject, useCallback, useRef } from 'react';
import { usePrefix } from '@/ConfigProvider';
import { useUpdateEffect } from '@/_hooks';
import './lineWave.less';

type RemoveWave = (() => void) | undefined;
type ShowWave = (dom: HTMLElement) => RemoveWave;

interface Props {
  visible?: boolean;
  delay?: number;
  children: React.ReactElement;
}

const animationDuration = 300; // (unit: ms)
export default function LineWave(props: Props) {
  const { visible, delay = 100 } = props;
  const innerRef = useRef<HTMLElement>();
  const prefix = usePrefix('lineWave');
  const ref: MutableRefObject<any> = (props?.children as any)?.ref || innerRef;

  const showWave: ShowWave = useCallback((dom: HTMLElement) => {
    if (!dom) {
      return;
    }
    const style = getComputedStyle(dom);
    const color = style.borderColor || style.backgroundColor;
    let div: HTMLElement = document.createElement('div');

    div.style.borderColor = color;
    div.style.animationDuration = `${animationDuration}ms`;
    div.className = `${prefix}`;
    dom.appendChild(div);

    let isRemoved = false;
    const removeFn = () => {
      if (!isRemoved) {
        dom.removeChild(div);
        isRemoved = true;
      }
    };

    setTimeout(() => removeFn(), animationDuration);
    return removeFn;
  }, []);

  useUpdateEffect(() => {
    let timerId: any;
    let removeWave: RemoveWave;
    if (visible) {
      timerId = setTimeout(() => {
        removeWave = showWave(ref.current);
        timerId = undefined;
      }, delay);
    }
    return () => {
      removeWave?.();
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [visible]);

  return cloneElement(props?.children, { ref });
}
