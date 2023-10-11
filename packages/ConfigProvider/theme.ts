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
  color: string; // 文字颜色
  colorHover: string; // 文字颜色 （hover）
  colorActive: string; // 文字颜色 （active）
  colorDisabled: string; // 文字颜色（disabled）

  // 边框
  borderColor: string; // 边框颜色

  // 动画
  duration: string; // 动画时长
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
  color: 'rgba(0,0,0,0.85)',
  colorHover: '#bfbfbf',
  colorActive: '#262626',
  colorDisabled: '#bfbfbf',

  borderColor: '#e8e8e8',
  duration: '.3s',
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
