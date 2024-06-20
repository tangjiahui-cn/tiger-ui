/**
 * Trigger
 *
 * @author tangjiahui
 * @date 2024/6/17
 */
import {
  cloneElement,
  ForwardedRef,
  useImperativeHandle,
  forwardRef,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { useListenRef } from '@/_hooks';

export type TriggerType = 'hover' | 'focus' | 'click' | 'contextMenu';
export interface TriggerProps {
  disabled?: boolean;
  visible?: boolean;
  trigger?: TriggerType | TriggerType[];
  onTrigger?: (dom: HTMLElement) => void;
  onUnTrigger?: (dom: HTMLElement) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactElement;
}

const Trigger = forwardRef((props: TriggerProps, ref: ForwardedRef<HTMLElement>) => {
  const {
    disabled,
    visible,
    children,
    trigger = 'hover',
    onTrigger,
    onUnTrigger,
    onContextMenu,
  } = props;
  const innerRef = useRef<HTMLElement>();
  const childrenRef: MutableRefObject<HTMLElement> = (children as any)?.ref || innerRef;

  const isControlledVisible = useMemo(() => typeof visible === 'boolean', []);

  const { enableHover, enableClick, enableContextMenu, enableFocusNoHover } = useMemo(() => {
    const triggers = (Array.isArray(trigger) ? trigger : [trigger]).filter(Boolean) as any;
    const result: any = {
      triggers,
      enableHover: triggers?.includes?.('hover'),
      enableFocus: triggers?.includes?.('focus'),
      enableClick: triggers?.includes?.('click'),
      enableContextMenu: triggers?.includes?.('contextMenu'),
    };
    result['onlyEnableFocus'] = triggers?.length === 1 && triggers[0] === 'focus';
    result['enableClickable'] = result.enableClick || result.enableContextMenu;
    result['enableFocusNoHover'] = !result.enableHover && result.enableFocus;
    return result;
  }, [trigger]);

  useImperativeHandle(ref, () => childrenRef?.current as any);

  const disabledRef = useListenRef(disabled);
  const isTriggerRef = useRef(false);
  const isFocusRef = useRef(false);

  const handleUnTrigger = useCallback((dom: HTMLElement) => {
    if (!isControlledVisible) {
      isTriggerRef.current = false;
    }
    if (!disabledRef.current) {
      onUnTrigger?.(dom as any);
    }
  }, []);

  const handleTrigger = useCallback((dom: HTMLElement) => {
    if (!isControlledVisible) {
      isTriggerRef.current = true;
    }
    if (!disabledRef.current) {
      onTrigger?.(dom as any);
    }
  }, []);

  const listenClick = useCallback((dom: HTMLElement) => {
    const click = () => {
      if (enableFocusNoHover) {
        return;
      }
      isTriggerRef.current ? handleUnTrigger(dom) : handleTrigger(dom);
    };

    if (enableClick) {
      dom.addEventListener('click', click);
    }

    return () => {
      if (enableClick) {
        dom.removeEventListener('click', click);
      }
    };
  }, []);

  const listenFocus = useCallback((dom: HTMLElement) => {
    const focus = () => {
      isFocusRef.current = true;
      handleTrigger(dom);
    };

    const blur = () => {
      isFocusRef.current = false;
      handleUnTrigger(dom);
    };

    if (enableFocusNoHover) {
      dom.addEventListener('focus', focus);
      dom.addEventListener('blur', blur);
    }

    return () => {
      if (enableFocusNoHover) {
        dom.removeEventListener('focus', focus);
        dom.removeEventListener('blur', blur);
      }
    };
  }, []);

  const listenContextMenu = useCallback((dom: HTMLElement) => {
    const contextmenu: any = (e: React.MouseEvent<HTMLElement>) => {
      onContextMenu?.(e);
      if (enableFocusNoHover) {
        return;
      }
      isTriggerRef.current ? handleUnTrigger(dom) : handleTrigger(dom);
    };

    if (enableContextMenu) {
      dom.addEventListener('contextmenu', contextmenu);
    }

    return () => {
      if (enableContextMenu) {
        dom.removeEventListener('contextmenu', contextmenu);
      }
    };
  }, []);

  const listenHover = useCallback((dom: HTMLElement) => {
    const mouseEnter = () => {
      handleTrigger(dom);
    };

    if (enableHover) {
      dom.addEventListener('mouseenter', mouseEnter);
    }

    return () => {
      if (enableHover) {
        dom.removeEventListener('mouseenter', mouseEnter);
      }
    };
  }, []);

  const listenLeave = useCallback((dom: HTMLElement) => {
    const mouseLeave = () => {
      if (!enableFocusNoHover) {
        handleUnTrigger(dom);
      }
    };

    dom.addEventListener('mouseleave', mouseLeave);
    return () => {
      dom.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  useEffect(() => {
    const dom = childrenRef?.current;
    if (!dom) {
      throw new Error('Trigger: childrenRef is null');
    }

    isTriggerRef.current = !!visible;

    /**
     * if enable 'hover', disabled focus.
     * else if enable 'focus', disabled 'contextmenu' and 'click'
     * else ...
     */
    const removeHover = listenHover(dom);
    const removeContextMenu = listenContextMenu(dom);
    const removeClick = listenClick(dom);
    const removeFocus = listenFocus(dom);
    const removeLeave = listenLeave(dom);

    return () => {
      removeHover();
      removeContextMenu();
      removeFocus();
      removeClick();
      removeLeave();
    };
  }, [visible, disabled]);

  return children ? cloneElement(children, { ref: childrenRef }) : null;
});

export default Trigger;
