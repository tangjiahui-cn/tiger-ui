export { default as zh_CN } from './zh_CN';
export { default as en_US } from './en_US';

export interface Locale {
  // input: placeholder.
  inputPlaceholder: string;
  // select: placeholder
  selectPlaceholder: string;
  // all confirm value.
  confirmValue: string;
  // all cancel value.
  cancelValue: string;
  // dialog and drawer value.
  titleValue: string;
  // upload
  upload: {
    value: string;
    sizeErrorMsg: string;
  };
  // emptyValue
  emptyValue: string;
  // timepicker
  timepicker: {
    // 占位符
    placeholder: string;
    // 此刻
    now: string;
    // 确定
    confirm: string;
  };
}
