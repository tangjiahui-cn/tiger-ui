import { cssSelectorTest, mountTest, renderTest } from '../../../tests';
import Input from '../index';
import { fireEvent, render } from '@testing-library/react';

describe('input', () => {
  renderTest(Input);
  mountTest(Input);
  mountTest(() => <Input value={'value'} />);
  mountTest(() => <Input size={'middle'} />);
  mountTest(() => <Input prefix={'prefix'} />);
  mountTest(() => <Input prefix={<div>prefix</div>} />);
  mountTest(() => <Input suffix={'suffix'} />);
  mountTest(() => <Input suffix={<div>suffix</div>} />);
  mountTest(() => <Input disabled />);
  mountTest(() => <Input placeholder={'请输入'} />);
  mountTest(() => (
    <Input
      value={'111'}
      size={'middle'}
      prefix={<div>prefix</div>}
      suffix={'suffix'}
      disabled
      placeholder={'请输入'}
    />
  ));

  describe('dom event test', () => {
    it('onchange trigger', () => {
      const mockFn = jest.fn();
      const wrapper = render(
        <Input
          onChange={(e) => {
            expect(e?.target?.value).toEqual('1111');
            mockFn();
          }}
        />,
      );
      const dom = wrapper.container.querySelector('input');
      expect(dom).toBeTruthy();
      if (dom) {
        // @ts-ignore
        fireEvent?.change?.(dom, {
          target: {
            value: '1111',
          },
        });
        expect(mockFn).toHaveBeenCalledTimes(1);
      }
    });
  });

  cssSelectorTest(['.input'], Input);
  cssSelectorTest(['.input-middle'], () => <Input size={'middle'} />);
  cssSelectorTest(['.input-fix-prefix'], () => <Input prefix={'xxx'} />);
  cssSelectorTest(['.input-fix-suffix'], () => <Input suffix={'yyy'} />);
  cssSelectorTest(['[value="111"]'], () => <Input value={'111'} />);
  cssSelectorTest(['[disabled]'], () => <Input disabled />);

  // test props 'prefix' and 'suffix'
  describe('props test', function () {
    it('prefix should <span>xxx</span>', () => {
      const wrapper = render(<Input prefix={'xxx'} />);
      const dom = wrapper.container.querySelector('.input-fix-prefix');
      expect(dom?.innerHTML).toEqual('xxx');
    });
    it('suffix should <span>yyy</span>', () => {
      const wrapper = render(<Input suffix={'yyy'} />);
      const dom = wrapper.container.querySelector('.input-fix-suffix');
      expect(dom?.innerHTML).toEqual('yyy');
    });
  });
});
