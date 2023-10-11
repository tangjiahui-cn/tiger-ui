import useTheme from './useTheme';
import { Token } from '../../ConfigProvider/theme';

/**
 * 获取token
 */
export default function useToken(): Token {
  const theme = useTheme();
  return theme.token;
}
