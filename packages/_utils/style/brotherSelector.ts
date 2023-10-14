/**
 * 兄弟选择器
 * @param style
 */
export default function brotherSelector(style: { [k: string]: any }) {
  return Object.keys(style).reduce((res, cur) => {
    return Object.assign(res, {
      [`&.${cur}`]: style[cur],
    });
  }, {});
}
