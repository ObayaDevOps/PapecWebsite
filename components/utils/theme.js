import { extendTheme } from '@chakra-ui/react';
import { Inter, DM_Sans, Roboto } from 'next/font/google';

const uiFont = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const bodyFont = Roboto({ subsets: ['latin'], weight: ['400', '500'] });
const subtitleSerif = DM_Sans({ subsets: ['latin'], weight: ['600'] });

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    headingFont: uiFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    uiFont: uiFont.style.fontFamily,
    subtitleFont: subtitleSerif.style.fontFamily,
  },
  colors: {
    brand: {
      primary: '#5B3FA6',
      primaryDark: '#3D2A75',
      accent: '#E8A838',
      accentDark: '#C78A1A',
      bg: '#F7F6FF',
      surface: '#FFFFFF',
      textDark: '#1A1733',
      textMid: '#4A4565',
      border: '#E2DFF7',
    },
  },
  semanticTokens: {
    gradients: {
      'brand.pageBg': 'linear(to-br, #e5e5f7, whiteAlpha.100)',
      'brand.heading': 'linear(to-r, #1A1733, #5B3FA6)',
      'brand.cta': 'linear(to-r, #3D2A75, #5B3FA6)',
    },
  },
});

export default theme;
