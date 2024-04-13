/**
 * Config Provider
 *
 * @author tangjiahui
 * @date 2024/4/1
 */

import React, { createContext, useContext, useMemo } from 'react';
import { Theme, toLegalTheme } from '@/_theme';
import en_US from '../_locales/en_US';
import type { Locale } from '@/_locales';
import { useCss } from '@/_hooks';

function stringify(o: any): string {
  try {
    return JSON.stringify(o);
  } catch {
    return '';
  }
}

interface ContextValue {
  /**
   * @description 主题色
   */
  theme?: Theme;
  /**
   * @description 语言包
   */
  locale?: Locale;
  /**
   * @description 类名前缀
   */
  prefix?: string;
}

type ConfigProviderProps = ContextValue & {
  children?: React.ReactNode;
};

const INIT_CONTEXT: ContextValue = {
  theme: undefined,
  locale: en_US,
  prefix: PACKAGE_NAME,
};

const context = createContext<ContextValue>(INIT_CONTEXT);

function ConfigProvider(props: ConfigProviderProps) {
  const css = useCss(5);
  const isInjectClass: boolean = !!props?.theme;

  const value: ContextValue = {
    theme: props?.theme || INIT_CONTEXT.theme,
    locale: props?.locale || INIT_CONTEXT.locale,
    prefix: props?.prefix || INIT_CONTEXT.prefix,
  };

  // avoid useless update.
  const themeToken = stringify(props?.theme);
  const children = useMemo(() => {
    if (!isInjectClass) {
      return props?.children;
    }

    const childrenList = Array.isArray(props?.children) ? props?.children : [props?.children];
    return childrenList.reduce(
      (list: React.ReactNode[], current: React.ReactNode, index: number) => {
        let el: React.ReactElement = current as React.ReactElement;

        // for use scope theme, the child component must support 'className' prop.
        if (React.isValidElement(el as React.ReactElement)) {
          const varClassName = isInjectClass ? css(toLegalTheme(props?.theme)) : '';

          // inject className.
          el = React.cloneElement(el, {
            key: el.key || index,
            className: el?.props?.className
              ? `${el?.props?.className} ${varClassName}`
              : varClassName,
          });
        }
        list.push(el);
        return list;
      },
      [],
    );
  }, [themeToken]);

  return <context.Provider value={value}>{children}</context.Provider>;
}

export const useConfig = () => useContext(context);
export default ConfigProvider;
