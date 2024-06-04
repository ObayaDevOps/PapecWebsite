'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Button,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import NextLink from 'next/link'
import papecLogo from '../../public/images/icon/People__Potential-Logo_Full_Color-1.png'
import Image from 'next/image'



const Logo = (props) => {
  return (
    <NextLink href='/#'>
        <Image src={papecLogo} width={1065/7} height={397/7}/>
  </NextLink>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('yellow.300', 'gray.900')}
      // bgGradient='linear(to-r, purple.500, whiteAlpha.300)'
      position='relative'
      bottom='0'
      // left='0'
      width='100vw'
      border={'1px'}
      borderColor="purple"
      
      >
      <Container as={Stack} maxW={'7xl'} py={12}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr  2fr' }}
          spacing={8}>
          <Stack spacing={{base: 4,md:2}}>
            <Box>
              <Logo  />
            </Box>

            <Stack direction={'row'} spacing={4}>
              <SocialButton  label={'LinkedIn'} href={'/#'}>
                <FaLinkedin />
              </SocialButton>
              <Button as='a' href='https://www.dralegawebops.com/' size='sm' colorScheme='purple' fontSize={{base:'xs',md:'xs'}}
                variant="outline"
                color='green'
                fontFamily='bodyFont'
                borderRadius='3px'
                boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')} >
              Built by DWO
             </Button>

            </Stack>
            <Box>
            <Text fontSize={'sm'} fontFamily='bodyFont' textColor='green'>© 2024 People and Potential Consultancy. All rights reserved</Text>
            </Box>

          </Stack>
          {/* <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              Contact us
            </Box>
            <Box as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack> */}

          
          <Stack align={{base:'flex-start', md:'flex-end'}} pt={{md:4}}>
            <Box>
                <Text fontSize={'lg'} fontFamily='bodyFont' textColor='green'>info@peopleandpotential.org</Text>
            </Box>
            <Box>
                <Text fontSize={'lg'} fontFamily='bodyFont' textColor='green'>+256 793 231969</Text>
            </Box>
            <Box>
                <Text fontSize={'lg'} fontFamily='bodyFont' textColor='green'>+256 787 921975</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='green'>PO. Box 27348, Kampala</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='green'>18 Millennium House Nsambya Road</Text>
            </Box>
          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  )
}