import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'

import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'

import Head from 'next/head';
import Image from 'next/image'

import NavBar from '../components/utils/navbar3'

import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export async function getStaticProps() {
  const aboutUsConsultantProfilesPageContent = await client.fetch(`
    *[_type == "aboutUsConsultantProfiles"][0]
  `);

  return {
    props: {
      aboutUsConsultantProfilesPageContent,
    },
    revalidate: 10, // In seconds
  };
}

export default function ConsultantPageComponent({ aboutUsConsultantProfilesPageContent }) {
  const { title, heading, introduction, consultants, callToAction } = aboutUsConsultantProfilesPageContent;

  return (
    <Box>
      <Head>
        <title>{title} | People and Potential Consultancy</title>
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
            overflow={'hidden'}
          >
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
              <chakra.h3
                fontWeight={'bold'}
                fontSize={20}
                textTransform={'uppercase'}
                color={'purple.400'}
                fontFamily='bodyFont'
              >
                Profiles
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
                fontFamily={'bodyFont'}
              >
                <Text
                  display={{base: "block"}}
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" 
                  _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  py={6}
                >
                  {heading}
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
                {introduction}
              </chakra.h2>
            </Box>

            {consultants.map((consultant, index) => (
              <ConsultantProfileContent key={consultant._key} consultant={consultant} />
            ))}

            {/* <MultiSolutionsContent /> */}

            <CallToAction callToAction={callToAction} />

          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

const ConsultantProfileContent = ({ consultant }) => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='xl'
      borderColor='purple.500'
      shadow='xl'
      padding={8}
      mx={{md: 10,lg:20}}
      background="whiteAlpha.700"
      my={{base: 16,md:20, lg: 20}}
    >
      <Text
        bgClip="text"
        bgGradient='linear(to-r, blackAlpha.800, purple.500)'
        fontWeight="extrabold"
        textAlign='left'
        fontSize={{ base: "2xl",md: "5xl",}}
        p={{base: 4, lg:4}}
        fontFamily='bodyFont'
      >
        {consultant.name}
      </Text>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 1}}>
          <Box mt={2} mb={{lg:20}} p={4}>
            <SimpleGrid columns={1} spacing={10}>
              <Box>
                <Text
                  textAlign='left'
                  fontSize={{ base: "sm",md: "lg",}}
                  fontFamily='bodyFont'
                  mb={2}
                >
                  {consultant.bio}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const MultiSolutionsContent = () => {
  return (
    <Box
      borderWidth='1px'
      borderRadius='xl'
      borderColor='purple.500'
      shadow='xl'
      padding={8}
      mx={{md: 10,lg:20}}
      background="whiteAlpha.700"
      my={{base: 16,md:20, lg: 20}}
    >
      <Text
        bgClip="text"
        bgGradient='linear(to-r, blackAlpha.800, purple.500)'
        fontWeight="extrabold"
        textAlign='left'
        fontSize={{ base: "2xl",md: "5xl",}}
        p={{base: 4, lg:4}}
        fontFamily='bodyFont'
      >
        Skills
      </Text>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 2}}>
          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1715259596/PP1_w92zkp.jpg'}
              width={570}
              height={320}
            />
          </Box>

          <Box mt={2} mb={{lg:20}}>
            <SimpleGrid columns={1} spacing={6}>
              <SolutionsListItem text="She holds over 30 years’ experience in education and development" />
              <SolutionsListItem text="She holds a Master Degree in International Education Management" />
              <SolutionsListItem text="Audrey’s work in developing leadership and raising academic standards in schools" />
              <SolutionsListItem text="She has a strong focus on systems thinking and embedding change." />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const SolutionsListItem = (props) => {
  return (
    <Box
      maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
      padding={3}
      paddingRight={{base:8,md:12}}
      background="whiteAlpha.800"
    >
      <HStack align={'flex-start'}>
        <Box color={'green.400'} px={2}>
          <Icon as={CheckIcon} />
        </Box>
        <VStack align={'start'}>
          <Text color={'black'} fontWeight={200} fontSize={'xl'} textAlign='left' fontFamily='bodyFont'>{props.text}</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

const CallToAction = ({ callToAction }) => {
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
              {callToAction.title}
            </chakra.span>
            <chakra.span
              display="block"
              bgClip="text"
              bgGradient="linear(to-r, purple.900, purple.300)"
              pr={10}
            >
              {callToAction.subtitle}
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
