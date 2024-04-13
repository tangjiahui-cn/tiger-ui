/**
 * use Global status.
 *
 * @param key unique id
 * @return {locale, prefix}
 */
import { useConfig } from '@/ConfigProvider/ConfigProvider';

const classPrefix = (prefix: string = PACKAGE_NAME, key: string) => `${prefix}-${key}`;
export function useGlobal(key: string): {
  locale: any;
  prefix: any;
} {
  const context = useConfig();
  return {
    locale: context.locale,
    prefix: classPrefix(context.prefix, key),
  };
}
