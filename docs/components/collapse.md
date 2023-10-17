---
nav: 组件
---

## 一、基本使用
```jsx
import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    options={[
      {key: '1', label: '页面一', children: <Input />},
      {key: '2', label: '页面二', children: <div>22</div>},
      {key: '3', label: '页面三', children: <div>33</div>},
      {key: '4', label: '页面四', children: <div>44</div>},
    ]}
  />;
}
```

## 二、手风琴模式
```jsx
import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    accordion
    options={[
      {key: '1', label: '页面一', children: <Input />},
      {key: '2', label: '页面二', children: <div>22</div>},
      {key: '3', label: '页面三', children: <div>33</div>},
      {key: '4', label: '页面四', children: <div>44</div>},
    ]}
  />;
}
```


## 三、受控属性
受控属性优先级要高于accordion（手风琴属性）。
```jsx
import {Collapse} from 'tiger-ui';

export default () => {
  return <Collapse
    accordion
    value={['1', '2']}
    options={[
      {key: '1', label: '页面一', children: <div>11</div>},
      {key: '2', label: '页面二', children: <div>22</div>},
      {key: '3', label: '页面三', children: <div>33</div>},
      {key: '4', label: '页面四', children: <div>44</div>},
    ]}
  />;
}
```

## 四、是否销毁
```jsx
import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    destroy
    accordion
    options={[
      {key: '1', label: '页面一', children: <Input />},
      {key: '2', label: '页面二', children: <div>22</div>},
      {key: '3', label: '页面三', children: <div>33</div>},
      {key: '4', label: '页面四', children: <div>44</div>},
    ]}
  />;
}
```

## 五、自定义图标
```jsx
import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    destroy
    icon={'展开'}
    accordion
    options={[
      {key: '1', label: '页面一', children: <Input />},
      {key: '2', label: '页面二', children: <div>22</div>},
      {key: '3', label: '页面三', children: <div>33</div>},
      {key: '4', label: '页面四', children: <div>44</div>},
    ]}
  />;
}
```

## API
<API id="Collapse"></API>
