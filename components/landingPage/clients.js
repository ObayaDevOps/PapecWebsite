'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Box,
  IconProps,
  useColorModeValue,
  ScaleFade,
  SimpleGrid,
  Img,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Card from '../utils/cards/card';
import CardBorder from '../utils/cards/cardBorder'
import img from '../../public/images/PP-Website-Banner-9.jpeg'
import Image from 'next/image'


export default function CallToActionWithIllustration() {
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
  <Box minH={{base:'200vh', md: '180vh'}}
// bgGradient='linear(to-r, green.500, yellow.300)'
// bgGradient='linear(to-br, purple.100, whiteAlpha.300)'
    // background="rgba(192,192,192,0.12)"
    // bgGradient="radial(whiteAlpha.300,green.300,whiteAlpha.100)"
        // backgroundColor="#e5e5f7"
        bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'
    > 


    {/* <Blur
        position={{base: 'none', md: 'absolute'}}
        top={'30vh'}
        left={'40vw'}
        style={{ filter: 'blur(80px)' }}
      /> */}

      <Box py={{base: 8, md: 2}}  ref={ref1}   w={{ base: 9 / 12, md: 11 / 12, xl: 9 / 12 }}
      mx="auto"
      
      >

        <Box py={{base:6, md: 0}}
        >
          <VStack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
              <Heading fontSize={{base:'5xl',md:'7xl', lg:'7xl'}} bgClip="text"
                  bgGradient="linear(to-br, blackAlpha.900, #74449c)"
                  // bgGradient="linear(to-br, green.500, blackAlpha.800 )"

                  // textColor="#638d3d"
                  fontWeight="extrabold"
                  letterSpacing={{ base: "normal", md: "tight" }}

                  // fontFamily='headingFont'
                  //#74449c
                  pt={{lg:20}}
                  >
                    Professional HR Training
              </Heading>

            <Text fontFamily='bodyFont'
              textAlign='center' pb={2} maxW='xl' color={useColorModeValue('gray.700', 'gray.200')}  fontWeight={100} fontSize={{base:'md',md:'xl'}}>
            We focus on creating training systems that effectively convey your company&apos;s identity, then optimize for an enhanced learning experience.
            </Text>
            <Button
              border={'1px'}
              borderColor={'purple'}
              boxShadow={useColorModeValue('6px 6px 0 gray', '6px 6px 0 cyan')}

              as="a"
              colorScheme="whiteAlpha"
              textColor={useColorModeValue('purple.800', 'gray.200')}
              display="inline-flex"
              fontWeight={500}
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              fontFamily='bodyFont'
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            // shadow={'xl'}
            >
              Book a Consultation Now
            </Button>
          </VStack>
        </Box>


        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{base: 10, md: 2}}>
          
          {/* <Card title='Education' subtitle='Teacher training and School development' />
          <Card title='Corporate' subtitle='Ages 3-18' />
          <Card title='Health' subtitle='Ages 3-18' /> */}

          <CardBorder title='Education' subtitle='Teacher training and School development' img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713532448/PP-Website-Banner-9_tviyet.jpg'}/>
          <CardBorder title='Corporate' subtitle='Workforce upskilling' img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713532448/PP-Website-Banner-9_tviyet.jpg'}/>
          <CardBorder title='Health' subtitle='Optical and Medical Training Platform' img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713532448/PP-Website-Banner-9_tviyet.jpg'}/>
    
        </SimpleGrid>

      </Box>


      <Box
        py={{base: 8, md: 2}}  ref={ref1}   w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        bgGradient='linear(to-br, purple.300, white)'
        rounded='md'
        border={'1px'}
        borderColor={'purple.200'}

      >
          <VStack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
              <Heading fontSize={{base:'3xl',md:'4xl', lg:'5xl'}} bgClip="text"
                  bgGradient="linear(to-br, blackAlpha.900, #74449c)"
                  // textColor="white"
                  fontWeight="extrabold"
                  fontFamily='bodyFont'
                  letterSpacing={{ base: "normal", md: "tight" }}
                  pt={{lg:16}}
                  >
                    Our Clients
              </Heading>

            <Text textAlign='center'  fontFamily='bodyFont' pb={8} maxW='xl' color={useColorModeValue('gray.700', 'gray.200')}  fontWeight={100} fontSize={{base:'md',md:'md'}}>
              Trusted by Uganda&apos;s best Management Teams
            </Text>

            <SimpleGrid columns={[1,3]} spacing={10}>
              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

              <Box h={'200px'} >
                <Image
                  src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713790964/1649744796-1649038823-aga_khan_education_services_2-1_y4crvg.png"
                  width={1630}
                  height={725}
                  alt="Picture of the author"
                />
              </Box>

            </SimpleGrid>

          </VStack>


      </Box>
    </Box>
  )
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '25vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      alignContent={'center'}
      height={useBreakpointValue({  lg: '65vh' })}
      viewBox="-30 0 928 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>

      <circle cx="811" cy="200" r="811" fill="#CF9FFF" />
      {/* <circle cx="230.5" cy="58.5" r="401.5" fill="#FFC300" /> */}
      <circle cx="230.5" cy="58.5" r="301.5" fill="#DAF7A6 " />



      
      {/* <circle cx="244" cy="106" r="139" fill="#68D391" />
      <circle cy="291" r="139" fill="#68D391" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#68D391" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#68D391" />

      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#48BB78" />
      <circle cx="71" cy="61" r="111" fill="#48BB78" />
      <circle cx="244" cy="106" r="139" fill="#48BB78" /> */}

      {/* <circle cy="291" r="139" fill="#22543D" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#22543D" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#22543D" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#22543D" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#22543D" /> */}
    </Icon>
  );
};

