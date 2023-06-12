export { default as zh_CN } from './zh_CN';
export { default as en_US } from './en_US';

export interface Locale {
  // input: placeholder.
  inputPlaceholder: string;
  // all confirm value.
  confirmValue: string;
  // all cancel value.
  cancelValue: string;
  // dialog and drawer value.
  titleValue: string;
  // 上传
  upload: {
    value: string;
    sizeErrorMsg: string;
  };
}
