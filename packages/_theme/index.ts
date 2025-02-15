/**
 * Theme types.
 *
 * @author tangjiahui
 * @date 2024/04/12
 */
import { ThemeCache } from './utils/themeCache';

const varPrefix = `--${PACKAGE_NAME}-var`;
export function getVarName(name: ThemeKey): string {
  return `${varPrefix}-${name}`;
}

const cache = new ThemeCache({
  id: `${PACKAGE_NAME}-var`,
  effectDom: document.body,
  mountDom: document.head,
});

export type Theme = Partial<{
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryDisabled: string;
  backgroundColor: string;
  danger: string;
  dangerHover: string;
  dangerActive: string;
  dangerDisabled: string;

  // text
  color: string;
  colorDisabled: string;
  colorHover: string;
  colorActive: string;
  fontSize: string;

  // border
  borderColor: string;
  borderColorDisabled: string;
  borderLightColor: string;
  borderRadius: string;

  // shadow
  shadow1: string;
  shadow2: string;
  shadow3: string;
  maskBg: string;

  // animation
  duration: string;
}>;

export type ThemeKey = keyof Theme;

/**
 * get Theme variable-value.
 *
 * @param key
 */
export function getTheme(key: ThemeKey): string {
  return cache.get(getVarName(key));
}

/**
 * set a theme variable.
 *
 * @param key variable-key
 * @param value variable-value
 */
export function setTheme(key: ThemeKey, value: string) {
  cache.add(getVarName(key), value);
}

/**
 * reset theme variable.  (if 'key' is empty, reset all variables)
 *
 * @param key variable-key
 * @param value variable-value
 */
export function resetTheme(key?: ThemeKey) {
  cache.remove(key ? getVarName(key) : undefined);
}

/**
 * get legal theme object.
 *
 * @param theme will deal theme object.
 * @return legal theme object.
 */
export function toLegalTheme(theme?: Theme): Theme {
  const result: Record<string, string> = {};
  for (const key in theme) {
    const value = (theme as any)[key];
    if (value) {
      result[getVarName(key as any)] = value;
    }
  }
  return result;
}
