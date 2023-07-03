import * as React from 'react';
import { Space, ToolTip, Popover } from '../../packages';

export default function () {
  return (
    <Space block style={{ padding: 100 }} size={400} wrap>
      <Popover title={'鼠标移入'}>
        <span>只有标题</span>
      </Popover>
      <Popover
        title={'标题'}
        content={'这是一段文件这是一段文件这是一段文件这是一段文件这是一段文件这是'}
      >
        <div>标题和内容</div>
      </Popover>

      <Popover title={'一段内容'}>
        <span>只有内容</span>
      </Popover>

      <ToolTip title={'一段文字'} defaultVisible>
        <span>你好</span>
      </ToolTip>
    </Space>
  );
}
