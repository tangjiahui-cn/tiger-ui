/**
 * (future)
 *
 * use native css-var to control theme
 * @author tangjiaui
 * @date 2024/1/29
 */
import { useEffect, useState } from 'react';
import { BaseEvent } from '@/_model';
import type { Theme } from './types';
import DEFAULT_THEME from './defaultTheme';

// style element id
const ID: string = '--tiger-ui-css';
type ThemeKeys = keyof Theme;
type EventKeys = 'theme-change';

const event = new BaseEvent<any, EventKeys>();
let theme: Theme = DEFAULT_THEME;

let style: HTMLStyleElement;
init();

// init style tag.
function init() {
  if (style) return;
  style = document.createElement('style');
  style.setAttribute('id', ID);
  document.head.appendChild(style);
  updateStyle(generateStyleSheetText(theme));
}

// generate :root variable string under style dom-node.
function generateStyleSheetText(theme: Theme): string {
  return Object.keys(theme)
    .map((key: any) => `--${key}:${theme[key as ThemeKeys] || ''}`)
    .join(';');
}

// update variable global.
function updateStyle(styleSheetText: string) {
  if (!style) {
    throw new Error('style element is not exist.');
  }
  style.innerHTML = `:root{${styleSheetText}};`;
}

// change theme property-value.
export function changeTheme(key: ThemeKeys, value: any): void {
  theme[key] = value;
  updateStyle(generateStyleSheetText(theme));
  event.notify('theme-change', { ...theme });
}

// replace with new theme.
export function replaceTheme(newTheme: Theme) {
  updateStyle(generateStyleSheetText((theme = newTheme)));
  event.notify('theme-change', {
    ...theme,
  });
}

// use theme in React (hook).
export function useTheme() {
  const [value, setValue] = useState<Theme>(theme);

  useEffect(() => {
    event.on('theme-change', setValue);
    return () => {
      event.remove('theme-change', setValue);
    };
  }, []);

  return value;
}
