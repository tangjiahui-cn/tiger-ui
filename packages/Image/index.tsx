import * as React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import PreviewImage from './PreviewImage';
import { useState } from 'react';

export interface ImageProps {
  // 图片源地址
  src?: string;
  // 图片宽度
  width?: number;
  // 图片高度
  height?: number;
  // 图片样式
  style?: React.CSSProperties;
  // 是否可以预览
  preview?: boolean;
}

export default function Image(props: ImageProps) {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  return (
    <div className={classNames(styles['image'])}>
      <img src={props?.src} width={props?.width} height={props?.height} style={props?.style} />

      {props?.preview && (
        <>
          <div className={styles['image-preview']} onClick={() => setPreviewVisible(true)}>
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
