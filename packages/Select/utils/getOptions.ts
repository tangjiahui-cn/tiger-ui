/**
 * format select options
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import * as React from 'react';
import { OptionProps } from '@/Select';

export function getOptions(
  options?: OptionProps[],
  children?: React.ReactElement[],
): OptionProps[] {
  if (Array.isArray(options)) {
    return options.map((option) => {
      return {
        label: option?.label || option?.value,
        value: option?.value,
      };
    });
  }
  if (Array.isArray(children)) {
    return children
      .filter((el) => {
        return el.type.hasOwnProperty('isOption');
      })
      .map((el) => {
        const option = el.props || {};
        return {
          label: option?.children || el.key,
          value: el.key,
        };
      });
  }
  return [];
}
