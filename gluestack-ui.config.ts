import { createConfig } from '@gluestack-ui/themed';
import { config as defaultConfig } from '@gluestack-ui/config';
const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    breakpoints: {
      base: 0,
      md: 992,
      lg: 1280,
      xl: 1568,
    },
    fonts: {
      heading: "Arial, sans-serif",
      body: "Arial, sans-serif",
      mono: "Arial, sans-serif",
    },
    mediaQueries: {
      base: '@media (min-width: 0px)',
      md: '@media (min-width: 992px)',
      lg: '@media (min-width: 1280px)',
      xl: '@media (min-width: 1568px)',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#5B21B6',
      secondary: '#171717',
      backgroundDark: '#171717',
      backgroundLight: '#171717',
      textLight: '#AAAAAA',
      textDark: '#333333',
      textHover: '#82b7f7',

      borderLight: '#171717',
      borderDark: '#171717',
      debug: '#FF0000',

    },
    space: {
      'px': '1px',
      'containerWidthM': 960,
      'containerWidthL': 1140,
      'containerWidthXL': 1320,
      '1/2': '50%',
      '1/6': '16.666667%',
      '5/6': '83.333333%',
      'full': '100%',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '4.5': 18,
      '5': 20,
    },
    borderWidths: {
      ...defaultConfig.tokens.borderWidths,
      '20': 20,
      '50': 50,
    },
    opacity: {
      ...defaultConfig.tokens.opacity,
    },

  },
} as const);

export { config };

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module '@gluestack-ui/config' {
  interface IConfig extends ConfigType {}
}
