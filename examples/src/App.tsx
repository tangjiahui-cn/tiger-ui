import React, { useState } from 'react';
import { Image, Space, Upload } from '../../packages';

export default function () {
  const [visible, setVisible] = useState<boolean>(false);
  const [src, setSrc] = useState<string>('');
  console.log(src);

  return (
    <div style={{ padding: 24 }}>
      <Space direction={'vertical'} block>
        <Upload
          maxSizeErrorMsg={(count) => `${count} --> 不超过大小`}
          // onChange={files => {
          //   console.log('-> ', files)
          // }}
          onPreview={(file) => {
            setSrc(URL.createObjectURL(file));
            window.open(URL.createObjectURL(file));
          }}
        />
      </Space>
    </div>
  );
}
