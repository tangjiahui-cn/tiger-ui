import useTheme from './useTheme';

/**
 * 获取样式前缀
 * @param componentName 组件名称
 */
export default function usePrefix(componentName: string) {
  const theme = useTheme();
  return `${theme?.token?.prefix}-${componentName}`;
}
