/**
 * wave
 *
 * @author tangjiahui
 * @date 2024/5/29
 */
import { cloneElement, MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { usePrefix } from '@/ConfigProvider';
import './wave.less';

interface Props {
  disabled?: boolean;
  children: React.ReactElement;
}

const animationDuration = 1200; // (unit: ms)
export default function Wave(props: Props) {
  const { disabled } = props;
  const innerRef = useRef<HTMLElement>();
  const prefix = usePrefix('wave');
  const ref: MutableRefObject<any> = (props?.children as any)?.ref || innerRef;

  const isListeningRef = useRef(false);

  const showWave = useCallback((e: any) => {
    if (!e.target) {
      return;
    }
    const style = getComputedStyle(e.target);
    const color = style.borderColor || style.backgroundColor;
    let div: HTMLElement = document.createElement('div');

    div.style.boxShadow = `0 0 0 2px ${color}`;
    div.style.animationDuration = `${animationDuration}ms`;
    div.className = `${prefix}`;

    e.target.appendChild(div);
    setTimeout(() => {
      e.target.removeChild(div);
    }, animationDuration);
  }, []);

  useEffect(() => {
    if (!isListeningRef.current && !disabled) {
      ref.current?.addEventListener('click', showWave);
      isListeningRef.current = true;
    }
    return () => {
      if (isListeningRef.current) {
        ref.current?.removeEventListener('click', showWave);
        isListeningRef.current = false;
      }
    };
  }, [disabled]);

  return cloneElement(props?.children, { ref });
}
