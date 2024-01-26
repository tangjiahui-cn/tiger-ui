/**
 * DropDown
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { DOMAttributes, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useListenEffect } from '@/_hooks';

export type DropDownProps = {
  rect?: DOMRect;
  visible?: boolean;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  children?: React.ReactNode;
} & DOMAttributes<HTMLDivElement>;

const privateKeys: string[] = ['rect', 'visible', 'style', 'innerStyle'];

function omit(o: any, excludeKeys: string[]): any {
  const result: any = {};
  for (const key in o) {
    if (!excludeKeys.includes(key)) {
      result[key] = o[key];
    }
  }
  return result;
}

export default function DropDown(props: DropDownProps) {
  const { rect } = props;
  const DOMAttributes: DOMAttributes<HTMLDivElement> = useMemo(
    () => omit(props, privateKeys),
    [props],
  );
  const [animationClass, setAnimationClass] = useState<string>('');
  const [nextVisible, setNextVisible] = useState<boolean>(false);

  const timerId = useRef<any>();
  const panelDomRef = useRef<HTMLDivElement>(null);

  useListenEffect(
    (isFirst) => {
      if (props?.visible) {
        // clear timer
        if (timerId.current) {
          clearTimeout(timerId.current);
          timerId.current = null;
        }
        setNextVisible(true);
        setAnimationClass(styles.popupPanel_expand);
      } else {
        if (!isFirst) {
          setAnimationClass(styles.popupPanel_unExpand);
          // add destroy timer
          timerId.current = setTimeout(() => {
            setNextVisible(false);
            timerId.current = null;
          }, 150);
        }
      }
    },
    [props?.visible],
  );

  return (
    nextVisible &&
    rect &&
    ReactDOM.createPortal(
      <div
        {...DOMAttributes}
        ref={panelDomRef}
        style={{
          position: 'fixed',
          top: rect?.bottom,
          left: rect?.left,
          width: rect?.width,
          ...props?.style,
        }}
      >
        <div className={classNames(animationClass, styles.popupPanel)} style={props?.innerStyle}>
          {props?.children}
        </div>
      </div>,
      document.body,
    )
  );
}
