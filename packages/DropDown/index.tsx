/**
 * DropDown
 *
 * if you want to design components with 'DropDown',
 * please support:
 * (1) ref            [HTMLElement-ref]
 * (2) onPointerDown  [native Event]
 * (2) onPointerEnter  [native Event]
 * (2) onPointerLeave  [native Event]
 *
 * @author tangjiahui
 * @date 2024/1/30
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { useStyle } from '@/DropDown/style';

// panel position
interface PanelPosition {
  top: number;
  left: number;
  width: number;
}

export type DropDownTrigger = 'click'; // TODO: add 'hover'.
const DEFAULT_TRIGGER: DropDownTrigger[] = ['click'];

export interface DropDownProps {
  /**
   * @description 手动控制显隐
   * @default undefined
   */
  open?: boolean;
  /**
   * @description 样式
   * @default undefined
   */
  style?: React.CSSProperties; // 浮层样式
  /**
   * @description 显隐改变回调
   * @default undefined
   */
  onOpenChange?: (visible: boolean) => void; // 显隐回调
  /**
   * @description 触发打开行为
   * @default ['click']
   */
  trigger?: DropDownTrigger | DropDownTrigger[];
  /**
   * @description 下拉浮层面板
   * @default undefined
   */
  popupPanel?: React.ReactElement;
  /**
   * @description children
   * @default undefined
   */
  children?: React.ReactElement;
}

export default function (props: DropDownProps) {
  if (Array.isArray(props?.children)) {
    throw new Error('children is only a single React-JSX.');
  }
  if (Array.isArray(props?.popupPanel)) {
    throw new Error('popupPanel is only a single React-JSX.');
  }

  // is Mouse in DropDown Range.
  const isInRange = useRef<boolean>(false);

  const unListenPointerDownRef = useRef<() => void>();

  // trigger behavior array.
  const trigger: DropDownTrigger[] = useMemo(
    () =>
      Array.isArray(props?.trigger)
        ? props?.trigger
        : props?.trigger
        ? [props?.trigger]
        : DEFAULT_TRIGGER,
    [props?.trigger],
  );

  const style = useStyle('dropDown');

  // children's ref.
  const ref = useRef<any>();

  // Is that control 'open' attribute from outer.
  const isForceOpenRef = useRef(props?.open !== undefined);

  // A animation timer.
  const timerId = useRef<any>();

  // control panel show or not.
  const [nextVisible, setNextVisible] = useState<boolean>(false);

  // animation classes.
  const [animationClass, setAnimationClass] = useState<string>('');

  // dropdown panel.
  const [position, setPosition] = useState<PanelPosition>({
    top: 0,
    left: 0,
    width: 0,
  });

  function globalListenPointerDown() {
    if (unListenPointerDownRef.current) {
      return;
    }
    unListenPointerDownRef.current = (() => {
      function close() {
        if (isInRange.current) {
          return;
        }
        props?.onOpenChange?.(false);
        // control inside.
        if (!isForceOpenRef.current) {
          changeVisible(false);
          unListenPointerDownRef.current?.();
        }
      }
      window.addEventListener('pointerdown', close);
      return () => {
        unListenPointerDownRef.current = undefined;
        window.removeEventListener('pointerdown', close);
      };
    })();
  }

  function getCurrentPanelPosition(): PanelPosition {
    const rect: DOMRect = (ref.current as HTMLDivElement).getBoundingClientRect();
    return {
      top: (rect?.bottom || 0) + (document.body.scrollTop || document.documentElement.scrollTop),
      width: rect.width,
      left: rect.left,
    };
  }

  function changeVisible(open: boolean) {
    setPosition(getCurrentPanelPosition());
    if (open) {
      if (timerId.current) {
        clearTimeout(timerId.current);
        timerId.current = null;
      }
      setAnimationClass(style.dropDownExpand());
      setNextVisible(true);
    } else {
      setAnimationClass(style.dropDownUnExpand());
      timerId.current = setTimeout(() => {
        setNextVisible(false);
        timerId.current = null;
      }, 250);
    }
  }

  // listen 'open' attribute.
  useEffect(
    () => {
      if (!isForceOpenRef.current) {
        return;
      }
      // control from outside
      changeVisible(!!props?.open);
      if (props?.open) {
        globalListenPointerDown();
      } else {
        unListenPointerDownRef.current?.();
      }
    },
    isForceOpenRef.current ? [props?.open] : [],
  );

  return (
    <>
      {props?.children
        ? React.cloneElement(props.children, {
            ref,
            onPointerDown(e: PointerEvent) {
              props.children?.props?.onPointerDown?.(e);
              if (trigger?.includes?.('click')) {
                props?.onOpenChange?.(!nextVisible);
                if (!isForceOpenRef.current) {
                  changeVisible(!nextVisible);
                }
              }
            },
            onPointerEnter(e: PointerEvent) {
              isInRange.current = true;
            },
            onPointerLeave() {
              isInRange.current = false;
              if (nextVisible) {
                globalListenPointerDown();
              }
            },
          })
        : undefined}

      {nextVisible &&
        ReactDOM.createPortal(
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
            <div
              style={{
                position: 'absolute',
                top: position.top,
                left: position?.left,
                width: position?.width,
                ...props?.style,
              }}
              className={classNames(animationClass, style.dropDown())}
              onPointerEnter={() => {
                isInRange.current = true;
              }}
              onPointerLeave={() => {
                isInRange.current = false;
              }}
              onPointerDown={(e: React.PointerEvent<HTMLDivElement>) => {
                e.stopPropagation();
              }}
            >
              {props?.popupPanel}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
