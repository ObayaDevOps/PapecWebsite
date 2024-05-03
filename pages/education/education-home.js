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
  HStack,
  useBreakpointValue
} from '@chakra-ui/react'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CardBorder from '../../components/utils/cards/cardBorder'
import img from '../../public/images/PP-Website-Banner-9.jpeg'
import Image from 'next/image'
import Head from 'next/head'


import NavBar from '../../components/utils/navbar3'

import Marquee from "../../components/utils/marquee"

import Illustration from '../../public/images/illustrations/undraw_file_analysis_8k9b.svg';



export default function CallToActionWithIllustration() {
  const scaleFactor = 0.9;

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  return (
      <Box>
        <Head>
            <title>Education Home | People and Potential Consultancy</title>
            <meta name="description" content="People and Potential Consultancy" />
            <link rel="shortcut icon" href="../../../images/icon/People__Potential-Logo_Full_Color-2.png"></link>

            <meta property="og:title" content="People and Potential Consultancy" />
            <meta property="og:description" content="Professional HR Training" />
            <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
            <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
            <meta property="og:url" content="https://papec-website.vercel.app/" />
            <meta property="og:type" content="website" />
        
        </Head>


          <NavBar />
        <Box minH={{base:'200vh', md: '180vh'}}
        // bgGradient='linear(to-r, green.500, yellow.300)'
        // bgGradient='linear(to-br, purple.100, whiteAlpha.300)'
            // background="rgba(192,192,192,0.12)"
            // bgGradient="radial(whiteAlpha.300,green.300,whiteAlpha.100)"
                // backgroundColor="#e5e5f7"
                bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'
            > 

            <Box py={{base: 8, md: 2}}  ref={ref1}   w={{ base: 9 / 12, md: 11 / 12, xl: 9 / 12 }}
            mx="auto"
            
            >

                <Box py={{base:6, md: 0}}
                >
                <VStack spacing={4} as={Container} maxW={'8xl'} textAlign={'center'}>
                    <HStack>
                        <Box>
                            <Heading fontSize={{base:'5xl',md:'7xl', lg:'7xl'}} bgClip="text"
                                // bgGradient="linear(to-br, blackAlpha.900, #74449c)"
                                // bgGradient="linear(to-br, green.500, blackAlpha.800 )"

                                // textColor="#638d3d"
                                textColor="purple.900"
                                textAlign={{base:'center', lg:'left'}}
                                fontWeight="extrabold"
                                letterSpacing={{ base: "normal", md: "tight" }}

                                fontFamily='bodyFont'
                                //#74449c
                                pt={{lg:20}}
                                >
                                    Professional Educational Training
                            </Heading>
                            <Text fontFamily='bodyFont'
                                                        textAlign={{base:'center', lg:'left'}}
                                                        pb={2} maxW='xl' color={useColorModeValue('gray.700', 'gray.200')}  fontWeight={100} fontSize={{base:'md',md:'xl'}}>
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
                        </Box>

                        <Box
                        border={'1px'}
                        borderColor={'purple'}
                        borderRadius='6px'
                        my={12}
                        p={20}
                        bg={'white'}
                        display={{base: 'none', lg:'flex'}}
                        >
                            <Image
                            src={Illustration}
                            width={600}
                            height={600}
                            
                            />
                        </Box>
                    </HStack>

                </VStack>
                </Box>

            </Box>


            <Box
                py={{base: 8, md: 2}}  ref={ref1}   w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                // bgGradient='linear(to-br, purple.300, white)'
                rounded='md'
                // border={'1px'}
                // borderColor={'purple.200'}

            >
                <VStack spacing={2} as={Container} maxW={'full'} textAlign={'center'}>
                    <Heading fontSize={{base:'3xl',md:'4xl', lg:'xl'}} bgClip="text"
                        bgGradient="linear(to-br, blackAlpha.900, #74449c)"
                        // textColor="white"
                        fontWeight="extrabold"
                        fontFamily='bodyFont'
                        letterSpacing={{ base: "normal", md: "tight" }}
                        pt={{lg:16}}
                        >
                            Our Clients
                    </Heading>

                    <Text 
                        textAlign='center'  
                        fontFamily='bodyFont' 
                        maxW={{base:'md', md:'xl'}} 
                        color={useColorModeValue('gray.700', 'gray.200')}  
                        fontWeight={100} 
                        fontSize={{base:'sm',md:'md'}}
                        pb={3}
                    >
                    Trusted by Uganda&apos;s best Management Teams
                    </Text>

                
                        <Marquee />
                    
                </VStack>

                


            </Box>
        </Box>
    </Box>
  )
}

