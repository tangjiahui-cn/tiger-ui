/**
 * FixedVirtualList
 *
 * @author tangjiahui
 * @date 2024/6/14
 * @description fixed container height, fixed item height.
 */
import React, { useEffect, useRef, useState } from 'react';

interface FixedVirtualListProps {
  height: number;
  itemHeight: number;
  itemCount: number;
  list?: any[];
  cacheSize?: number;
  gap?: number;
  style?: React.CSSProperties;
  children?: (info: { index: number; style: React.CSSProperties; data?: any }) => React.ReactNode;
}

export default function FixedVirtualList(props: FixedVirtualListProps) {
  const {
    cacheSize = 2,
    gap = 0,
    list,
    itemHeight = 0,
    itemCount = 0,
    height = 0,
    style,
    children,
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const virtualHeight: number = itemHeight * itemCount;
  const maxScrollTop = virtualHeight - height;
  const visibleCount = Math.ceil(height / itemHeight);

  const [renderChildren, setRenderChildren] = useState<React.ReactNode[]>([]);

  function handleRender() {
    if (!containerRef.current) {
      return;
    }
    const scrollTop = Math.min(maxScrollTop, containerRef.current.scrollTop);
    const base = Math.floor(scrollTop / itemHeight);
    let end = Math.min(base + visibleCount + cacheSize, itemCount);
    const start = Math.max(0, base - cacheSize);
    setRenderChildren(getRenderChildren(start, end));
  }

  function getRenderChildren(start: number, end: number) {
    const nodes: React.ReactNode[] = [];
    let top = start * itemHeight;
    for (let i = start; i < end; i++) {
      if (i !== start) {
        top += itemHeight + gap;
      }
      const style: React.CSSProperties = {
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        boxSizing: 'border-box',
        top: `${top}px`,
        height: itemHeight,
      };
      nodes.push(
        children?.({
          index: i,
          style,
          data: list?.[i],
        }),
      );
    }
    return nodes;
  }

  useEffect(() => {
    handleRender();
  }, [list]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height, overflowY: 'auto', ...style }}
      onScroll={handleRender}
    >
      <div
        style={{
          position: 'relative',
          height: virtualHeight,
        }}
      >
        {renderChildren}
      </div>
    </div>
  );
}
