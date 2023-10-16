---
nav: 组件
---

## 一、基本使用
```jsx
import {Switch} from 'tiger-ui';

export default () => {
  return <Switch />;
}
```

## 二、受控值

```jsx
import {Switch, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(true);
  return <Space>
    <Switch checked={value}/>
    <Switch checked={value} onChange={setValue}/>
  </Space>
}
```
## 三、默认选中

```jsx
import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Switch defaultChecked />
}
```
## 四、禁用

```jsx
import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Switch disabled checked={false}/>
    <Switch disabled defaultChecked={true}/>
  </Space>
}
```
## 五、自定义选中和未选中内容

```jsx
import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Switch
      checkedChildren={'开'}
      unCheckedChildren={'关'}
    />
    <Switch
      style={{width: 80}}
      checkedChildren={'正确'}
      unCheckedChildren={'错误'}
    />
  </Space>
}
```


## API
<API id="Switch"></API>
