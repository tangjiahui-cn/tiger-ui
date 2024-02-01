---
nav: 组件
---

## 一、基本使用
```jsx
import {DropDown} from 'tiger-ui';

export default () => {
  return (
    <DropDown
      popupPanel={
        <div style={{padding: '12px 16px'}}>hello DropDown!</div>
      }
    >
      <div style={{cursor: 'pointer'}}>点击显示下拉</div>
    </DropDown>
  )
}
```

## 二、手动控制显隐

```jsx
import { DropDown, Space, Button } from 'tiger-ui';
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <DropDown
      open={open}
      popupPanel={
        <>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
        </>
      }
    >
      <Space block>
        <Button type={'primary'} onClick={() => setOpen(true)}>展开</Button>
        <Button type={'primary'} onClick={() => setOpen(false)}>收起</Button>
      </Space>
    </DropDown>
  )
}
```
## API
<API id="DropDown"></API>
