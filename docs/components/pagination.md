---
title: Pagination - 分页

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination total={51}/>;
}
```

## 二、受控的分页
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination total={31} current={5} pageSize={5}/>;
}
```

## 三、紧凑样式
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination mini total={31} current={5} pageSize={5}/>;
}
```

## 四、禁用状态
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination disabled total={101} current={5} pageSize={5}/>;
}
```

## 五、是否显示全部
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination showTotal={false} total={101} current={5} pageSize={5}/>;
}
```

## 六、自定义跳转分页内容
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination
    showTotal={false}
    total={101}
    current={5}
    pageSize={5}
    prev={'前一页'}
    next={'下一页'}
    moveLeft={'左移'}
    moveRight={'右移'}
  />;
}
```

## 七、干净分页
```jsx
import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination
    showTotal={false}
    total={101}
    pageSize={5}
    pureSize
  />;
}
```

## API
<API id="Pagination"></API>
