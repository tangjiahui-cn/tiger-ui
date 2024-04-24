/**
 * string
 *
 * @author tangjiahui
 * @date 2024/04/15
 */

/**
 * get correct string.
 *
 * @param o object.
 * @return string.
 */
export function stringify(o: any): string {
  try {
    return JSON.stringify(o);
  } catch {
    return '';
  }
}
