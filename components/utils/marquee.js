'use client'

import React from "react";
import Image from 'next/image'
// import MyComponent from "../components/MyComponent";
import {

  Text,
  Box

} from '@chakra-ui/react'
import Marquee from "react-fast-marquee";

const baseSpacing = 4;
const mdSpacing = 16; 


const MarqueeComponent = () => (
  <Marquee
  pauseOnClick
  speed={30}
  >
        <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>
          <Box mx={{base: baseSpacing, md: mdSpacing}}>
            <Image 
            src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713966677/pexels-divinetechygirl-1181396_dfhvy7.jpg'}
            width={150}
            height={150}
            />
          </Box>


          

  </Marquee>
);

export default MarqueeComponent;