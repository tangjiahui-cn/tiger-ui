/**
 * format select options
 *
 * @author tangjiahui
 * @date 2024/1/26
 */
import { OptionProps, SelectChildren } from '@/Select';

export function getOptions(options?: OptionProps[], children?: SelectChildren): OptionProps[] {
  // use options.
  if (Array.isArray(options)) {
    return options.map((option) => {
      return {
        label: option?.label || option?.value,
        value: option?.value,
      };
    });
  }
  // multiple react-element
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
  // single react-element
  if (children) {
    return [
      {
        label: children?.props?.children,
        value: children?.key,
      },
    ];
  }
  return [];
}
