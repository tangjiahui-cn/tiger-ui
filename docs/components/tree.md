---
nav: 组件
---

## 基本使用
```jsx
import {Tree} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <Tree 
    treeData={[
      {key: '1', title: '项目一',
        children: [
          {key: '1-1', title: '参建单位一',},
          {key: '1-2', title: '参建单位二',}
        ]
      },
      {key: '2', title: '项目二',
        children: [
          {key: '2-1', title: '参建单位三',},
          {key: '2-2', title: '参建单位四',}
        ]
      }
    ]}
  />;
}
```

## API
按钮的属性说明如下：
<API id="Tree"></API>
