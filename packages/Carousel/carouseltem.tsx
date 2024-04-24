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

export type CarouselItemFC = React.FC<CarouselItemProps> & {
  isCarouselItem: boolean;
};

const CarouselItem: CarouselItemFC = (props: CarouselItemProps) => {
  return <div style={{ flex: 1, height: '100%', ...props?.style }}>{props?.children}</div>;
};

CarouselItem.isCarouselItem = true;
export default CarouselItem;
