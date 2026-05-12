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


  import SeoHead from '../components/utils/seoHead';
  import Image from 'next/image'

  import NavBar from '../components/utils/navbar3'
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
  const aboutWhyChooseUsPageContent = await client.fetch(`
    *[_type == "aboutWhyChooseUs"]
  `);

  return {
    props: {
      aboutWhyChooseUsPageContent,
    },
    revalidate: 10, // In seconds
  };
}


  export default function WhyChooseUsPageComponent({ aboutWhyChooseUsPageContent }) {
    const content = aboutWhyChooseUsPageContent[0];

    return (
      <Box>
        <SeoHead title={content.title} />

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
                  {content.title}
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
                    py={6}
                  >
                    {content.heading}
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
                  {content.introduction}
                </chakra.h2>
              </Box>

              <TopContent content={content} />

              <ConsultExperienceContent content={content} />

              <CallToActionBanner title={content.callToAction?.title} subtitle={content.callToAction?.subtitle} />

            </Flex>
        </PageShell>
      </Box>
    )
  }

const TopContent = ({ content }) => {
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
      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 2}}>
          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={urlFor(content.image1).url()}
              width={570}
              height={320}
              alt="Image 1"
            />
          </Box>

          <Box mt={6} mb={{lg:32}}>
            <Box>
              <Text
                textAlign='left'
                fontSize={{ base: "lg",md: "xl",}}
                fontFamily='bodyFont'
                textColor='purple.800'
              >
                {content.paragraph1}
              </Text>
            </Box>  
          </Box>

          <Box mt={6} mb={{lg:20}}>
            <Box>
              <Text
                textAlign='left'
                fontSize={{ base: "lg",md: "xl",}}
                fontFamily='bodyFont'
                textColor='purple.800'
              >
                {content.paragraph2}
              </Text>
            </Box>  
          </Box>

          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={urlFor(content.image2).url()}
              width={570}
              height={320}
              alt="Image 2"
            />
          </Box>

          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={urlFor(content.image3).url()}
              width={570}
              height={320}
              alt="Image 3"
            />
          </Box>

          <Box mt={6} mb={{lg:20}}>
            <Box>
              <Text
                textAlign='left'
                fontSize={{ base: "lg",md: "xl",}}
                fontFamily='bodyFont'
                textColor='purple.800'
              >
                {content.paragraph3}
              </Text>
            </Box>    
          </Box>
        </SimpleGrid>
      </Box>
    </Box>        
  )
}

const ConsultExperienceContent = ({ content }) => {
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
        {content.consultancyHeading}
      </Text>

      <Box>
        <Text
          textAlign='left'
          fontSize={{ base: "lg",md: "xl",}}
          fontFamily='bodyFont'
          textColor='purple.800'
          p={{base: 4, lg:4}}
        >
          {content.consultancyExperienceBase}
        </Text>
      </Box>

      <Box>
        <SimpleGrid columns={{base: 1, md:1, lg: 1}}>
          <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
              src={urlFor(content.image4).url()}
              width={570*2}
              height={320*2}
              alt="Consultancy Experience"
            />
          </Box>

          <Box mt={2} mb={{lg:20}}>
            <SimpleGrid columns={1} spacing={6}>
              {content.specialisms.map((specialism, index) => (
                <SolutionsListItem key={index} text={specialism} />
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
      // bgColor="gray.100"
      background="whiteAlpha.800"
      // border='30px'
      // shadow={'md'}
    >
      <HStack  align={'flex-start'} >
        
        <Box color={'green.400'} px={2} >
          <Icon as={CheckIcon} />
        </Box>
        <VStack align={'start'}>
          <Text color={'black'}  textColor='purple.900' textAlign='left' fontWeight={200} fontSize={'xl'} fontFamily='bodyFont' >{props.text}</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

