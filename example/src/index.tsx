/**
 * App
 */
import { useLogRenderTime } from '../hooks/useLogRenderTime';
import Button from '@/Button';
import { Space, Popover, ToolTip, ToolTipTrigger } from '@/index';
import { useForceUpdate } from '@/_hooks';

const trigger: ToolTipTrigger = ['hover', 'focus', 'click', 'contextMenu'];

export default function () {
  useLogRenderTime();
  const update = useForceUpdate();

  return (
    <Space style={{ padding: 12, width: '100%' }} direction={'vertical'}>
      <div style={{ height: 200 }}></div>
      <Space>
        <Button onClick={update}>update</Button>
        <ToolTip color={'red'} trigger={trigger} title={<div style={{ height: 100 }}>WoW!</div>}>
          <Button>按钮</Button>
        </ToolTip>
        <ToolTip trigger={trigger} title={'你好'}>
          11
        </ToolTip>
        <Popover
          trigger={trigger}
          title={'title'}
          content={
            <Space direction={'vertical'} size={0}>
              <span>content</span>
              <span>content</span>
            </Space>
          }
        >
          <Button>Popover</Button>
        </Popover>
        <ToolTip title={'promptaaaaaaaaaaa'}>
          <Button>Hover</Button>
        </ToolTip>
      </Space>
      <div style={{ height: 200 }}></div>
    </Space>
  );
}
