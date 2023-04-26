import { fireEvent, render } from '@testing-library/react';

type getJsxElementFn = (triggerFn: any) => JSX.Element;

export type domEventTestEventMap = {
  [eventName: string]: getJsxElementFn;
};

export default function domEventTest(eventMap: domEventTestEventMap) {
  describe('dom event test', () => {
    Object.entries(eventMap).forEach(([eventName, getJsxElement]: [string, getJsxElementFn]) => {
      it(`on${eventName} trigger`, () => {
        const mockClick = jest.fn();
        const wrapper = render(getJsxElement(mockClick));
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
