---
title: Alert - 警告提示

nav: 组件

group:
  title: 展示组件 
  order: 2
---

## 一、基本使用
```jsx
import {Alert} from 'tiger-ui';

export default () => {
  return <Alert message={'message'} />;
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
        'warning'
      ].map(type => {
        return (
          <Alert
            key={type}
            type={type}
            message={'message'}
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
        'warning'
      ].map(type => {
        return (
          <Alert
            showIcon
            closable
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
        'warning'
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


## 六、支持循环滚动
设置loop属性。
```jsx
import {Alert, Space} from 'tiger-ui';

export default () => {
  return (
    <Alert
      loop
      showIcon
      type={'success'}
      message={'恭喜您中奖1块钱！'}
      description={'中奖者都是天运加身之人。'}
    />
  );
}
```


## API
<API id="Alert"></API>
