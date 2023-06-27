/**
 * 一组预设的主题图标
 */
import React from 'react';
import styles from './index.less';
import {
  SuccessFill,
  CloseFill,
  IconCommonProps,
  InfoFill,
  LoadingOutline,
  CloseOutline,
} from '..';

export const SuccessFillIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.success}>
      <SuccessFill {...props} />
    </span>
  );
};

export const ErrorFillIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.error}>
      <CloseFill {...props} />
    </span>
  );
};

export const WarnFillIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.warn}>
      <InfoFill {...props} />
    </span>
  );
};

export const WarningFillIcon = WarnFillIcon;

export const InfoFillIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.info}>
      <InfoFill {...props} />
    </span>
  );
};

export const LoadingOutlineIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.default}>
      <LoadingOutline {...props} />
    </span>
  );
};

export const CloseOutlineIcon = function (props: IconCommonProps) {
  return (
    <span className={styles.default}>
      <CloseOutline {...props} />
    </span>
  );
};

export type IconType = 'success' | 'error' | 'warn' | 'info';
export const IconMap = {
  success: (props?: IconCommonProps) => <SuccessFillIcon {...props} />,
  warn: (props?: IconCommonProps) => <WarnFillIcon {...props} />,
  info: (props?: IconCommonProps) => <InfoFillIcon {...props} />,
  error: (props?: IconCommonProps) => <ErrorFillIcon {...props} />,
};
