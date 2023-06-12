import { createContext, useContext } from 'react';
import { Locale, zh_CN } from '../_locales';

interface ConfigProps {
  locale: Locale;
}

const config: ConfigProps = {
  locale: zh_CN,
};

const ConfigContext = createContext<ConfigProps>(config);
export { ConfigContext, useGetConfig, useGetLocaleValues };

function useConfigContext(): ConfigProps {
  return useContext(ConfigContext);
}

function useGetConfig(): ConfigProps {
  return useConfigContext();
}

function useGetLocaleValues(): Locale {
  return useConfigContext().locale;
}
