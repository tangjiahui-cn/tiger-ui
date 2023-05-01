import { render } from '@testing-library/react';
import * as React from 'react';

export default function mountTest(Component: React.ElementType) {
  describe('test mount and unmount', () => {
    it('mount and unmount without throw', () => {
      expect(() => {
        const { unmount, rerender } = render(<Component />);
        rerender(<Component />);
        unmount();
      }).not.toThrow();
    });
  });
}
