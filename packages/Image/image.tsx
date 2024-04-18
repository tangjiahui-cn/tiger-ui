/**
 * image
 *
 * @author tangjiahui
 * @date 2023/6/2
 */
import React, { DOMAttributes, ForwardedRef, useState } from 'react';
import classNames from 'classnames';
import PreviewImage from './components/previewImage';
import { omit } from '@/_utils/object';
import './image.less';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';

export interface BaseImageProps {
  /**
   * @description 图片源地址
   */
  src?: string;
  /**
   * @description 宽度
   */
  width?: number;
  /**
   * @description 高度
   */
  height?: number;
  /**
   * @description 是否预览
   * @default false
   */
  preview?: boolean;
  /**
   * @description style
   */
  style?: React.CSSProperties;
  /**
   * @description className
   */
  className?: string;
}

export type BaseImagePropsKeys = keyof BaseImageProps;
export type ImageProps = BaseImageProps & DOMAttributes<HTMLDivElement>;

const privateKeys: BaseImagePropsKeys[] = [];

export type ImageFC = React.ForwardRefExoticComponent<ImageProps>;
const Image: ImageFC = React.forwardRef(function (
  props: ImageProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  const prefix = usePrefix('image');
  const originProps: DOMAttributes<HTMLDivElement> = omit(props, privateKeys);

  return (
    <div
      {...originProps}
      style={props?.style}
      className={classNames(props?.className, prefix)}
      ref={ref}
    >
      <img src={props?.src} width={props?.width} height={props?.height} style={props?.style} />

      {props?.preview && (
        <>
          <div className={`${prefix}-previewBtn`} onClick={() => setPreviewVisible(true)}>
            预 览
          </div>

          <PreviewImage
            src={props?.src}
            visible={previewVisible}
            onCancel={() => setPreviewVisible(false)}
          />
        </>
      )}
    </div>
  );
});

export default Image;
