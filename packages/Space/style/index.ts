import usePrefix from '../../_utils/hooks/usePrefix';
import useEmotion from '../../_utils/hooks/useEmotion';
import brotherSelector from '../../_utils/style/brotherSelector';
import type { SpaceDirection } from '..';

type StyleObject = {
  [k: string]: any | StyleObject;
};

export function useStyle(componentName: string): {
  space: () => string;
  wrap: () => string;
  block: () => string;
  direction: (direction: SpaceDirection) => string;
} {
  const prefix = usePrefix(componentName);
  const { css } = useEmotion({ key: prefix });

  const wrap = () => `${prefix}-wrap`;
  const block = () => `${prefix}-block`;

  function genDirectionStyle() {
    const getClassName = (direction: SpaceDirection) => `${prefix}-${direction}`;
    const directionStyle = {
      [getClassName('vertical')]: {
        flexDirection: 'column',
      },
      [getClassName('horizontal')]: {
        alignItems: 'center',
      },
    };
    return {
      direction: getClassName,
      directionStyle,
    };
  }

  const { direction, directionStyle } = genDirectionStyle();

  const space = () => {
    return css({
      display: 'inline-flex',
      ...brotherSelector(directionStyle),
      ...brotherSelector({
        [wrap()]: {
          flexWrap: 'wrap',
        },
      }),
      ...brotherSelector({
        [block()]: {
          display: 'flex',
        },
      }),
    });
  };

  return {
    space,
    wrap,
    block,
    direction,
  };
}
