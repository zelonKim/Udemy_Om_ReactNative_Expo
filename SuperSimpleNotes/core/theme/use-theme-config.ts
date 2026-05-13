import { DefaultTheme, type Theme } from '@react-navigation/native';

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'pink',
  },
};

export const useThemeConfig = () => {
  return LightTheme;
};
