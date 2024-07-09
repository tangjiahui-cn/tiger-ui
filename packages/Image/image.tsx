/**
 * image
 *
 * @author tangjiahui
 * @date 2023/6/2
 */
import React, { DOMAttributes, ForwardedRef, RefAttributes, useState } from 'react';
import classNames from 'classnames';
import PreviewImage from './components/previewImage';
import { usePrefix } from '@/ConfigProvider/ConfigProvider';
import './image.less';

export interface BaseImageProps {
  /** source address */
  src?: string;
  /** image width */
  width?: number;
  /**image height */
  height?: number;
  /** enable preview */
  preview?: boolean;
  /** style */
  style?: React.CSSProperties;
  /** className */
  className?: string;
}

export type ImageProps = BaseImageProps &
  DOMAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

export type ImageFC = React.ForwardRefExoticComponent<ImageProps>;
const Image: ImageFC = React.forwardRef(function (
  props: ImageProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { src, width, height, preview, style, className, ...rest } = props;
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const prefix = usePrefix('image');

  return (
    <div {...rest} style={style} className={classNames(className, prefix)} ref={ref}>
      <img src={src} width={width} height={height} style={style} />

      {/* preview panel */}
      {preview && (
        <>
          <div className={`${prefix}-previewBtn`} onClick={() => setPreviewVisible(true)}>
            预 览
          </div>

          <PreviewImage
            src={src}
            visible={previewVisible}
            onCancel={() => setPreviewVisible(false)}
          />
        </>
      )}
    </div>
  );
});

export default Image;
