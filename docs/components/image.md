---
title: Image - 图片

nav: 组件

group:
  title: 展示组件
  order: 2
---

## 一、基本使用
```jsx
import {Image} from 'tiger-ui';

export default () => {
  return <Image
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}
```

## 二、限制大小
```jsx
import {Image} from 'tiger-ui';

export default () => {
  return <Image
    width={32}
    height={32}
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}
```

## 三、支持预览
```jsx
import {Image} from 'tiger-ui';

export default () => {
  return <Image
    preview
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}
```

## API
<API id="Image"></API>
