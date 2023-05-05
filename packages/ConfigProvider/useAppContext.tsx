import { createContext, useContext } from 'react';
import { Locale, zh_CN } from '../_locales';

interface ConfigProps {
  locale: Locale;
}

const config: ConfigProps = {
  locale: zh_CN,
};

const ConfigContext = createContext<ConfigProps>(config);
export { ConfigContext, useGetConfig, useGetLocaleValue, useGetLocaleValues };

function useConfigContext(): ConfigProps {
  return useContext(ConfigContext);
}

function useGetConfig(): ConfigProps {
  return useConfigContext();
}

function useGetLocaleValue(prop: keyof Locale): string {
  const { locale } = useConfigContext();
  return locale?.[prop];
}

function useGetLocaleValues(): Locale {
  return useConfigContext().locale;
}
