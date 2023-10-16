import * as React from 'react';
import classNames from 'classnames';
import PreviewImage from './PreviewImage';
import { useState } from 'react';
import { useStyle } from './style';

export interface ImageProps {
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
   * @description 图片样式
   */
  style?: React.CSSProperties;
  /**
   * @description 是否预览
   * @default false
   */
  preview?: boolean;
}

export default function Image(props: ImageProps) {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const style = useStyle('image');

  return (
    <div className={classNames(style.image())}>
      <img src={props?.src} width={props?.width} height={props?.height} style={props?.style} />

      {props?.preview && (
        <>
          <div className={style.imagePreviewButton()} onClick={() => setPreviewVisible(true)}>
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
}
