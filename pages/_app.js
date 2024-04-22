import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar2'
import FooterLargeWithNewsletter from '../components/utils/footerNew' 
// import theme from '../components/utils/theme'
import { extendTheme } from '@chakra-ui/react'

import { Poor_Story,Permanent_Marker, Jost } from 'next/font/google'


const headingFont = Permanent_Marker({ subsets: [ 'latin' ], weight: ['400'] })
const navBarFont = Jost({ subsets: [ 'latin' ], weight: ['400'] })
const bodyFont = Poor_Story({ subsets: [ 'latin' ], weight: ['400'] })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily
  },
})


function MyApp({ Component, pageProps }) {
  return (   
    <ChakraProvider theme={theme}>

    <Box>
      <WithSubnavigation />
      <Component {...pageProps} />
      <FooterLargeWithNewsletter />
      </Box>

    </ChakraProvider>
    )
}

export default MyApp
