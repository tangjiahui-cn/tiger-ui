---
title: Counter - 计数器

nav: 组件

group:
  title: 展示组件
  order: 2
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

## 五、手动重新播放
```jsx
import {useRef} from 'react';
import {Counter, Button, Space} from 'tiger-ui';

export default () => {
  const ref = useRef(null);
  return (
    <Space>
      <Button
        onClick={() => {
          ref.current?.replay?.()
        }}
      >重新播放</Button>
      <Counter
        ref={ref}
        start={999}
        end={100000}
        timeSplit={10}
      />
    </Space>
  );
}
```

## API
<API id="Counter"></API>
