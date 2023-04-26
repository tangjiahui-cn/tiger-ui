import { render } from '@testing-library/react';
import React from 'react';

export default function cssSelectorTest(includeSelectors: string[], Component: React.ElementType) {
  describe('css selector test', () => {
    it(`include selector: ${includeSelectors.join(',')}`, () => {
      const { container } = render(<Component />);
      const list: number[] = [];
      includeSelectors?.forEach((includeSelector: string) => {
        list.push(container?.querySelectorAll(includeSelector).length || 0);
      });
      expect(list.some((x) => !x)).toBeFalsy();
    });
  });
}
