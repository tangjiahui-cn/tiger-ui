/**
 * useCss
 *
 * @description create css-variable style tag for scope theme.
 */
import { useEffect, useRef } from 'react';
import { getStyleString } from 'class-css-stringify';
import { useUnmount } from './useUnmount';
import { nanoid } from 'nanoid/non-secure';

interface SimpleObject {
  [K: string]: any;
}

export function useCss(hashLen: number = 8) {
  const styleRef = useRef<HTMLStyleElement>();
  const cssRef = useRef<(obj: SimpleObject) => string>();

  useEffect(() => {
    const key = nanoid(hashLen);

    function updateStyle(text: string): void {
      if (!styleRef.current) {
        styleRef.current = document.createElement('style');
        styleRef.current.setAttribute('css-var', key);
        document.head.appendChild(styleRef.current);
      }
      styleRef.current.innerHTML = text;
    }

    cssRef.current = function (obj: SimpleObject) {
      const className = `var-${key}`;
      const styleText = getStyleString(className, obj);
      updateStyle(styleText);
      return className;
    };
  }, []);

  useUnmount(() => {
    if (styleRef.current) {
      document.head.removeChild(styleRef.current);
      cssRef.current = undefined;
      styleRef.current = undefined;
    }
  });

  return cssRef;
}
