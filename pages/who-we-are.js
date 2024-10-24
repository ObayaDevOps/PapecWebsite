import Head from 'next/head'
import {
  Box, chakra, Container, Text, Flex, VStack, Button, Heading, SimpleGrid, Stack, Icon, useColorModeValue
} from '@chakra-ui/react'
import NavBar from '../components/utils/navbar3'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function WhoWeArePageComponent({ aboutUsWhoWeArePageContent }) {
  const content = aboutUsWhoWeArePageContent[0]; // Assuming there's only one item in the array

  return (
    <Box>
      <Head>
        <title>{content.title} | People and Potential Consultancy</title>
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

      <Box py={6} bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'>
        <Container 
          maxW={{base:'1xl',md:'85vw'}} 
          py={6} 
          minHeight={{md:'110vh'}}   
          bg='whiteAlpha.600'
          rounded='3xl' 
          shadow='2xl'
          border={'1px'}
          borderColor={'purple.600'}    
        >
          <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
              <chakra.h3
                fontWeight={'bold'}
                fontSize={20}
                textTransform={'uppercase'}
                color={'purple.400'}
                fontFamily='bodyFont'
              >
                About Us
              </chakra.h3>
              <Heading
                as={'h1'}
                mb={{base: 2, md: 10}}
                fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
                minHeight={'1vh'}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{base: "normal",md: "tight" }}
                color="purple.900"
                textAlign='center'
                fontFamily={'bodyFont'}>
                <Text
                  display={{base: "block",
                              // lg: "inline",
                          }}
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  py={6}>
                  Who We Are
                </Text>
              </Heading>
              <chakra.h2
                margin={'auto'}
                width={'100%'}
                fontWeight={'medium'}
                fontSize={'lg'}
                color={useColorModeValue('gray.500', 'gray.400')}
                mt={{base:-2,md: -8, lg:-8}}
                fontFamily={'bodyFont'}
              >
                People and Potential Consultancy was established in 2015 to equip leaders and organizations with the systems and practical tools needed to embed change and take their organization to the next level of performance.            </chakra.h2>
            </Box>

            <VisionPurposeContent content={content} />

            <FocusSection content={content} />

            <MultiSolutionsContent content={content} />

            <CallToAction content={content.callToAction} />

          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

const VisionPurposeContent = ({ content }) => {
  const imageUrl = urlFor(content.visionAndPurposeImage).url()
  const { width, height } = getImageDimensions(content.visionAndPurposeImage)

  return (
    <Box
      borderWidth='1px'
      borderRadius='xl'
      borderColor='purple.500'
      shadow='xl'
      padding={8}
      mx={{md: 10, lg:20}}
      background="whiteAlpha.700"
      my={{base: 16, md:20, lg: 20}}
    >
      <Text
        bgClip="text"
        bgGradient='linear(to-r, blackAlpha.800, purple.500)'
        fontWeight="extrabold"
        textAlign='left'
        fontSize={{ base: "2xl", md: "5xl" }}
        p={{base: 4, lg:4}}
        fontFamily='bodyFont'
      >
        Vision and Purpose
      </Text>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 2}}>
          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={imageUrl}
              width={width}
              height={height}
              alt="Vision and Purpose"
              layout="responsive"
            />
          </Box>

          <Box mt={2} mb={{lg:20}}>
            <SimpleGrid columns={1} spacing={10}>
              <Box>
                <Text
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                  fontWeight="extrabold"
                  textAlign='left'
                  fontSize={{ base: "xl",md: "3xl",}}
                  fontFamily='bodyFont'
                >
                  Mission
                </Text>
                <Text
                  textAlign='left'
                  fontSize={{ base: "sm",md: "lg",}}
                  fontFamily='bodyFont'
                >
                  Providing high calibre, inspirational expertise to schools and education organisations, equipping educators to take their organisation to the next level of performance – improving learning for every child.
                </Text>
              </Box>  

              <Box>
                <Text
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                  fontWeight="extrabold"
                  textAlign='left'
                  fontSize={{ base: "xl",md: "3xl",}}
                  // p={{base: 4, lg:4}}
                  fontFamily='bodyFont'
                >
                  Vision
                </Text>
                <Text
                  textAlign='left'
                  fontSize={{ base: "sm",md: "lg",}}
                  // p={{base: 4, lg:4}}
                  fontFamily='bodyFont'
                >
                  Transformed thinking, raised standards, creative systems.
                </Text>
              </Box>              
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>        
  )
}

const MultiSolutionsContent = ({ content }) => {
  const imageUrl = urlFor(content.multidisciplinaryImage).url()
  const { width, height } = getImageDimensions(content.multidisciplinaryImage)

  return (
    <Box
      borderWidth='1px'
      borderRadius='xl'
      borderColor='purple.500'
      shadow='xl'
      padding={8}
      mx={{md: 10, lg:20}}
      background="whiteAlpha.700"
      my={{base: 16, md:20, lg: 20}}
    >
      <Text
        bgClip="text"
        bgGradient='linear(to-r, blackAlpha.800, purple.500)'
        fontWeight="extrabold"
        textAlign='left'
        fontSize={{ base: "2xl", md: "5xl" }}
        p={{base: 4, lg:4}}
        fontFamily='bodyFont'
      >
        Multidisciplinary Solutions
      </Text>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 2}}>
          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={imageUrl}
              width={width}
              height={height}
              alt="Multidisciplinary Solutions"
              layout="responsive"
            />
          </Box>

          <Box mt={2} mb={{lg:20}}>
            <SimpleGrid columns={1} spacing={6}>
              {content.solutions.map((solution, index) => (
                <SolutionsListItem key={index} text={solution} />
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const FocusSection = ({ content }) => {
  return (
    <Flex
      // bg="#edf3f8"
      // _dark={{
      //   bg: "#3e3e3e",
      my={{base: 20, md: 2}}
  
      p={{base: 6, md: 22}}
      maxW="8xl"
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
      // }}
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
            {/* <chakra.h2
              _light={{
                color: "purple.600",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              fontFamily='bodyFont'
  
            >
              Why Choose Us ?
            </chakra.h2> */}
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
              Our Focus
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
                People and Potential focuses on creating and strengthening effective systems; developing leadership and training.
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
                Consultants hold international and national expertise, enabling clients to access advice relevant to their context, which is informed by international best practice and is also within physical reach.
            </chakra.p>
          </Box>
          </Box>
          </Box>
    </Flex>
  
  )
}

const SolutionsListItem = ({ text }) => {
  return (
    <Flex align="center">
      <Icon
        boxSize={4}
        mr={2}
        color="purple.500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </Icon>
      <Text fontFamily='bodyFont'>{text}</Text>
    </Flex>
  )
}

const CallToAction = ({ content }) => {
  return (
    <Flex
    // bg="#edf3f8"
    // _dark={{ bg: "#3e3e3e" }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    {/* <Box bg="gray.50" _dark={{ bg: "gray.800" }}> */}
    <Box>
      <Box
        // maxW={{md: '85vw', lg: '8xl'}}
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
            // color="brand.600"
            // _dark={{ color: "gray.500" }}
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

export async function getStaticProps() {
  const aboutUsWhoWeArePageContent = await client.fetch(`
    *[_type == "aboutUsWhoWeAre"]
  `);

  return {
    props: {
      aboutUsWhoWeArePageContent,
    },
    revalidate: 10, // In seconds
  };
}
