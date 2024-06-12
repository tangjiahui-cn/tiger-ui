---
title: Checkbox - 多选框

nav: 组件

group:
  title: 交互组件
  order: 3
---

## 一、基本使用
```jsx
import {Checkbox} from 'tiger-ui';

export default () => {
  return <Checkbox>复选框</Checkbox>;
}
```
## 二、受控值
```jsx
import {Checkbox, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  
  return <Space size={16} direction={'vertical'}>
    <Space size={16}>
      {
        ['A', 'B', 'C', 'D', 'E'].map(x => {
          return (
            <Checkbox
              key={x}
              disabled={disabled}
              checked={checked}
              indeterminate={indeterminate}
            >
              {x}
            </Checkbox>
          )
        })
      }
    </Space>
    <Space size={16}>
      <Button disabled={indeterminate} type={'primary'} onClick={() => setChecked(v => !v)}>
        toggle {checked ? 'unChecked' : 'checked'}
      </Button>
      <Button type={'primary'} onClick={() => setIndeterminate(v => !v)}>
        toggle {indeterminate ? 'unIndeterminate' : 'indeterminate'}
      </Button>
      <Button type={'primary'} onClick={() => setDisabled(v => !v)}>
        toggle {disabled ? 'unDisabled' : 'disabled'}
      </Button>
    </Space>
  </Space>;
}
```

## 三、半选中值
半选中是受控属性，仅用于展示状态，优先级高于选中。

```jsx
import { Checkbox, Space } from 'tiger-ui';
import { useMemo, useState } from 'react';

const list = ['apple', 'orange', 'banana', 'grape']
const INITIAL = new Set(['banana'])
export default () => {
  const [types, setTypes] = useState(INITIAL);
  const indeterminate = types.size && types.size !== list.length;
  const checked = types.size === list.length

  return (
    <Space size={16} direction={'vertical'} style={{width: '100%'}}>
      <Checkbox checked={checked} indeterminate={indeterminate}>水果</Checkbox>
      <div style={{height: 1, background: '#e8e8e8'}} />
      <Space size={16}>
        {
          list.map(x => {
            const checked = types.has(x);
            return (
              <Checkbox
                key={x}
                checked={checked}
                onChange={() => {
                  checked ? types.delete(x) : types.add(x)
                  setTypes(new Set(types))
                }}
              >
                {x}
              </Checkbox>
            )
          })
        }
      </Space>
    </Space>
  );
}
```

## 四、禁用
```jsx
import {Checkbox, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [disabled, setDisabled] = useState(false);
  
  return <Space size={16} direction={'vertical'}>
    <Space size={16}>
      <Checkbox disabled={disabled} defaultChecked>默认选中</Checkbox>
      <Checkbox disabled={disabled} indeterminate>半选中</Checkbox>
      <Checkbox disabled={disabled}>默认</Checkbox>
    </Space>
    <Button type={'primary'} onClick={() => setDisabled(!disabled)}>
      toggle {disabled ? 'unDisabled' : 'disabled'}
    </Button>
  </Space>;
}
```
## API
<API id="Checkbox"></API>
