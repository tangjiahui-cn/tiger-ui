---
title: Popover - 气泡卡片

nav: 组件

group:
  title: 弹窗组件
  order: 5
---

## 一、基本使用
```jsx
import {Popover} from 'tiger-ui';

export default () => {
  return <Popover content={'标题'}>
    <span>hover me</span>
  </Popover>;
}
```

## 二、自定义标题和内容
```jsx
import {Popover, Space} from 'tiger-ui';

export default () => {
  return (
    <Popover
      title='标题'
      content={(
        <Space direction={'vertical'}>
          <span>content</span>
          <span>content</span>
        </Space>
      )}
    >
      <span>hove me</span>
    </Popover>
  );
}
```

## 三、色彩提示
预设了一些值，同时支持自定义颜色。
```jsx
import {Popover, Space, Button} from 'tiger-ui';
import {useState} from 'react';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
];

export default () => {
  const [customColor, setCustomColor] = useState('#000');
  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <h3>Presets </h3>
      <Space wrap>
        {
          colors.map(color => {
            return (
              <Popover title={'prompt text'} key={color} color={color}>
                <Button>{color}</Button>
              </Popover>
            )
          })
        }
      </Space>
      <h3>自定义颜色 </h3>
      <Space>
        <Popover color={customColor} title={'prompt text'}>
          <input
            type={'color'}
            onChange={e => {
              setCustomColor(e.target.value)
            }}
          />
        </Popover>
      </Space>
    </Space>
  );
}
```

## API
API 同 ToolTip.
<API id="Popover"/>
