/**
 * Config Provider
 *
 * @author tangjiahui
 * @date 2024/4/1
 */

import React, { useMemo } from 'react';
import { Theme, toLegalTheme } from '@/_theme';
import en_US from '../_locales/en_US';
import type { Locale } from '@/_locales';
import { useCss } from '@/_hooks';
import { PrefixProvider } from './context/prefixContext';
import { LocaleProvider } from './context/localeContext';
import { stringify } from '@/_utils';

export { usePrefix } from './context/prefixContext';
export { useLocale } from './context/localeContext';

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

function ConfigProvider(props: ConfigProviderProps) {
  const css = useCss(5);

  // prefix
  const prefix = useMemo(() => props?.prefix || PACKAGE_NAME, [props?.prefix]);

  // locale
  const locale = useMemo(() => props?.locale || en_US, [props?.locale]);

  // children (which will inject className)
  const children = useMemo(() => {
    const isInjectClass: boolean = !!props?.theme;
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
  }, [stringify(props?.theme)]);

  return (
    <PrefixProvider value={prefix}>
      <LocaleProvider value={locale}>{children}</LocaleProvider>
    </PrefixProvider>
  );
}

export default ConfigProvider;
