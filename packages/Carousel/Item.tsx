/**
 * Carousel Item
 *
 * @author tangjiahui
 * @date 2024/01/31
 */

export type CarouselItemProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

function Item(props: CarouselItemProps) {
  return <div style={{ flex: 1, height: '100%', ...props?.style }}>{props?.children}</div>;
}

Item.isCarouselItem = true;
export default Item;
