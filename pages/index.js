import Head from 'next/head';
import { Box, Icon, useColorModeValue, useBreakpointValue, chakra, Flex, Container, Heading, Stack, Text, Button, Center, ScaleFade, SimpleGrid, Img, VStack, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import LandingPageTop from '../components/landingPage/landingPageTop';
import Clients from '../components/landingPage/clients';
import CallToActionBanner from '../components/callToActionBanner';
import client from '../src/sanity/lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import NavBar from '../components/utils/navbar3.js';
import Marquee from '../components/utils/marquee.js';
import Carousel from '../components/carousel.js';
import ClientTestimonials from './past-work/client-testimonials.js';


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}



export async function getStaticProps() {
  const landingPageContentSanity = await client.fetch(`
    *[_type == "landingPage"]`);

  return {
    props: {
      landingPageContentSanity,
    },
    revalidate: 10, // In seconds
  };
}


export default function Home(props) {

  console.log('Index - landingPageContent', props)

  
  return (
    <div >
      <Head>
        <title>Home | People and Potential Consultancy</title>
        <meta name="description" content="People and Potential Consultancy" />
        <link rel="shortcut icon" href="../../../images/icon/People__Potential-Logo_Full_Color-2.png"></link>

        <meta property="og:title" content="People and Potential Consultancy" />
        <meta property="og:description" content="Professional HR Training" />
        <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
        <meta property="og:url" content="https://papec-website.vercel.app/" />
        <meta property="og:type" content="website" />
      
      </Head>

      <Box bg={'whiteAlpha.200'}>
        <EducationLanding landingPageContent={props.landingPageContentSanity} />
      </Box>

    </div>
  )
}

 function EducationLanding( props) {
  const landingPageContent = props.landingPageContent[0];

console.log('EducationHomePage - ', landingPageContent);

return (


  <Box>
      <Head>
          <title>{landingPageContent.title || 'Education Home'} | People and Potential Consultancy</title>
          <meta name="description" content={landingPageContent.description || 'People and Potential Consultancy'} />
          <link rel="shortcut icon" href="../../../images/icon/People__Potential-Logo_Full_Color-2.png"></link>

          <meta property="og:title" content={landingPageContent.title || 'People and Potential Consultancy'} />
          <meta property="og:description" content={landingPageContent.description || 'Professional HR Training'} />
          <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
          <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
          <meta property="og:url" content="https://papec-website.vercel.app/" />
          <meta property="og:type" content="website" />
      </Head>

      <NavBar />
      <Box 
          minH={{base:'200vh', md: '180vh'}}
          bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'
      > 
          <TitleSection landingPageContent={landingPageContent} />
          <Carousel images={landingPageContent.carouselImages} />
          <ThreeOffering offerings={landingPageContent.whatWeOffer} />
          <ChooseUsSection chooseUs={landingPageContent.whyChooseUs} />
          <ClientTestimonials testimonials={landingPageContent.testimonials} />
          <CallToAction cta={landingPageContent.callToAction} />
      </Box>
  </Box>
)
}

const TitleSection = ({ landingPageContent }) => {
const scaleFactor = 0.9;
const ref1 = useRef(null);
const isInView1 = useInView(ref1);

return (
  <Box py={{base: 8, md: 2}} w={{ base: 9 / 12, md: 11 / 12, xl: 9 / 12 }}
      mx="auto"
      minH={{md:'25vh', lg:'45vh'}}       
  >
      <Box py={{base:6, md: 0, lg: 0}} >
          <VStack spacing={4} as={Container} maxW={'8xl'} textAlign={'center'}>
              <HStack>
                  <Box>
                      <Heading fontSize={{base:'5xl',md:'7xl', lg:'7xl'}} bgClip="text"
                          textAlign={{base:'center'}}
                          fontWeight="extrabold"
                          letterSpacing={{ base: "normal", md: "tight" }}
                          fontFamily='bodyFont'
                          pt={{md:20, lg:20}}
                          bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                          ref={ref1}
                      >
                          {landingPageContent.heading || 'Professional Educational Training'}
                      </Heading>
                      <Flex justify={{base:'center', md: 'center', lg:'center'}}>
                          <Text 
                              fontFamily='bodyFont'
                              textAlign={{base:'center'}}
                              py={4}
                              maxW='xl' 
                              color={useColorModeValue('gray.700', 'gray.200')}
                              fontWeight={100} fontSize={{base:'md',md:'xl'}}
                          >
                              {landingPageContent.description || 'We focus on creating training systems that effectively convey your company\'s identity, then optimize for an enhanced learning experience.'}
                          </Text>
                      </Flex>
                      <Flex justify={{base:'center', md: 'center', lg:'center'}}>
                          <Button
                              border={'1px'}
                              borderColor={'purple.500'}
                              as="a"
                              href='/info/contact-enquiry'
                              colorScheme="whiteAlpha"
                              textColor={useColorModeValue('purple.800', 'gray.200')}
                              display="inline-flex"
                              fontWeight={500}
                              alignItems={"center"}
                              w={{ base: "full", sm: "auto" }}
                              mb={{ base: 2, sm: 0 }}
                              size="lg"
                              cursor="pointer"
                              fontFamily='bodyFont'
                              transition="0.3s ease-in-out"
                              _hover={{
                                  transform: 'scale(1.05)',
                              }}
                              shadow={'xl'}
                          >
                              Talk to us Today
                          </Button>
                      </Flex>
                  </Box>
              </HStack>
          </VStack>
      </Box>
  </Box>
)
}

const CourseEval = () => {
return (
  ""
)
}

const CallToAction = ({ cta }) => {
return (
  <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
  >
      <Box>
          <Box
              w={{ md: "3xl", lg: "5xl" }}
              mx="auto"
              py={{ base: 12, lg: 16 }}
              px={{ base: 4, lg: 8 }}
              display={{ lg: "flex" }}
              alignItems={{ lg: "center" }}
              justifyContent={{ lg: "space-between" }}
          >
              <chakra.h2
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color="purple.900"
                  fontFamily='bodyFont'
                  textAlign='left'
                  _dark={{ color: "gray.100" }}
              >
                  <chakra.span display="block">
                      Don&apos;t Leave it to Chance
                  </chakra.span>
                  <chakra.span
                      display="block"
                      bgClip="text"
                      bgGradient="linear(to-r, purple.900, purple.300)"
                      pr={10}
                  >
                      Take your School to the Next Level!
                  </chakra.span>
              </chakra.h2>
              <Stack
                  direction={{ base: "column" }}
                  mt={{ base: 8, lg: 0 }}
                  flexShrink={{ lg: 0 }}
              >
                  <Button
                      as="a"
                      href="/info/contact-enquiry"
                      colorScheme="whiteAlpha"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      shadow={'lg'}
                      border={'1px'}
                      rounded={'6px'}
                      borderColor='purple'
                      textColor={useColorModeValue('purple.700', 'white')}
                      w={{
                          base: "full",
                          sm: "auto",
                      }}
                      mb={{
                          base: 2,
                          sm: 0,
                      }}
                      size="lg"
                      cursor="pointer"
                      fontFamily='bodyFont'
                  >
                      Talk to us Today
                      <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                          <path
                              fillRule="evenodd"
                              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                              clipRule="evenodd"
                          />
                      </Icon>
                  </Button>
              </Stack>
          </Box>
      </Box>
  </Flex>
)
}

const ChooseUsSection = ({ chooseUs }) => {
return (
  <Flex
      my={{base: 20, md: 20}}
      p={{base: 6, md: 20}}
      w="auto"
      justifyContent="center"
      alignItems="center"
  >
      <Box
          py={12}
          bg="white"
          _dark={{
              bg: "gray.800",
          }}
          rounded="xl"
          border={'1px'}
          borderColor={'purple.500'}
          borderRadius='6px'
      >
          <Box
              maxW="7xl"
              mx="auto"
              px={{
                  base: 4,
                  lg: 8,
              }}
          >
              <Box
                  textAlign={{
                      lg: "center",
                  }}
              >
                  <chakra.h2
                      _light={{
                          color: "purple.600",
                      }}
                      fontWeight="semibold"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontFamily='bodyFont'
                  >
                      Why Choose Us ?
                  </chakra.h2>
                  <chakra.p
                      mt={2}
                      fontSize={{
                          base: "3xl",
                          sm: "4xl",
                      }}
                      lineHeight="8"
                      fontWeight="extrabold"
                      letterSpacing="tight"
                      _light={{
                          color: "purple.900",
                      }}
                      fontFamily='bodyFont'
                  >
                      {chooseUs?.title || 'High achievers never stop striving'}
                  </chakra.p>
                  <chakra.p
                      mt={4}
                      maxW="2xl"
                      fontSize="xl"
                      mx={{
                          lg: "auto",
                      }}
                      color="gray.700"
                      _dark={{
                          color: "gray.400",
                      }}
                      fontFamily='bodyFont'
                  >
                      {chooseUs?.description || 'People & Potential Consultancy helps schools and organizations like yours identify areas for growth and implement systems for continuous improvement.'}
                  </chakra.p>
                  <chakra.p
                      mt={4}
                      maxW="2xl"
                      fontSize="xl"
                      mx={{
                          lg: "auto",
                      }}
                      color="gray.700"
                      _dark={{
                          color: "gray.400",
                      }}
                      fontFamily='bodyFont'
                  >
                      {chooseUs?.additionalDescription || 'We build frameworks for progress tracking, performance management, and creating thriving learning environments. Let&apos;s help every child reach their full potential.'}
                  </chakra.p>
              </Box>
          </Box>
      </Box>
  </Flex>
)
}

const ClientsMarquee = () => {
return (
  <Box
      py={{base: 8, md: 2}}  w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
      mx="auto"
      rounded='md'
  >
      <VStack spacing={2} as={Container} maxW={'full'} textAlign={'center'}>
          <Heading fontSize={{base:'3xl',md:'2xl', lg:'2xl'}} bgClip="text"
              textColor="purple.800"
              fontWeight="extrabold"
              fontFamily='bodyFont'
              letterSpacing={{ base: "normal", md: "tight" }}
              pt={{lg:32}}
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
)
}

const Feature = (props) => {
return (
  <Center py={{lg:'2vh'}}>
      <Box 
          w={{base:"xs", md: "sm"}}
          h={{base:"sm", md: "md"}}
          rounded={'md'}
          my={5}
          pt={{base:12, md: 12}}  
          pb={{base:12, md: 20}}
      >
          <Box h={'200px'} p={4} border={'1px'} rounded='xl' borderColor="purple.200">
              <Img
                  src={
                      props.img
                  }
                  rounded={'xl'}
                  objectFit="cover"
                  h="full"
                  w="full"
                  alt={'People and Potential Consultancy Landing Page Image'}
              />
          </Box>
          <chakra.h3
              my={3}
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily='bodyFont'
              fontSize={{base: '2xl', md:'2xl'}}
              _light={{ color: "white" }}
          >
              {props.title}
          </chakra.h3>
          <chakra.p
              lineHeight="tall"
              fontFamily='bodyFont'
              fontSize={{base: 'md', md:'lg'}}
              color="gray.100"
              _dark={{ color: "gray.400" }}
          >
              {props.children}
          </chakra.p>
      </Box>
  </Center>
);
};

const ThreeOffering = ({ offerings }) => {

console.log('offerings', offerings)
return (
  <Box mt={20} pt={16} bg="purple.500" rounded='xl'>
      <chakra.h2
          mt={2}
          fontSize={{
              base: "5xl",
              lg: "6xl"
          }}
          fontWeight="extrabold"
          _light={{
              color: "whiteAlpha.900",
          }}
          fontFamily='bodyFont'
          textAlign='center'
      >
          What We Offer
      </chakra.h2>

      <Flex
          bg="purple.500"
          _dark={{ bg: "#3e3e3e" }}
          p={{base:4, md: 12, lg: 20}}
          w="auto"
          justifyContent="center"
          alignItems="center"
          rounded='xl'
      >
          <SimpleGrid
              columns={{ base: 1, md: 1, lg: 3 }}
              spacing={20}
              px={{ base: 4, md: 28, lg: 16, xl: 24 }}
              pt={{base:2, md: 32, lg: 16}}
              pb={{base:20, md: 32, lg: 20}}
              mx="auto"
              bg={{base: "purple.500", md: "purple.400"}}
              _dark={{ bg: "gray.800" }}
              shadow={{base: "none", md: "xl"}}
              rounded='xl'
          >
              {offerings && offerings.map((offering, index) => (
                  <Feature
                      key={index}
                      title={offering.title}
                      img={urlFor (offering.image?.asset?._ref).url()}
                  >
                      {offering.description}
                  </Feature>
              ))}
          </SimpleGrid>
      </Flex>
  </Box>
)
}

