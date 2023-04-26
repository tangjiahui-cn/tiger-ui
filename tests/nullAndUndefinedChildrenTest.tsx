import { render } from '@testing-library/react';
import React from 'react';

export default function nullAndUndefinedChildrenTest(Component: React.ElementType) {
  describe('Null and Undefined Children test', () => {
    it('should render null or undefined in children without errors', () => {
      const wrapper = render(
        <Component>
          {null}
          {undefined}
        </Component>,
      );
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });
}
