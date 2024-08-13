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
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import NextLink from 'next/link'
import papecLogo from '../../public/images/icon/People__Potential-Logo_Full_Color-1.png'
import Image from 'next/image'



const Logo = (props) => {
  return (
    <NextLink href='/#'>
        <Image src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718006910/Untitled_design_6_tv0jdx.png'} 
        width={434/2} height={181/2}/>
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
      bg={useColorModeValue('purple.100', 'whiteAlpha.100')}
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
        bg: useColorModeValue('purple.400', 'whiteAlpha.200'),
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
      bg={useColorModeValue('purple.600', 'gray.900')}
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
                <FaLinkedinIn />
              </SocialButton>
              <Button as='a' href='https://www.dralegawebops.com/' size='sm' colorScheme='purple' fontSize={{base:'xs',md:'xs'}}
                variant="outline"
                color='white'
                fontFamily='bodyFont'
                borderRadius='3px'
                boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')} >
              Built by DWO
             </Button>

            </Stack>
            <Box>
            <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>© 2024 People and Potential Consultancy. All rights reserved</Text>
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
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>info@peopleandpotential.org</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>+256 793 231969</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>+256 787 921975</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>PO. Box 27348, Kampala</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>18 Millennium House Nsambya Road</Text>
            </Box>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg:3 }} spacing={{base: 10, md: 10}}>


          <Stack  align={{base:'flex-start', md:'flex-start'}} >
            <Box>
                <Text fontWeight={800} fontSize={'lg'} fontFamily='bodyFont' textColor='white'>Site Map</Text>
            </Box>
            <Box as='a' href='/#'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Home</Text>
            </Box>
            <Box >
                <Text fontSize={'sm'}  fontWeight={800} fontFamily='bodyFont' textColor='white'>About Us</Text>
            </Box>
            <Box  as='a' href='/education/about/who-we-are'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Who We Are</Text>
            </Box>
            <Box as='a' href='/education/about/why-choose-us'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Why Choose Us</Text>
            </Box>
            <Box as='a' href='/education/about/consultant-profile'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Consultant Profiles</Text>
                
            </Box>
            </Stack>
            <Stack pt={{md:4}}>
            <Box>
                <Text fontSize={'sm'}  fontWeight={800} fontFamily='bodyFont' textColor='white'>Services</Text>
            </Box>
            <Box as='a' href='/education/services/school-startup'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>School Start Up</Text>
            </Box>
            <Box as='a' href='/education/services/school-development'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>School Development</Text>
            </Box>
            <Box>
                <Text fontSize={'sm'}  fontWeight={800} fontFamily='bodyFont' textColor='white'>Courses</Text>
            </Box>
            <Box as='a' href='/education/courses/course-list'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Course List</Text>
            </Box>
            <Box as='a' href='/education/courses/course-booking-form'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Course Booking Form</Text>
            </Box>
            </Stack>
            <Stack pt={4}>
            <Box>
                <Text fontSize={'sm'}  fontWeight={800} fontFamily='bodyFont' textColor='white'>Contact</Text>
            </Box>
            <Box as='a' href='/info/contact-enquiry'>
                <Text fontSize={'sm'} fontFamily='bodyFont' textColor='white'>Contact Form</Text>
            </Box>
            

          </Stack>
          </SimpleGrid>
          


        </SimpleGrid>
      </Container>
    </Box>
  )
}