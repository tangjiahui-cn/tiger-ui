import React, { useState } from 'react';
import { Button, Radio, Space, Switch } from '../../packages';

export default function () {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div style={{ padding: 24 }}>
      <Space block>
        <Button>按钮</Button>
        <Radio>Radio</Radio>
        <Switch
          disabled
          style={{ width: 64 }}
          defaultChecked
          checkedChildren={'open'}
          unCheckedChildren={'close'}
        />
        <Switch
          disabled
          defaultChecked={false}
          checkedChildren={'open'}
          unCheckedChildren={'close'}
        />
        <Switch defaultChecked />
        <Switch
          style={{ width: 64 }}
          checked={checked}
          checkedChildren={'true'}
          unCheckedChildren={'false'}
          onChange={(checked) => {
            // setChecked(checked)
          }}
        />
      </Space>
    </div>
  );
}
