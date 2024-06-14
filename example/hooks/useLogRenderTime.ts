import { useEffect, useMemo } from 'react';

export function useLogRenderTime(label: string = 'total time') {
  const timer = useMemo(() => {
    let isStart = false;
    return {
      start() {
        if (isStart) return;
        isStart = true;
        console.time(label);
      },
      end() {
        isStart = false;
        console.timeEnd(label);
      },
    };
  }, []);

  timer.start();

  useEffect(() => {
    timer.end();
  }, []);
}
