import { render, cleanup } from '@testing-library/react';
import * as React from 'react';

export default function (Component: React.ElementType) {
  describe('render test', () => {
    afterEach(cleanup);
    it('render correctly', () => {
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
}
