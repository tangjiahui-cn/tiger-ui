import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Space from '@/Space';
import '../../packages/_theme/default.less';
import { useForceUpdate } from '@/_hooks';
import Button, { ButtonSize, ButtonType } from '@/Button/button';
import { Switch } from '@/index';

const size: ButtonSize[] = ['large', 'middle', 'small'];
const types: ButtonType[] = ['primary', 'default', 'dashed', 'dotted', 'text'];

const ghost = false;
const disabled = false;
function App() {
  const ref = useRef<HTMLDivElement>(null);
  const update = useForceUpdate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [message2, setMessage2] = React.useState('description');

  useEffect(() => {
    // setLoading(true)
    // console.log('zz -> ', ref.current);
  }, []);

  return (
    <Space size={16} style={{ background: 'whitesmoke', padding: 12 }} block direction={'vertical'}>
      <Space>
        <Switch checked={loading} onChange={(x) => setLoading(!!x)} />
      </Space>
      <Button loading={loading}>block</Button>
      {/*<Space size={16} style={{ boxSizing: 'border-box' }} direction={'vertical'} block>*/}
      {/*  {size.map((x) => {*/}
      {/*    return (*/}
      {/*      <Space key={x}>*/}
      {/*        {types.map((type) => {*/}
      {/*          return (*/}
      {/*            <Button loading={loading} disabled={disabled} ghost={ghost} key={type} type={type} size={x}>*/}
      {/*              {x}*/}
      {/*            </Button>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </Space>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*  {size.map((x) => {*/}
      {/*    return (*/}
      {/*      <Space key={x}>*/}
      {/*        {types.map((type) => {*/}
      {/*          return (*/}
      {/*            <Button loading={loading} disabled={disabled} ghost={ghost} key={type} type={type} size={x} danger>*/}
      {/*              {x}*/}
      {/*            </Button>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </Space>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Space>*/}
    </Space>
  );
}

const dom = document.getElementById('root') as any;
ReactDOM.createRoot(dom).render(<App />);
