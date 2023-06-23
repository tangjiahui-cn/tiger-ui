import React, { useState } from 'react';
import { Button, CheckBox, Radio, Space, Switch } from '../../packages';

const keys = ['1', '2', '3'];
export default function () {
  // 是否半选中
  const [checkList, setCheckList] = useState<string[]>([]);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  function handleAll() {
    setIndeterminate(false);
    setCheckList(checkList.length === 3 ? [] : keys);
  }

  function handleSingle(key: string, checked: boolean) {
    const list = checkList.filter((k) => k !== key);
    const targetList = checked ? [...list, key] : list;
    setIndeterminate(![keys.length, 0].includes(targetList.length));
    setCheckList(targetList);
  }

  return (
    <div style={{ padding: 24 }}>
      <Space direction={'vertical'}>
        <Space block>
          <CheckBox defaultChecked>默认选中</CheckBox>
          <CheckBox indeterminate>半选中</CheckBox>
          <CheckBox checked={false}>未选中</CheckBox>
        </Space>
        <Space style={{ marginTop: 16 }}>
          <CheckBox
            checked={checkList.length === 3}
            indeterminate={indeterminate}
            onChange={handleAll}
          >
            全选
          </CheckBox>
        </Space>
        <Space>
          {keys.map((key: string) => {
            return (
              <CheckBox
                key={key}
                checked={checkList.includes(key)}
                onChange={(checked) => handleSingle(key, checked)}
              >
                选项{key}
              </CheckBox>
            );
          })}
        </Space>
      </Space>
    </div>
  );
}
