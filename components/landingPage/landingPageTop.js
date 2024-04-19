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
  useBreakpointValue
} from '@chakra-ui/react'

import Lottie from "lottie-react";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Card from '../utils/cards/card';
import CardBorder from '../utils/cards/cardBorder'
import img from '../../public/images/PP-Website-Banner-9.jpeg'


export default function CallToActionWithIllustration() {
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
<Box minH={{base:'320vh', md: '150vh'}}
// bgGradient='linear(to-r, green.500, yellow.300)'
// bgGradient='linear(to-r, purple.500, whiteAlpha.300)'
background="rgba(192,192,192,0.2)"


// bgGradient='linear(to-r, green.400, yellow.200, purple.500)'
>     
    <Blur
        position={'fixed'}
        top={'30vh'}
        left={'40vw'}
        style={{ filter: 'blur(80px)' }}
      />

      <Box py={{base: 8, md: 8}}  ref={ref1}   w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
      mx="auto">

        <Box py={{base:6, md: 0}}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
              <Heading fontSize={{base:'5xl',md:'8xl'}} bgClip="text"
                  bgGradient="linear(to-br, green.900, #74449c)"
                  // textColor="white"
                  fontWeight="extrabold"
                  // fontFamily='serif'
                  //#74449c
                  >
                    Professional HR Training
              </Heading>

            <Text color={useColorModeValue('gray.700', 'gray.200')}  fontWeight={100} fontSize={{base:'lg',md:'lg'}}>
            A modern company is defined by the quality of it&apos;s Human Resources.
            We focus on creating training systems that effectively convey your company&apos;s identity, then optimize for an enhanced learning experience.
            </Text>
          </Stack>
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

