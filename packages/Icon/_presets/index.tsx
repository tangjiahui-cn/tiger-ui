/**
 * 一组预设的主题图标
 */
import React from 'react';
import { IconCommonProps } from '..';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
  LoadingOutlined,
} from '@ant-design/icons';

export const SuccessFillIcon = function (props: IconCommonProps) {
  return (
    <CheckCircleFilled
      style={{
        cursor: 'pointer',
        color: '#73d13d',
        fontSize: 16,
      }}
    />
  );
};

export const ErrorFillIcon = function (props: IconCommonProps) {
  return (
    <CloseCircleFilled
      style={{
        cursor: 'pointer',
        color: '#ff4d4f',
        fontSize: 16,
      }}
    />
  );
};

export const WarnFillIcon = function (props: IconCommonProps) {
  return (
    <CloseCircleFilled
      style={{
        cursor: 'pointer',
        color: '#ffc53d',
        fontSize: 16,
      }}
    />
  );
};

export const WarningFillIcon = WarnFillIcon;

export const InfoFillIcon = function (props: IconCommonProps) {
  return (
    <InfoCircleFilled
      style={{
        cursor: 'pointer',
        color: '#4096ff',
        fontSize: 16,
      }}
    />
  );
};

export const LoadingOutlineIcon = function (props: IconCommonProps) {
  return (
    <LoadingOutlined
      style={{
        cursor: 'pointer',
        color: '#141414',
        fontSize: 16,
      }}
    />
  );
};

export const CloseOutlineIcon = function (props: IconCommonProps) {
  return (
    <CloseCircleFilled
      style={{
        cursor: 'pointer',
        color: '#141414',
        fontSize: 16,
      }}
    />
  );
};

export type IconType = 'success' | 'error' | 'warn' | 'info';
export const IconMap = {
  success: (props?: IconCommonProps) => <SuccessFillIcon {...props} />,
  warn: (props?: IconCommonProps) => <WarnFillIcon {...props} />,
  info: (props?: IconCommonProps) => <InfoFillIcon {...props} />,
  error: (props?: IconCommonProps) => <ErrorFillIcon {...props} />,
};
