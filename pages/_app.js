import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import FooterLargeWithNewsletter from '../components/utils/footer'
import theme from '../components/utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Component {...pageProps} />
        <FooterLargeWithNewsletter />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
