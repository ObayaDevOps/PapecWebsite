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
import NavBarPlain from '../utils/navbarPlain'


export default function CallToActionWithIllustration() {
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
    <Box>
      <NavBarPlain />
      


    <Box 
  // minH={{base:'200vh', md: '100vh'}}
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

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{base: 10, md: 2}}>

          <CardBorder title='Educational Training' subtitle='Teacher training and School development' link='/education/education-home' img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713532448/PP-Website-Banner-9_tviyet.jpg'}/>
          <CardBorder title='Corporate Training' subtitle='Workforce upskilling' link='/corporate/corporate-home'  img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}/>
          <CardBorder title='Health Training' subtitle='Optical and Medical Training Platform'  img={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966659/pexels-shvetsa-3846022_qvifqt.jpg'}/>
    
        </SimpleGrid>

      </Box>


    </Box>
    </Box>
  )
}


