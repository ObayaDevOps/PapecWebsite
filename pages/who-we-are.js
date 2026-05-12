import {
  Box, chakra, Container, Text, Flex, VStack, Button, Heading, SimpleGrid, Stack, Icon, useColorModeValue
} from '@chakra-ui/react'
import NavBar from '../components/utils/navbar3'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import SectionCard from '../components/utils/sectionCard'
import PageShell from '../components/utils/pageShell'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function WhoWeArePageComponent({ aboutUsWhoWeArePageContent }) {
  const content = aboutUsWhoWeArePageContent[0]; // Assuming there's only one item in the array

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

            <CallToActionBanner />

          </Flex>
      </PageShell>
    </Box>
  )
}

const VisionPurposeContent = ({ content }) => {
  const imageUrl = urlFor(content.visionAndPurposeImage).url()
  const { width, height } = getImageDimensions(content.visionAndPurposeImage)

  return (
    <SectionCard>
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
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
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
    </SectionCard>
  )
}

const MultiSolutionsContent = ({ content }) => {
  const imageUrl = urlFor(content.multidisciplinaryImage).url()
  const { width, height } = getImageDimensions(content.multidisciplinaryImage)

  return (
    <SectionCard>
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
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto' }}
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
    </SectionCard>
  )
}

const FocusSection = ({ content }) => {
  return (
    <Flex
      // bg="#edf3f8"
      // _dark={{
      //   bg: "#3e3e3e",
      my={{base: 20, md: 2}}
  
      p={{base: 6, md: 20}}
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
