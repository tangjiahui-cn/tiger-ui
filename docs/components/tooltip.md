---
title: Tooltip - 文字提示

nav: 组件

group:
  title: 弹窗组件
  order: 5
---

## 一、基本使用
```jsx
import {ToolTip} from 'tiger-ui';

export default () => {
  return <ToolTip title={'Hello React !'}>
    <span>hove me</span>
  </ToolTip>;
}
```

## 二、色彩提示
预设了一些值，同时支持自定义颜色。
```jsx
import {ToolTip, Space, Button} from 'tiger-ui';
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
              <ToolTip title={'prompt text'} key={color} color={color}>
                <Button>{color}</Button>
              </ToolTip>
            )
          })
        }
      </Space>
      <h3>自定义颜色 </h3>
      <Space>
        <ToolTip color={customColor} title={'prompt text'}>
          <input
            type={'color'}
            onChange={e => {
              setCustomColor(e.target.value)
            }}
          />
        </ToolTip>
      </Space>
    </Space>
  );
}
```

## 三、触发方式
可以设置单个触发方式，或者多个的数组形式。
```jsx
import {ToolTip, Space, Button} from 'tiger-ui';
import {useState} from 'react';

const triggers = [
  'hover',
  'focus',
  'click',
  'contextMenu'
];

export default () => {
  const [customColor, setCustomColor] = useState('#000');
  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <b>设置单个</b>
      <Space wrap>
        {
          triggers.map(trigger => {
            return (
              <ToolTip title={'prompt text'} key={trigger} trigger={trigger}>
                <Button>{trigger}</Button>
              </ToolTip>
            )
          })
        }
      </Space>
      <b>设置多个</b>
      <ToolTip title={'prompt text'} trigger={triggers}>
        <Button>hover me</Button>
      </ToolTip>
    </Space>
  );
}
```

## API
\-
