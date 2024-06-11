---
title: Button - 按钮

nav: 组件

group: 
  title: 基础组件
  order: 1
---

## 一、基本使用
```jsx
import {Button} from 'tiger-ui';

export default () => {
  return <Button>点我一下</Button>;
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
## 六、幽灵按钮（ghost）
```jsx
import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space style={{ background: '#c2c2c2', padding: 16 }} block direction={'vertical'}>
    <Space block>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button ghost type={type} key={type}>{type}</Button>
        })
      }
    </Space>
    <Space block>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button ghost danger type={type} key={type + 'danger'}>{type}</Button>
        })
      }
    </Space>
  </Space>;
}
```
## 七、加载中（loading）
```jsx
import {Button, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  
  function handleClick () {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }
  
  return (
    <Space>
      <Button loading={loading} onClick={handleClick}>
        点击加载
      </Button>
    </Space>
  );
}
```

## API
<API id="Button"></API>
