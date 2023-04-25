import { render } from '@testing-library/react';
import React from 'react';

export default function classNameTest(includeClasses: string[], Component: React.ElementType) {
  describe('className test', () => {
    it(`include classes: ${includeClasses.join(',')}`, () => {
      const { container } = render(<Component />);
      const list: number[] = [];
      includeClasses?.forEach((includeClass: string) => {
        list.push(container?.querySelectorAll(includeClass).length || 0);
      });
      expect(list.some((x) => !x)).toBeFalsy();
    });
  });
}
