import type { ImageSize } from '@/_types';

export function getImageResolution(src?: string): Promise<ImageSize> {
  if (!src) return Promise.resolve({ width: 0, height: 0 });
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = function () {
      return resolve({
        width: img.width,
        height: img.height,
      });
    };
  });
}
