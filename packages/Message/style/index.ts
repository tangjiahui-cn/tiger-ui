import { css } from 'class-css';

const wrapper = () =>
  css({
    '& .message-container': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
      zIndex: 1000,
    },
  });

export default {
  wrapper,
};
