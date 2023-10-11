import { useGetConfig } from '../../ConfigProvider';
import { Theme } from '../../ConfigProvider/theme';

/**
 * 获取theme
 */
export default function useTheme(): Theme {
  const value = useGetConfig();
  return value.theme;
}
