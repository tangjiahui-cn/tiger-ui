/**
 * prefix.
 *
 * @author tangjiahui
 * @date 2024/4/15
 */
import React from 'react';

export const prefixContext = React.createContext(PACKAGE_NAME);
export const PrefixProvider = prefixContext.Provider;
export const usePrefix = (name: string) => {
  return React.useContext(prefixContext) + '-' + name;
};
