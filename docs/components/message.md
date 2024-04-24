---
nav: 组件
---

## 一、基本使用
```jsx
import {Button, message} from 'tiger-ui';

export default () => {
  return <Button onClick={() => message.success('操作成功')}>success</Button>;
}
```

## 二、自定义消息内容
```jsx
import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState('')
  return <Space>
    <Input value={value} onChange={e => setValue(e.target.value)}/>
    <Button onClick={() => message.success(value)}>success</Button>
  </Space>;
}
```

## 三、消息类型
```jsx
import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button 
            key={type}
            onClick={() => message?.[type]?.(type)}
          >
            {type}
          </Button>
        )
      })
    }
  </Space>;
}
```

## 四、自定义驻留延时
```jsx
import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1s',
        duration: 1000
      })}
    >
      1s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '3s',
        duration: 3000
      })}
    >
      3s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1000s',
        duration: 1000 * 1000
      })}
    >
      1000s
    </Button>
  </Space>;
}
```

## 五、自定义动画时长
```jsx
import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '0.4s',
        animationDuration: 400
      })}
    >
      0.4s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1.5s',
        animationDuration: 1500
      })}
    >
      1.5s
    </Button>
  </Space>;
}
```

## 六、可配置项
```jsx
import {Button, message, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button
            key={type}
            onClick={() => message.open({
              type,
              content: type,
              duration: 3000,
              animationDuration: 500,
              onClose () {
                console.log('close: ', type)
              }
            })}
          >
            {type}
          </Button>
        )
      })
    }
  </Space>;
}
```

## API
\-
