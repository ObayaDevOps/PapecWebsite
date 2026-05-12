import { extendTheme } from '@chakra-ui/react';
import { Jost, Courier_Prime, Inter } from 'next/font/google';

const headingFont = Courier_Prime({ subsets: ['latin'], weight: ['400'] });
const navBarFont = Jost({ subsets: ['latin'], weight: ['400'] });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400'] });

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    headingFont: headingFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily,
  },
  semanticTokens: {
    gradients: {
      'brand.pageBg': 'linear(to-br, #e5e5f7, whiteAlpha.100)',
      'brand.heading': 'linear(to-r, blackAlpha.800, purple.500)',
      'brand.cta': 'linear(to-r, purple.900, purple.300)',
    },
  },
});

export default theme;
