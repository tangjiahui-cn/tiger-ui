---
nav: 组件
---

## 一、基本使用
```jsx
import {Tabs, Input} from 'tiger-ui';

export default () => {
  return <Tabs
    options={[
      {
        key: '1',
        label: '选项一',
        value: <Input />
      },
      {
        key: '2',
        label: '选项二',
        value: <div>222</div>
      }
    ]}
  />;
}
```

## 二、受控属性
```jsx
import {Tabs} from 'tiger-ui';

export default () => {
  return <Tabs
    activeKey={'2'}
    options={[
      {
        key: '1',
        label: '选项一',
        value: <div>11</div>
      },
      {
        key: '2',
        label: '选项二',
        value: <div>222</div>
      }
    ]}
  />;
}
```

## 三、默认页面
```jsx
import {Tabs} from 'tiger-ui';

export default () => {
  return <Tabs
    defaultActiveKey={'2'}
    options={[
      {
        key: '1',
        label: '选项一',
        value: <div>11</div>
      },
      {
        key: '2',
        label: '选项二',
        value: <div>222</div>
      }
    ]}
  />;
}
```

## 四、状态销毁
```jsx
import {Tabs, Input} from 'tiger-ui';

export default () => {
  return <Tabs
    destroy
    options={[
      {
        key: '1',
        label: '选项一',
        value: <Input />
      },
      {
        key: '2',
        label: '选项二',
        value: <div>222</div>
      }
    ]}
  />;
}
```
## API
<API id="Tabs"></API>
