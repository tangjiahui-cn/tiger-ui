export type Theme = {
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
