import {
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      minW: '320px',
      minH: '100dvh',
      background: `
        radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
        linear-gradient(180deg, rgba(221, 207, 195, 1) 0%, rgba(241, 242, 244, 1) 100%)
      `,
      backgroundSize: '20px 20px, 100% 100%',
      fontFamily: 'body',
      color: 'text',
    },
  },
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      fonts: {
        body: {
          value: 'Chilanka, cursive',
        },
        heading: {
          value: 'Over the Rainbow, cursive',
        },
      },
      colors: {
        rose: { value: '#A56565' },
        pink: { value: '#B89C9B' },
        green: { value: '#7B746A' },
        text: { value: '#0c0c0c' },
      },
    },
  },
});

export default createSystem(
  defaultConfig,
  config
);
