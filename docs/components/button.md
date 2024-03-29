---
nav: 组件
---

## 一、基本使用
```jsx
import {Button} from 'tiger-ui';

export default () => {
  return <Button>按钮</Button>;
}
```

## 二、按钮大小（size）
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['small', 'middle', 'large'].map(size => {
        return <Button size={size} key={size}>{size}</Button>
      })
    }
  </Space>;
}
```
## 三、按钮类型（type）
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
        return <Button type={type} key={type}>{type}</Button>
      })
    }
  </Space>;
}
```

## 四、危险按钮（danger）
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
        return <Button type={type} danger key={type}>{type}</Button>
      })
    }
  </Space>;
}
```

## 五、按钮禁用（disable）
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Space>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button type={type} disabled key={type}>{type}</Button>
        })
      }
    </Space>
    <Space>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button type={type} disabled danger key={'_' + type}>{type}</Button>
        })
      }
    </Space>
  </Space>;
}
```
## 六、停留聚焦
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
        return <Button type={type} key={type} stayFocus>{type}</Button>
      })
    }
  </Space>;
}
```

## API
<API id="Button"></API>
