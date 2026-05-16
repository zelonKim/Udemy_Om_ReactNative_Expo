import { useMemo } from 'react';
import { PRIMARY } from '../theme/colors';

const generateColorFromString = (str: string) => {
  let hash = 0;

  for (let i=0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash % 360);
  
  return `hsl(${hue}, 60%, 55%)`;
};





export const useImageColors = (imageUrl: string) => {
  const colorPalette = useMemo(() => {
    if (!imageUrl) {
      return {
        primary: PRIMARY,
        secondary: PRIMARY,
        background: PRIMARY,
      };
    }

    const generated = generateColorFromString(imageUrl);

    return {
      primary: generated,
      secondary: generated,
      background: generated,
    };
  }, [imageUrl]);

  return {
    colors: colorPalette,
  };
};
