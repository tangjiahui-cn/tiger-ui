import { createContext, useContext } from 'react';
import { Locale, zh_CN } from '../_locales';
import type { Theme } from './theme';
import { INIT_THEME } from './theme';

interface ConfigProps {
  locale: Locale;
  theme: Theme;
}

const config: ConfigProps = {
  locale: zh_CN,
  theme: INIT_THEME,
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
