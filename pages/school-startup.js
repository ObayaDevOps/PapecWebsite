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

import Image from 'next/image'

import NavBar from '../components/utils/navbar3'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageShell from '../components/utils/pageShell'

import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export async function getStaticProps() {
  const servicesSchoolStartUpPageContent = await client.fetch(`
    *[_type == "servicesSchoolStartUp"][0]
  `);

  return {
    props: {
      servicesSchoolStartUpPageContent,
    },
    revalidate: 10, // In seconds
  };
}

export default function SchoolStartUpPageComponent({ servicesSchoolStartUpPageContent }) {
  return (
    <Box>
      <SeoHead title={servicesSchoolStartUpPageContent.title} />

      <NavBar />

      <PageShell>
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
                Services
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
                  display={{base: "block"}}
                  w="full"
                  bgClip="text"
                  bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                  fontWeight="extrabold"
                  transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                  py={6}>
                  {servicesSchoolStartUpPageContent.heading}
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
                {servicesSchoolStartUpPageContent.introduction}
              </chakra.h2>
            </Box>

            <VisionPurposeContent content={servicesSchoolStartUpPageContent} />

            <MultiSolutionsContent content={servicesSchoolStartUpPageContent} />

            <CallToActionBanner title={servicesSchoolStartUpPageContent.callToAction?.title} subtitle={servicesSchoolStartUpPageContent.callToAction?.subtitle} />

          </Flex>
      </PageShell>
    </Box>
  )
}

const VisionPurposeContent = ({ content }) => {
  const { width, height } = getImageDimensions(content.image1)
  
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
      <SimpleGrid columns={{base: 1, md:1, lg: 2}}  >
        <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
          <Image
            src={urlFor(content.image1).url()}
            width={width}
            height={height}
            alt="School Start-Up Image"
          />
        </Box>

        <Box  mt={2} mb={{lg:20}} >
          <SimpleGrid columns={1} spacing={10}>
            <Box>
              <Text
                textAlign='left'
                fontSize={{ base: "sm",md: "lg",}}
                fontFamily='bodyFont'
                mt={2}
              >
                {content.paragraph1}
              </Text>
            
              <Text
                textAlign='left'
                fontSize={{ base: "sm",md: "lg",}}
                fontFamily='bodyFont'
                mt={2}
              >
                {content.paragraph2}
              </Text>
            </Box>  
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>        
  )
}

const MultiSolutionsContent = ({ content }) => {
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
        fontSize={{ base: "xl",md: "3xl",}}
        p={{base: 4, lg:4}}
        fontFamily='bodyFont'
      >
        {content.heading2}
      </Text>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 1}}>
          <Box mt={2} mb={{lg:20}}>
            <SimpleGrid columns={1} spacing={6}>
              {content.services.map((service, index) => (
                <SolutionsListItem key={index} text={service} />
              ))}
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
          <Text color={'black'} textAlign='left' fontWeight={200} fontSize={'xl'} fontFamily='bodyFont'>{props.text}</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

