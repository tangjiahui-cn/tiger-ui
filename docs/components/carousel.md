---
nav: 组件
---

## 一、基本使用

```jsx
import {Carousel} from 'tiger-ui';
export default () => {
  return (
    <Carousel style={{height: 180, width: 700}}>
      <Carousel.Item style={{background: 'red', height: '100%'}}></Carousel.Item>
      <Carousel.Item style={{background: 'blue', height: '100%'}}></Carousel.Item>
      <Carousel.Item style={{background: 'black', height: '100%'}}></Carousel.Item>
    </Carousel>
  )
}

```


## 二、自动播放

```jsx
import {Carousel} from 'tiger-ui';
export default () => {
  return <div style={{height: 180, width: 700}}>
    <Carousel
      autoplay
      items={[
        {key: '1', children: <div style={{background: 'red', height: '100%'}} />},
        {key: '2', children: <div style={{background: 'blue', height: '100%'}} />},
        {key: '2', children: <div style={{background: 'black', height: '100%'}} />},
      ]}
    />
  </div>;
}

```

## 三、操作栏类型

```jsx
import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [type, setType] = useState('rect');
  return <Space block direction={'vertical'}>
    <Space>
      {['dot', 'rect', 'line'].map(type => {
        return (
          <Button stayFocus key={type} onClick={() => setType(type)}>
            {type}
          </Button>
        )
      })}
    </Space>
    <Carousel
      style={{height: 180, width: 700}}
      autoplay
      type={type}
      items={[
        {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
        {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
        {key: '2', children: <div style={{background: 'black', height: '100%'}}/>},
      ]}
    />
  </Space>;
}
```

## 四、受控属性
current是从0开始计算步数的

```jsx
import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [current, setCurrent] = useState(0);
  
  const options = [
    {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
    {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
    {key: '3', children: <div style={{background: 'black', height: '100%'}}/>},
  ];
  
  return <Space block direction={'vertical'}>
    <Space>
      {options.map((_, index) => {
        const step = index;
        return (
          <Button 
            focus={step === current}
            stayFocus
            onClick={() => setCurrent(step)}
          >
            {index + 1}
          </Button>
        )
      })}
    </Space>
    <Carousel
      style={{height: 180, width: 700}}
      autoplay
      current={current}
      items={options}
      onChange={setCurrent}
    />
  </Space>;
}
```
## 五、动画时长

```jsx
import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [delay, setDelay] = useState(2000);
  const options = [
    {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
    {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
    {key: '3', children: <div style={{background: 'black', height: '100%'}}/>},
  ];
  
  return <Space block direction={'vertical'}>
    <Space>
      {
        [500, 1000, 2000].map(delay => {
          return (
            <Button key={delay} onClick={() => setDelay(delay)}>
              {delay} ms
            </Button>
          )
        })
      }
    </Space>
    <Carousel
      autoplay
      autoplayDelay={delay}
      items={options}
      style={{height: 180}}
    />
  </Space>;
}
```
## API
<API id="Carousel"></API>
