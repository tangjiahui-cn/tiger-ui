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
import React, {
  DOMAttributes,
  ForwardedRef,
  RefAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { GlobalScroll } from '@/_model';
import './dropdown.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

// panel position
interface PanelPosition {
  top: number;
  left: number;
  width: number;
}

export type DropDownTrigger = 'click';
const DEFAULT_TRIGGER: DropDownTrigger[] = ['click'];

// global scroll listener
const globalScroll = new GlobalScroll({
  throttle: 5,
});

export interface BaseDropDownProps {
  /** control open outside */
  open?: boolean;
  /** onchange visible */
  onOpenChange?: (visible: boolean) => void; // 显隐回调
  /** trigger type */
  trigger?: DropDownTrigger | DropDownTrigger[];
  /** popup panel */
  popupPanel?: React.ReactElement;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

type RefType = {
  changeVisible: (visible: boolean) => void;
  dom: HTMLDivElement;
};

export type DropDownProps = BaseDropDownProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<RefType>;

export type DropDownFC = React.ForwardRefExoticComponent<DropDownProps>;
const DropDown: DropDownFC = React.forwardRef(function (
  props: DropDownProps,
  operateRef: ForwardedRef<RefType>,
) {
  if (Array.isArray(props?.children)) {
    throw new Error('children is only a single React-JSX.');
  }
  if (Array.isArray(props?.popupPanel)) {
    throw new Error('popupPanel is only a single React-JSX.');
  }

  const { open, onOpenChange, trigger = 'click', popupPanel, style, className, ...rest } = props;

  // is Mouse in DropDown Range.
  const isInRange = useRef<boolean>(false);

  const unListenPointerDownRef = useRef<() => void>();

  // trigger behavior array.
  const triggers: DropDownTrigger[] = useMemo(
    () => (Array.isArray(trigger) ? trigger : trigger ? [trigger] : DEFAULT_TRIGGER),
    [trigger],
  );

  // children's ref.
  const ref = useRef<any>();
  const domRef = useRef<HTMLDivElement>(null);

  const prefix = usePrefix('dropdown');
  // const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  // Is that control 'open' attribute from outer.
  const isForceOpenRef = useRef(open !== undefined);

  // A animation timer.
  const timerId = useRef<any>();

  // control panel show or not.
  const [nextVisible, setNextVisible] = useState<boolean>(false);

  // if dropdown visible.
  const [visible, setVisible] = useState(false);

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
        onOpenChange?.(false);
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
      top: rect?.bottom || 0,
      width: rect.width,
      left: rect.left,
    };
  }

  // listen global scroll callback.
  const scrollCallback = useCallback((e: React.MouseEventHandler) => {
    setPosition(getCurrentPanelPosition());
  }, []);

  const changeVisible: (open?: boolean) => void = useCallback((open?: boolean) => {
    setPosition(getCurrentPanelPosition());
    if (open) {
      // listen scroll
      globalScroll.listen(scrollCallback);
      if (timerId.current) {
        clearTimeout(timerId.current);
        timerId.current = null;
      }
      setVisible(true);
      setNextVisible(true);
    } else {
      // unListen scroll
      globalScroll.unListen(scrollCallback);
      setVisible(false);
      timerId.current = setTimeout(() => {
        setNextVisible(false);
        timerId.current = null;
      }, 250);
    }
  }, []);

  useImperativeHandle(operateRef, () => {
    return {
      changeVisible,
      dom: domRef.current as HTMLDivElement,
    };
  });

  // listen 'open' attribute.
  useEffect(
    () => {
      if (!isForceOpenRef.current) {
        return;
      }
      // control from outside
      changeVisible(!!open);
      if (open) {
        globalListenPointerDown();
      } else {
        unListenPointerDownRef.current?.();
      }
    },
    isForceOpenRef.current ? [open] : [],
  );

  return (
    <>
      {props?.children
        ? React.cloneElement(props.children as any, {
            ref,
            onPointerDown(e: PointerEvent) {
              (props?.children as React.ReactElement as any)?.onPointerDown?.(e);
              if (triggers?.includes?.('click')) {
                onOpenChange?.(!nextVisible);
                if (!isForceOpenRef.current) {
                  changeVisible(!nextVisible);
                }
              }
            },
            onPointerEnter() {
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
          <div
            {...rest}
            style={{
              position: 'fixed',
              top: position.top,
              left: position?.left,
              minWidth: position?.width,
              ...style,
            }}
            ref={domRef}
            className={classNames(prefix, className, {
              [`${prefix}-expand`]: visible,
              [`${prefix}-unExpand`]: !visible,
            })}
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
            {popupPanel}
          </div>,
          document.body,
        )}
    </>
  );
});

export default DropDown;
