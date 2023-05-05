import React from 'react';
import { zh_CN, Locale } from '@/_locales';
import { ConfigContext } from '@/ConfigProvider/useAppContext';
export * from './useAppContext';

export interface ConfigProviderProps {
  locale?: Locale;
  children?: React.ReactNode;
}

export default function ConfigProvider(props: ConfigProviderProps) {
  const { locale = zh_CN } = props;

  return (
    <ConfigContext.Provider
      value={{
        locale,
      }}
    >
      {props?.children}
    </ConfigContext.Provider>
  );
}
