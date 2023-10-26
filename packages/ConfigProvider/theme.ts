import { pickTruthyValue } from '../_utils/object';

export type Token = {
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
  placeholderColor: string; // 占位符颜色

  // 边框
  borderColor: string; // 边框颜色
  borderRadius: string | number; // 边框大小

  // 动画
  duration: string; // 动画时长

  // 阴影
  shadow1: string;
  shadow2: string;
  shadow3: string;
  maskBg: string; // 遮罩层背景色
} & {
  selectPrimary: string; // 选中主色
  selectHover: string; // 选中鼠标经过色

  switchText: string; // switch 文字色
  switchTextDisabled: string; // switch 文字禁用色
  switchTextHover: string; // switch 文字经过色

  infoBorderColor: string; // info 边框色
  infoColor: string; // info 文字色
  infoBg: string; // info 背景色
  successBorderColor: string; // success 边框色
  successColor: string; // success 文字色
  successBg: string; // success 背景色
  errorBorderColor: string; // error 边框色
  errorColor: string; // error 文字色
  errorBg: string; // error 背景色
  warnBorderColor: string; // warn 边框色
  warnColor: string; // warn 文字色
  warnBg: string; // warn 背景色
};

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
  placeholderColor: '#d9d9d9',

  borderColor: '#e8e8e8',
  borderRadius: 2,
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

  // Select
  selectPrimary: '#bae0ff',
  selectHover: '#e6f4ff',

  switchText: '#8c8c8c',
  switchTextDisabled: '#bfbfbf',
  switchTextHover: '#595959',

  infoBorderColor: '#69b1ff',
  infoColor: '#4096ff',
  infoBg: '#e6f4ff',
  successBorderColor: '#95de64',
  successColor: '#73d13d',
  successBg: '#f6ffed',
  errorBorderColor: '#ff7875',
  errorColor: '#ff4d4f',
  errorBg: '#fff1f0',
  warnBorderColor: '#ffd666',
  warnColor: '#ffc53d',
  warnBg: '#fffbe6',
};

export interface Theme {
  token: Token;
}

export const INIT_THEME: Theme = {
  token: INIT_TOKEN,
};

export function mergeTheme(value?: Theme): Theme {
  return {
    token: mergeToken(value?.token),
  };
}

export function mergeToken(value?: Token): Token {
  if (!value) return INIT_TOKEN;
  return {
    ...INIT_TOKEN,
    ...pickTruthyValue(value),
  };
}
