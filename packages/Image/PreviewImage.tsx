import * as React from 'react';
import styles from './PreviewImage.less';
import { Button, Space } from '..';
import { useEffect, useRef, useState } from 'react';
import { getImageResolution, range } from '@/_utils';
import type { Pos } from '@/_types';
import { createPortal } from 'react-dom';

interface PreviewImageProps {
  // 图片源地址
  src?: string;
  // 预览是否可见
  visible?: boolean;
  // 关闭预览回调
  onCancel?: () => void;
}

const SCALE_ADD: number = 0.2;
const SCALE_MIN: number = 0.1;
const SCALE_MAX: number = 20;

export default function PreviewImage(props: PreviewImageProps) {
  const imgDomPos = useRef<Pos>({ x: 0, y: 0 });
  const imgDom = useRef<any>(null);
  const INIT_INFO = {
    scale: 1,
    angle: 0,
  };

  const [info, setInfo] = useState<{
    scale: number;
    angle: number;
  }>(INIT_INFO);

  function reset() {
    getImageResolution(props?.src).then((size) => {
      imgDomPos.current.x = 0;
      imgDomPos.current.y = 0;
      setInfo({ ...INIT_INFO });
    });
  }

  function rotate(n: number) {
    setInfo((info) => ({
      ...info,
      angle: info.angle + n,
    }));
  }

  function scale(n: number) {
    setInfo((info) => ({
      ...info,
      scale: range(info.scale + n, SCALE_MIN, SCALE_MAX),
    }));
  }

  function handleStartMove(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const { scale, angle } = info;
    const baseImgDomPos: Pos = {
      x: imgDomPos.current.x,
      y: imgDomPos.current.y,
    };

    function move(e: PointerEvent) {
      const deltaX: number = e.clientX - startX;
      const deltaY: number = e.clientY - startY;
      imgDomPos.current.x = baseImgDomPos.x + deltaX / scale;
      imgDomPos.current.y = baseImgDomPos.y + deltaY / scale;
      imgDom.current.style.transform =
        `rotate(${angle}deg)` +
        `scale(${scale})` +
        `translate3d(${imgDomPos.current.x}px, ${imgDomPos.current.y}px, 0)`;
    }

    function up() {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    }

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  useEffect(() => {
    if (!props?.src || !props?.visible) return;
    reset();
  }, [props?.visible]);

  const operateBar = (
    <Space
      style={{
        bottom: 10,
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, 0)',
      }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <Button type={'text'} onClick={() => reset()}>
        重置
      </Button>
      <Button type={'text'} onClick={() => rotate(-90)}>
        左旋
      </Button>
      <Button type={'text'} onClick={() => rotate(+90)}>
        右旋
      </Button>
      <Button type={'text'} onClick={() => scale(-SCALE_ADD)}>
        -
      </Button>
      <Button type={'text'} onClick={() => scale(+SCALE_ADD)}>
        +
      </Button>
    </Space>
  );

  return createPortal(
    props?.visible && (
      <div className={styles['previewImage']} onPointerDown={() => props?.onCancel?.()}>
        <div style={{ position: 'relative' }}>
          <img
            ref={imgDom}
            src={props?.src}
            draggable={false}
            onPointerDown={handleStartMove}
            style={{
              transform:
                `rotate(${info.angle}deg)` +
                `scale(${info.scale})` +
                `translate3d(${imgDomPos.current.x}px, ${imgDomPos.current.y}px, 0)`,
            }}
          />
        </div>
        {operateBar}
      </div>
    ),
    document.body,
  );
}
