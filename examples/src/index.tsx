import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Button,
  // Input,
  message,
  Space,
  Dialog,
  Drawer,
  Pagination,
  // ConfigProvider,
} from '../../packages';
// import { Input, ConfigProvider } from "../../packages";
import Input from '../../packages/Input';
import ConfigProvider from '../../packages/ConfigProvider';
// import ConfigProvider from '../../lib/ConfigProvider';
// import Drawer from '../../lib/Drawer';
// import { Button, Input, message, Space, Dialog, Drawer, Pagination, ConfigProvider } from '../../lib';
import '../../lib/index.css';
import * as locales from '../../packages/_locales';

function App() {
  const [pagination, setPagination] = useState<{ current: number; pageSize: number }>({
    current: 1,
    pageSize: 10,
  });

  const [dialogVisible, setDialogVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    // message.success('操作成功', 100000)
    // message.success('操作成功2', 1000)
    // message.info('11')
  }, []);

  const [locale, setLocale] = useState(locales.en_US);

  return (
    <div>
      <Space>
        <Button onClick={() => setDialogVisible(true)}>打开弹窗</Button>
        <Button onClick={() => setDrawerVisible(true)}>打开抽屉</Button>
      </Space>
      <Test />
      <ConfigProvider locale={locale}>
        <div>
          <Space>
            <Button onClick={() => setLocale(locales.zh_CN)}>中文</Button>
            <Button onClick={() => setLocale(locales.en_US)}>英文</Button>
          </Space>
          <div style={{ width: 200 }}>
            <Test />
          </div>
        </div>

        <Dialog visible={dialogVisible} onCancel={() => setDialogVisible(false)}>
          弹窗
        </Dialog>

        <Drawer visible={drawerVisible} onCancel={() => setDrawerVisible(false)}>
          抽屉
        </Drawer>
      </ConfigProvider>
    </div>
  );
}

function Test() {
  return (
    <div style={{ width: 200 }}>
      <Input />
      <Input />
    </div>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
