---
nav: 组件
---

## 基本使用
```jsx
import {Collapse} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <Collapse 
    options={[
      {key: '1', label: '选项一', value: '1'},
      {key: '2', label: '选项二', value: '2'},
    ]}
  />;
}
```

## API
按钮的属性说明如下：
<API id="Collapse"></API>
