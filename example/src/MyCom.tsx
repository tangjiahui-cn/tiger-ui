/**
 * test _css
 */
import { changeTheme } from '@/_css';
import { Space, Button } from '@/index';
import styles from './MyCom.less';

export default function () {
  return (
    <Space block>
      <div className={styles.btn}> 当前主题色 1</div>
      <Button onClick={() => changeTheme('primary', 'blue')}>修改蓝色</Button>
      <Button onClick={() => changeTheme('primary', 'red')}>修改红色</Button>
    </Space>
  );
}
