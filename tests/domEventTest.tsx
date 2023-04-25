import { fireEvent, render } from '@testing-library/react';

export type domEventTestEventMap = {
  [eventName: string]: (triggerFn: any) => JSX.Element;
};

export default function domEventTest(eventMap: domEventTestEventMap) {
  describe('dom event test', () => {
    Object.entries(eventMap).forEach(([eventName, getComponent]: [any, any]) => {
      it(`on${eventName} trigger`, () => {
        const mockClick = jest.fn();
        const wrapper = render(getComponent(mockClick));
        const dom = wrapper.container.firstChild;
        expect(dom).toBeTruthy();
        if (dom) {
          // @ts-ignore
          fireEvent?.[eventName]?.(dom);
          expect(mockClick).toBeCalled();
        }
      });
    });
  });
}
