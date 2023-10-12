import { pickTruthyValue } from '../_utils/object';

export interface Token {
  prefix: string; // 前缀

  // 颜色
  primary: string; // 主题色
  primaryHover: string; // 主题色 (hover)
  primaryActive: string; // 主题色 (active)
  primaryDisabled: string; // 主题色（active）
  danger: string; // 危险色
  dangerHover: string; // 危险色（hover）
  dangerActive: string; // 危险色（active）
  dangerDisabled: string; // 危险色（disabled）

  // 文字
  fontSize: number | string; // 默认文字大小
  fontSizeLarge: number | string; // 大号文字大小
  color: string; // 文字颜色
  colorHover: string; // 文字颜色 （hover）
  colorActive: string; // 文字颜色 （active）
  colorDisabled: string; // 文字颜色（disabled）
  colorBgDisabled: string; // 文字背景禁用

  // 边框
  borderColor: string; // 边框颜色

  // 动画
  duration: string; // 动画时长

  // 阴影
  shadow1: string;
  shadow2: string;
  shadow3: string;
  maskBg: string;
}

export const INIT_TOKEN: Token = {
  prefix: 'tiger-ui',

  primary: '#1677ff',
  primaryHover: '#69b1ff',
  primaryActive: '#003eb3',
  primaryDisabled: '#91caff',
  danger: '#ff4d4f',
  dangerHover: '#ffa39e',
  dangerActive: '#f5222d',
  dangerDisabled: '#ffa39e',

  fontSize: 14,
  fontSizeLarge: 16,
  color: 'rgba(0,0,0,0.85)',
  colorHover: '#bfbfbf',
  colorActive: '#262626',
  colorDisabled: '#bfbfbf',
  colorBgDisabled: '#fafafa',

  borderColor: '#e8e8e8',
  duration: '.3s',
  shadow1:
    '0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.16),\n' +
    '  0px 5px 12px 4px rgba(0, 0, 0, 0.16)',
  shadow2:
    '0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08),\n' +
    '  0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
  shadow3:
    '0px 6px 16px -8px rgba(0, 0, 0, 0.08), 0px 9px 28px 0px rgba(0, 0, 0, 0.05),\n' +
    '  0px 14px 48px 16px rgba(0, 0, 0, 0.03)',
  maskBg: 'rgba(0, 0, 0, 0.5)',
};

export interface Theme {
  token: Token;
}

export const INIT_THEME: Theme = {
  token: INIT_TOKEN,
};

export function mergeTheme(value?: Theme) {
  return {
    token: mergeToken(value?.token),
  };
}

export function mergeToken(value?: Token) {
  if (!value) return INIT_THEME;
  return {
    ...INIT_TOKEN,
    ...pickTruthyValue(value),
  };
}
