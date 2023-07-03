import * as React from 'react';
import { Space, ToolTip } from '../../packages';

export default function () {
  return (
    <Space block style={{ paddingTop: 200 }}>
      <ToolTip title={'鼠标移入'}>
        <span>AAA</span>
      </ToolTip>

      <ToolTip
        title={
          '这是一段文件这是一段文件这是一段文件这是一段文件这是一段文件这是一段文件这是一段文件这是一段文件'
        }
      >
        <div style={{ marginLeft: 500 }}>22</div>
      </ToolTip>
    </Space>
  );
}
