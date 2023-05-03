import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input, message, Space, Dialog, Drawer } from '../../packages';
// import { Button, Input, message, Space, DialogBox } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [inputValue, setInputValue] = useState<any>('fsdfasd');
  const [visible, setVisible] = useState<boolean>(true);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  useEffect(() => {
    // message.success('操作成功', 100000)
    // message.success('操作成功2', 1000)
    // message.info('11')
  }, []);

  return (
    <>
      <div style={{ padding: 10 }}>
        <Button>按钮</Button>
        <Input style={{ width: 200 }} />
        <Input style={{ width: 200 }} prefix={'prefix'} suffix={'suffix'} />
        你好Aabc
      </div>
      <div style={{ padding: 10 }}>
        <Input />
      </div>
      <Space size={16} style={{ padding: 16 }} direction={'vertical'}>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          打开对话框
        </Button>

        <Drawer
          destroyOnClose={false}
          visible={visible}
          onCancel={() => {
            setVisible(false);
          }}
          onOk={() => {
            message.success('操作成功');
          }}
        >
          <div style={{ background: 'whitesmoke', minHeight: '100%' }}>
            <Button onClick={() => setDialogVisible(true)} type={'primary'}>
              打开对话框
            </Button>
            <Input />
            <div>
              <Input style={{ width: 200 }} value={'111'} />
              <Input prefix={'xx'} style={{ width: 200 }} value={'222'} />
              <Button>按钮</Button>
            </div>
            <div>
              <Input size={'large'} style={{ width: 200 }} value={'111'} />
              <Input size={'large'} prefix={'xx'} style={{ width: 200 }} value={'222'} />
              <Button size={'large'}>按钮</Button>
            </div>
            <div>
              <Input size={'small'} style={{ width: 200 }} value={'111'} />
              <Input size={'small'} prefix={'xx'} style={{ width: 200 }} value={'222'} />
              <Button size={'small'}>按钮</Button>
            </div>
          </div>
        </Drawer>

        <Dialog
          visible={dialogVisible}
          onCancel={() => setDialogVisible(false)}
          onOk={() => message.success('操作成功')}
        >
          <Input maxLength={10} />
        </Dialog>
      </Space>
    </>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
