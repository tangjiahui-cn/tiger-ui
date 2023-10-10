---
nav: 组件
---

## 基本使用
```jsx
import {Table} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <Table 
    columns={[
      {title: '姓名', dataIndex: 'name'},
      {title: '性别', dataIndex: 'sex'},
    ]}
    dataSource={[
      {key: '1', name: '唐某人', sex: '男'}
    ]}
  />;
}
```

## API
按钮的属性说明如下：
<API id="Table"></API>
