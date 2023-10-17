import React from 'react';
import { zh_CN, Locale } from '../_locales';
import { ConfigContext } from './useAppContext';
import type { Theme } from './theme';
import { mergeTheme } from './theme';
export * from './useAppContext';

export interface ConfigProviderProps {
  locale?: Locale;
  theme?: Theme;
  children?: React.ReactNode;
}

export default function ConfigProvider(props: ConfigProviderProps) {
  const { locale = zh_CN } = props;

  return (
    <ConfigContext.Provider
      value={{
        locale,
        theme: mergeTheme(props?.theme),
      }}
    >
      {props?.children}
    </ConfigContext.Provider>
  );
}
