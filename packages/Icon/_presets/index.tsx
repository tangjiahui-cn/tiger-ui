/**
 * 一组预设的主题图标
 */
import React from 'react';
import {
  SuccessFill,
  CloseFill,
  IconCommonProps,
  InfoFill,
  LoadingOutline,
  CloseOutline,
} from '..';

export const SuccessFillIcon = function (props: IconCommonProps) {
  return <SuccessFill {...props} pointer color={'#73d13d'} fontSize={16} />;
};

export const ErrorFillIcon = function (props: IconCommonProps) {
  return <CloseFill {...props} pointer color={'#ff4d4f'} fontSize={16} />;
};

export const WarnFillIcon = function (props: IconCommonProps) {
  return <InfoFill {...props} pointer color={'#ffc53d'} fontSize={16} />;
};

export const WarningFillIcon = WarnFillIcon;

export const InfoFillIcon = function (props: IconCommonProps) {
  return <InfoFill {...props} pointer color={'#4096ff'} fontSize={16} />;
};

export const LoadingOutlineIcon = function (props: IconCommonProps) {
  return <LoadingOutline {...props} pointer color={'#141414'} fontSize={16} />;
};

export const CloseOutlineIcon = function (props: IconCommonProps) {
  return <CloseOutline {...props} pointer color={'#141414'} fontSize={16} />;
};

export type IconType = 'success' | 'error' | 'warn' | 'info';
export const IconMap = {
  success: (props?: IconCommonProps) => <SuccessFillIcon {...props} />,
  warn: (props?: IconCommonProps) => <WarnFillIcon {...props} />,
  info: (props?: IconCommonProps) => <InfoFillIcon {...props} />,
  error: (props?: IconCommonProps) => <ErrorFillIcon {...props} />,
};
