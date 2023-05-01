import {
  cssSelectorTest,
  mountTest,
  nullAndUndefinedChildrenTest,
  reactFragmentTest,
  renderTest,
} from '../../../tests';
import Space from '../index';

describe('space', () => {
  renderTest(Space);
  mountTest(Space);
  mountTest(() => (
    <Space>
      1<div>2</div>3
    </Space>
  ));
  mountTest(() => (
    <Space block>
      1<div>2</div>3
    </Space>
  ));
  mountTest(() => (
    <Space direction={'vertical'}>
      1<div>2</div>3
    </Space>
  ));
  mountTest(() => (
    <Space wrap>
      1<div>2</div>3
    </Space>
  ));
  mountTest(() => (
    <Space size={16}>
      1<div>2</div>3
    </Space>
  ));
  mountTest(() => (
    <Space block wrap size={16} direction={'horizontal'}>
      1<div>2</div>3
    </Space>
  ));

  cssSelectorTest(['.space'], Space);
  cssSelectorTest(['.space-wrap'], () => <Space wrap />);
  cssSelectorTest(['.space-vertical'], () => <Space direction={'vertical'} />);
  cssSelectorTest(['.space-block'], () => <Space block />);
  cssSelectorTest(['[style*="gap"]'], () => <Space size={16} />);

  nullAndUndefinedChildrenTest(Space);
  reactFragmentTest(Space);
});
