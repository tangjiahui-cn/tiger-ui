import { render } from '@testing-library/react';
import * as React from 'react';

export default function reactFragmentTest(Component: React.ElementType) {
  describe('react fragment test', () => {
    it('should render React.Fragment without error.', () => {
      const wrapper = render(
        <Component>
          <>text</>
        </Component>,
      );
      expect(wrapper.container.firstChild).toMatchSnapshot();
    });
  });
}
