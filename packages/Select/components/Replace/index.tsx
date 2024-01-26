/**
 * replace content.
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import * as React from 'react';
import { useState } from 'react';

type Trigger = 'hover';

export type ReplaceProps = {
  // judge is need replace or not.
  isReplace?: boolean;
  // trigger events to replace content.
  trigger?: Trigger | Trigger[];
  // replace React node.
  replace?: React.ReactNode;
  // default placeholder
  children?: React.ReactNode;
};

export function Replace(props: ReplaceProps) {
  const [isReplace, setIsReplace] = useState(false);
  const triggers: Trigger[] = Array.isArray(props?.trigger)
    ? props?.trigger
    : typeof props?.trigger === 'string'
    ? [props?.trigger]
    : [];

  function handleTrigger(opt: Trigger, isNeedReplace: boolean) {
    if (!props?.isReplace) return;
    if (triggers.includes(opt)) {
      setIsReplace(isNeedReplace);
    }
  }

  return (
    <div
      onPointerEnter={() => handleTrigger('hover', true)}
      onPointerLeave={() => handleTrigger('hover', false)}
    >
      {props?.isReplace && isReplace ? props?.replace : props?.children}
    </div>
  );
}
