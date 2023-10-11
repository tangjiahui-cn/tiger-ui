/**
 * 兄弟选择器
 * @param style
 */
export default function childrenSelector(style: { [k: string]: any }) {
  return Object.keys(style).reduce((res, cur) => {
    return {
      ...res,
      [`& .${cur}`]: style[cur],
    };
  }, {});
}
