import Button from '..';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import {
  renderTest,
  domEventTest,
  mountTest,
  nullAndUndefinedChildrenTest,
  reactFragmentTest,
  cssSelectorTest,
} from '../../../tests';

describe('Button', () => {
  renderTest(Button);
  mountTest(Button);
  mountTest(() => <Button danger>按钮</Button>);
  mountTest(() => <Button type={'primary'}>按钮</Button>);
  mountTest(() => <Button size={'large'}>按钮</Button>);
  mountTest(() => <Button disabled>按钮</Button>);
  mountTest(() => (
    <Button block danger disabled size={'small'} type={'dashed'}>
      按钮
    </Button>
  ));

  domEventTest({
    click: (triggerFn: any) => <Button onClick={triggerFn} />,
  });

  cssSelectorTest(['.btn', '.btn-default'], Button);
  cssSelectorTest(['.btn-danger'], () => <Button danger />);
  cssSelectorTest(['.btn-primary'], () => <Button type={'primary'} />);
  cssSelectorTest(['.btn-large'], () => <Button size={'large'} />);
  cssSelectorTest(['.btn-block'], () => <Button block />);
  cssSelectorTest(['[disabled]'], () => <Button disabled />);

  nullAndUndefinedChildrenTest(Button);

  describe('disabled test', () => {
    it('should not onclick when button was disabled.', () => {
      const mockClick = jest.fn();
      const { container } = render(
        <Button disabled onClick={mockClick}>
          按钮
        </Button>,
      );
      const dom = container.firstChild;
      expect(dom).toBeTruthy();
      if (dom) {
        fireEvent.click(dom);
        expect(mockClick).not.toHaveBeenCalled();
      }
    });
  });

  reactFragmentTest(Button);
});
