import { render } from '@testing-library/react';
import React from 'react';

export default function (Component: React.ElementType) {
  describe('render test', () => {
    it('render correctly', () => {
      const wrapper = render(<Component />);
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });
}
