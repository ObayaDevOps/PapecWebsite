import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar2'
import FooterLargeWithNewsletter from '../components/utils/footerNew' 
import theme from '../components/utils/theme'



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
