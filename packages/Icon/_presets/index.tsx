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
