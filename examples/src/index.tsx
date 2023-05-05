import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Button, Input } from 'tiger-ui';
import { Button, Input, message, Space, Dialog, Drawer, Pagination } from '../../packages';
// import { Button, Input, message, Space, DialogBox } from '../../lib/index';
// import '../../lib/index.css';

function App() {
  const [pagination, setPagination] = useState<{ current: number; pageSize: number }>({
    current: 1,
    pageSize: 10,
  });
  const [inputValue, setInputValue] = useState<any>('fsdfasd');
  const [visible, setVisible] = useState<boolean>(true);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  useEffect(() => {
    // message.success('操作成功', 100000)
    // message.success('操作成功2', 1000)
    // message.info('11')
  }, []);

  return (
    <div>
      <Pagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={1126}
        moveLeftSize={10}
        moveRightSize={20}
        onChange={(current = 1, pageSize = 10) => {
          setPagination({ current, pageSize });
        }}
      />
      <Pagination
        disabled
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={1120}
        onChange={(current = 1, pageSize = 10) => {
          console.log('-->', current, pageSize);
          setPagination({ current, pageSize });
        }}
      />
      {/*<Pagination size={'middle'}/>*/}
      {/*<Pagination size={'large'}/>*/}
      {/*<Pagination size={'small'} mini/>*/}
      {/*<Pagination size={'middle'} mini/>*/}
      {/*<Pagination size={'large'} mini/>*/}
    </div>
  );
}

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom).render(<App />);
