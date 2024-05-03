import '../styles/globals.css'
import { ChakraProvider, Box, ScaleFade, Slide } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar2'
import FooterLargeWithNewsletter from '../components/utils/footerNew' 
// import theme from '../components/utils/theme'
import { extendTheme } from '@chakra-ui/react'

import { Poor_Story,Permanent_Marker, Jost, Courier_Prime, Inter } from 'next/font/google'


const headingFont = Courier_Prime({ subsets: [ 'latin' ], weight: ['400'] })
const navBarFont = Jost({ subsets: [ 'latin' ], weight: ['400'] })
const bodyFont = Inter({ subsets: [ 'latin' ], weight: ['400'] })

const theme = extendTheme({
  fonts: {
    headingFont: headingFont.style.fontFamily,
    bodyFont: bodyFont.style.fontFamily,
    navBarFont: navBarFont.style.fontFamily
  },
})


function MyApp({ Component, pageProps, router }) {
  return (   
    <ChakraProvider theme={theme}>

    <Box>
      {/* <WithSubnavigation /> */}
      {/* <ScaleFade
        key={router.route}
        initialScale={0.9}
        in="true"
      > */}

      <Component {...pageProps} />
      
      <FooterLargeWithNewsletter />
      {/* </ScaleFade> */}
      </Box>

    </ChakraProvider>
    )
}

export default MyApp
