import * as React from 'react';
import { Button, Notification, Space } from '../../packages';
import { NotificationType } from '../../packages/Notification/notification';
import { useEffect } from 'react';

export default function () {
  function openNotification(type: NotificationType) {
    Notification.open({
      type,
      message: type,
      description: type,
    }).then(() => {
      console.log('close: ', type);
    });
  }

  useEffect(() => {
    openNotification('success');
  }, []);

  return (
    <div>
      <Space style={{ padding: 16 }}>
        {['success', 'error', 'info', 'warn'].map((type: any) => {
          return (
            <Button key={type} onClick={() => openNotification(type)}>
              {type}
            </Button>
          );
        })}
        <Button
          onClick={() =>
            Notification.open({
              message: '消息提醒框',
              duration: 0,
              onClose() {
                console.log('close');
              },
            })
          }
        >
          打开通知提醒框
        </Button>
      </Space>
    </div>
  );
}
