---
nav: 组件
---

## 一、基本使用
```jsx
import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      end={100}
    />
  );
}
```

## 二、定义开始数字
```jsx
import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
    />
  );
}
```

## 三、动画时长
```jsx
import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
      duration={10 * 1000}
    />
  );
}
```

## 四、动画递进变化值
值越小，跳动越快。
```jsx
import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
      timeSplit={10}
    />
  );
}
```

## API
<API id="Counter"></API>
