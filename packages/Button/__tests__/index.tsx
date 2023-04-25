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
  classNameTest,
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

  classNameTest(['.btn', '.btn-default'], Button);
  classNameTest(['.btn-danger'], () => <Button danger />);
  classNameTest(['.btn-primary'], () => <Button type={'primary'} />);
  classNameTest(['.btn-large'], () => <Button size={'large'} />);
  classNameTest(['.btn-block'], () => <Button block />);
  classNameTest(['[disabled]'], () => <Button disabled />);

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
