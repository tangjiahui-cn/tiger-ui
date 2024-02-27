/**
 * select bar.
 *
 * @author tangjiahui
 * @date 2024/2/26
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { css } from 'class-css';
import classNames from 'classnames';
import useToken from '@/_utils/hooks/useToken';
import { useUpdateEffect } from '@/_hooks';

const boxClass = css({
  height: 30,
  lineHeight: '30px',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontSize: '0.875em',
  transition: 'all .3s',
  cursor: 'pointer',
  '&:hover': {
    background: 'whitesmoke',
  },
});

const boxHeight = 30;
const padding = 4;

interface SelectBarProps {
  /**
   * @description 滚动到第几个
   */
  value?: number;
  /**
   * @description 开始位置
   */
  start?: number;
  /**
   * @description 结束位置
   */
  end?: number;
  /**
   * @description 样式
   */
  style?: React.CSSProperties;
  /**
   * @description 点击回调
   */
  onChange?: (value: number) => void;
}

export default function SelectBar(props: SelectBarProps) {
  const { start = 0, end = 0 } = props;
  if (start < 0 || end < 0) {
    throw new Error('start or end must be large than 0');
  }
  if (start > end) {
    throw new Error('start must less than end.');
  }

  const isOuterValue = useRef<boolean>(props?.value !== undefined);
  const token = useToken();

  const boxSelectClass = useMemo(() => {
    return css({
      background: token.selectPrimary,
      '&:hover': {
        background: token.selectHover,
      },
    });
  }, [token.selectPrimary, token.selectHover]);

  // range size.
  const total = end - start + 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const [paddingBottom, setPaddingBottom] = useState<number>(0);

  // scroll to current index box. (from 0)
  function scrollTo(current: number, isSmooth?: boolean) {
    // 滚动到最底部
    if (!containerRef.current) return;
    console.log('isSmooth: ', isSmooth);
    containerRef.current.scrollTo({
      top: current * boxHeight,
      behavior: isSmooth ? 'smooth' : 'auto',
    });
  }

  useEffect(() => {
    let paddingBottom = containerRef?.current?.offsetHeight || 0;
    const top = boxHeight + padding * 2;
    paddingBottom = paddingBottom > top ? paddingBottom - top : paddingBottom;
    setPaddingBottom(paddingBottom);
    if (typeof props?.value === 'number') {
      scrollTo(props?.value);
    }
  }, []);

  useUpdateEffect(() => {
    if (!isOuterValue.current) return;
    if (typeof props?.value === 'number') {
      scrollTo(props?.value, true);
    }
  }, [props?.value]);

  return (
    <div
      ref={containerRef}
      style={{
        padding,
        height: '100%',
        overflowY: 'auto',
        boxSizing: 'border-box',
        ...props?.style,
      }}
    >
      <div style={{ paddingBottom }} ref={boxesRef}>
        {total &&
          Array(total)
            .fill(0)
            .map((_, index) => {
              const current = start + index;
              const isSelect = current === props?.value;
              return (
                <div
                  key={current}
                  className={classNames(boxClass, isSelect && boxSelectClass)}
                  onClick={() => {
                    props?.onChange?.(index);
                    if (!isOuterValue.current) {
                      scrollTo(index, true);
                    }
                  }}
                >{`${current < 10 ? '0' : ''}${current}`}</div>
              );
            })}
      </div>
    </div>
  );
}
