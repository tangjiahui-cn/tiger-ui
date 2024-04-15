/**
 * locale.
 *
 * @author tangjiahui
 * @date 2024/4/15
 */
import React from 'react';
import { en_US } from '@/_locales';

export const localeContext = React.createContext(en_US);
export const LocaleProvider = localeContext.Provider;
export const useLocale = (name: string) => React.useContext(localeContext);
