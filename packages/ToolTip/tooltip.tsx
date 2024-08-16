/**
 * ToolTip
 *
 * @author tangjiahui
 * @date 2024/02/02
 */
import React, { MutableRefObject, useMemo, useRef, useState } from 'react';
import Trigger, { TriggerType } from '../Trigger';
import { createPortal } from 'react-dom';
import Panel from './panel';

export type ToolTipBgColor =
  | (string & {})
  | 'pink'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'cyan'
  | 'green'
  | 'blue'
  | 'purple'
  | 'magenta'
  | 'gold'
  | 'lime';

export type ToolTipTrigger = TriggerType | TriggerType[];
export interface ToolTipProps {
  /** popover color. */
  color?: ToolTipBgColor;
  /** tooltip title */
  title?: React.ReactNode;
  /** panel style */
  panelStyle?: React.CSSProperties;
  /** panel className */
  panelClassName?: string;
  /** triangle style */
  panelTriangleStyle?: React.CSSProperties;
  /** triangle className */
  panelTriangleClassName?: string;
  /** tooltip trigger */
  trigger?: ToolTipTrigger;
  /** placeholder */
  children?: React.ReactNode;
}

const animationDuration = 100;
const visibleDelay = 120;
const ToolTip = (props: ToolTipProps) => {
  const {
    color,
    title,
    panelStyle,
    panelClassName,
    panelTriangleStyle,
    panelTriangleClassName,
    trigger,
    children,
  } = props;
  const innerRef = useRef<HTMLElement>();

  const enableFocus = useMemo(() => {
    return trigger === 'focus' || trigger?.includes?.('focus');
  }, [trigger]);

  const isILegalChildren = typeof children === 'string';
  const finalChildren = isILegalChildren ? <span tabIndex={-1}>{children}</span> : children;

  const childrenRef: MutableRefObject<HTMLElement> = isILegalChildren
    ? innerRef
    : (children as any)?.ref || innerRef;

  // control animation of panel.
  const [visible, setVisible] = useState(false);
  // control the panel destroy or not.
  const [nextVisible, setNextVisible] = useState(visible);

  const visibleTimerRef = useRef<any>();
  const nextVisibleTimerRef = useRef<any>();

  function clearVisibleTimer() {
    if (visibleTimerRef.current) {
      clearTimeout(visibleTimerRef.current);
      visibleTimerRef.current = null;
    }
  }

  function clearNextVisibleTimer() {
    if (nextVisibleTimerRef.current) {
      clearTimeout(nextVisibleTimerRef.current);
      nextVisibleTimerRef.current = null;
    }
  }

  function clearAllTimer() {
    clearVisibleTimer();
    clearNextVisibleTimer();
  }

  function startVisibleTimer() {
    nextVisibleTimerRef.current = setTimeout(() => {
      nextVisibleTimerRef.current = null;
      setNextVisible(true);
    }, visibleDelay);
  }

  function hideNextVisibleTimer() {
    nextVisibleTimerRef.current = setTimeout(() => {
      nextVisibleTimerRef.current = null;
      setNextVisible(false);
    }, animationDuration);
  }

  function hideVisibleTimer() {
    visibleTimerRef.current = setTimeout(() => {
      visibleTimerRef.current = null;
      setVisible(false);
      hideNextVisibleTimer();
    }, visibleDelay);
  }

  function handleTrigger() {
    clearAllTimer();
    setVisible(true);
    startVisibleTimer();
  }

  function handleUnTrigger() {
    clearAllTimer();
    hideVisibleTimer();
  }

  return (
    <>
      {finalChildren ? (
        <Trigger
          ref={childrenRef}
          trigger={trigger}
          onTrigger={() => {
            handleTrigger();
          }}
          onUnTrigger={() => {
            handleUnTrigger();
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          {finalChildren as React.ReactElement}
        </Trigger>
      ) : null}
      {createPortal(
        nextVisible && (
          <Panel
            style={{ backgroundColor: color, ...panelStyle }}
            className={panelClassName}
            triangleClassName={panelTriangleClassName}
            triangleStyle={{ borderTopColor: color, ...panelTriangleStyle }}
            animationDuration={animationDuration}
            visible={visible}
            targetRef={childrenRef}
            onMouseEnter={() => {
              handleTrigger();
            }}
            onMouseLeave={() => {
              if (!enableFocus) {
                handleUnTrigger();
              }
            }}
          >
            {title}
          </Panel>
        ),
        document.body,
      )}
    </>
  );
};

export default ToolTip;
