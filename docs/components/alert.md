---
nav: 组件
---

## 一、基本使用
```jsx
import {Alert} from 'tiger-ui';

export default () => {
  return <Alert
    message={'message'}
    description={'description'}
  />;
}
```

## 二、四种支持类型
```jsx
import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warn'
      ].map(type => {
        return (
          <Alert
            key={type}
            type={type}
            message={'message'}
            description={'description'}
          />
        )
      })
    }
  </Space>;
}
```

## 三、支持关闭
```jsx
import {Alert} from 'tiger-ui';

export default () => {
  return <Alert
    closable
    message={'message'}
    description={'description'}
  />;
}
```

## 四、显示图标
```jsx
import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warn'
      ].map(type => {
        return (
          <Alert
            showIcon
            key={type}
            type={type}
            message={'message'}
            description={'description'}
          />
        )
      })
    }
  </Space>;
}
```
## 五、自定义图标
需要开启showIcon。
```jsx
import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warn'
      ].map(type => {
        return (
          <Alert
            showIcon
            icon={'(图标)'}
            key={type}
            type={type}
            message={'message'}
            description={'description'}
          />
        )
      })
    }
  </Space>;
}
```

## API
<API id="Alert"></API>
