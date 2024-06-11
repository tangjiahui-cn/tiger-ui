/**
 * Loading
 *
 * @author tangjiahui
 * @date 2024/6/10
 * @description let the button loading effect smoothly.
 */
import React, { useEffect, useState } from 'react';

interface LoadingProps {
  /** loading placeholder width */
  width?: number;
  /** loading effect duration (unit: ms) */
  animationDuration?: number;
  /** loading status  */
  loading?: boolean;
  /** render loading icon.  */
  children?: React.ReactNode;
}

const startDelay = 50; // start loading animation delay.
const hideDelay = 50; // while cancel loading, how time to hide the loading icon.
export default function Loading(props: LoadingProps) {
  const { animationDuration = 400, width = 24, loading, children } = props;
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerVisible, setContainerVisible] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    let containerTimerId: any;
    let iconTimerId: any;

    if (loading) {
      setContainerVisible(true);
      setIconVisible(true);
      setContainerWidth(0);
      containerTimerId = setTimeout(() => {
        setContainerWidth(width);
        containerTimerId = null;
      }, startDelay);
    } else {
      if (width) {
        setContainerWidth(0);
        // if cancel loading, hide icon faster.
        iconTimerId = setTimeout(() => {
          setIconVisible(false);
        }, hideDelay);
        // after animation end, hide the container.
        containerTimerId = setTimeout(() => {
          setContainerVisible(false);
          containerTimerId = null;
        }, animationDuration);
      }
    }

    return () => {
      if (containerTimerId) {
        clearTimeout(containerTimerId);
      }
      if (iconTimerId) {
        clearTimeout(iconTimerId);
      }
    };
  }, [loading]);

  return containerVisible ? (
    <div
      style={{
        width: containerWidth,
        transition: `all ${animationDuration}ms`,
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        height: 20,
      }}
    >
      {iconVisible && children}
    </div>
  ) : null;
}
