import { Box, useColorModeValue, chakra, Flex, Container, Heading, Text, Button, Center, SimpleGrid, Img, VStack, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import client from '../src/sanity/lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import NavBar from '../components/utils/navbar3.js';
import Carousel from '../components/carousel.js';
import ClientTestimonials from './past-work/client-testimonials.js';
import SeoHead from '../components/utils/seoHead.js';
import CallToActionBanner from '../components/callToActionBanner.js';


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
  return (
    <div>
      <SeoHead title="Home" />
      <Box bg={'whiteAlpha.200'}>
        <EducationLanding landingPageContent={props.landingPageContentSanity} />
      </Box>
    </div>
  )
}

function EducationLanding(props) {
  const landingPageContent = props.landingPageContent[0];

return (


  <Box>
      <SeoHead title={landingPageContent.title || 'Education Home'} ogDescription={landingPageContent.description || 'Professional HR Training'} />

      <NavBar />
      <Box bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'>
          <TitleSection landingPageContent={landingPageContent} />
          <Carousel images={landingPageContent.carouselImages} />
          <ThreeOffering offerings={landingPageContent.whatWeOffer} />
          <ChooseUsSection chooseUs={landingPageContent.whyChooseUs} />
          <ClientTestimonials testimonials={landingPageContent.testimonials} />
          <CallToActionBanner />
      </Box>
  </Box>
)
}

const TitleSection = ({ landingPageContent }) => {
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
                              as={NextLink}
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
                      Why Choose Us?
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

