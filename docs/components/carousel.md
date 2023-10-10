---
nav: 组件
---

## 基本使用
```jsx
import {Carousel} from 'tiger-ui';
import 'tiger-ui/index.css';

export default () => {
  return <div style={{height: 100}}>
    <Carousel
      options={[
        {key: '1', children: '选项一', },
        {key: '2', children: '选项二', },
      ]}
    />
  </div>;
}
```

## API
按钮的属性说明如下：
<API id="Carousel"></API>
