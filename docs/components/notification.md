---
nav: 组件
---

## 一、基本使用
```jsx
import {Button, Notification} from 'tiger-ui';

export default () => {
  return (
    <Button
      onClick={() => Notification.success({
        message: '操作成功'
      })}
    >
      success
    </Button>
  );
}
```

## 二、自定义消息内容
```jsx
import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [message, setMessage] = useState('')
  return <Space>
    <Input value={message} onChange={e => setMessage(e.target.value)}/>
    <Button onClick={() => Notification.success({message})}>success</Button>
  </Space>;
}
```

## 三、消息类型
```jsx
import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button 
            key={type}
            onClick={() => Notification?.[type]?.({message: type})}
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
import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        message: '1s',
        duration: 1000
      })}
    >
      1s
    </Button>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        message: '1s',
        duration: 3000
      })}
    >
      3s
    </Button>
  </Space>;
}
```

## 五、隐藏右上角关闭
```jsx
import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        closable: false,
        message: '0.4s',
      })}
    >
      打开
    </Button>
  </Space>;
}
```

## 六、永久停留
duration设置0，则永久停留。
```jsx
import {Button, Notification, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.success({
        duration: 0,
        message: '点击关闭图标关闭',
        onClose () {
          console.log('close')
        }
      })}
    >
      打开
    </Button>
  </Space>;
}
```

## 七、自定义消息和描述
```jsx
import {Button, Notification, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.success({
        message: '一段消息',
        description: '一段内容',
        onClose () {
          console.log('close')
        }
      })}
    >
      打开
    </Button>
  </Space>;
}
```

## API
\-
