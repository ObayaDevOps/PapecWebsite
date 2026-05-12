import {
  Box, Text, Flex, Heading, SimpleGrid, Stack, Icon, useColorModeValue
} from '@chakra-ui/react'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/utils/scrollReveal'
import NavBar from '../components/utils/navbar3'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageHero from '../components/utils/pageHero'

const builder = imageUrlBuilder(client)
function urlFor(source) { return builder.image(source) }

export default function WhoWeArePageComponent({ aboutUsWhoWeArePageContent }) {
  const content = aboutUsWhoWeArePageContent[0];
  return (
    <Box>
      <SeoHead title={content.title} />
      <NavBar />
      <PageHero
        category="About Us"
        title="Who We Are"
        subtitle="People and Potential Consultancy was established in 2015 to equip leaders and organisations with the systems and practical tools needed to embed change and take their organisation to the next level of performance."
      />
      <VisionPurposeContent content={content} />
      <FocusSection />
      <MultiSolutionsContent content={content} />
      <CallToActionBanner />
    </Box>
  )
}

const SectionLabel = ({ children }) => (
  <Text
    color="brand.accent"
    fontWeight="700"
    fontSize="xs"
    textTransform="uppercase"
    letterSpacing="widest"
    fontFamily="subtitleFont"
    mb={3}
  >
    {children}
  </Text>
)

const VisionPurposeContent = ({ content }) => {
  const imageUrl = urlFor(content.visionAndPurposeImage).url()
  const { width, height } = getImageDimensions(content.visionAndPurposeImage)

  return (
    <Box bg="white" py={{ base: 16, md: 24 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 20 }} alignItems="center">
          <SlideInLeft>
          <Box overflow="hidden" borderRadius="2xl">
            <Image
              src={imageUrl}
              width={width}
              height={height}
              alt="Vision and Purpose"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
          </SlideInLeft>
          <SlideInRight>
          <Box>
            <SectionLabel>Vision &amp; Purpose</SectionLabel>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontFamily="headingFont"
              bgGradient="linear(to-r, brand.textDark, brand.primary)"
              bgClip="text"
              fontWeight="700"
              mb={8}
            >
              Our Mission &amp; Vision
            </Heading>
            <Stack spacing={6}>
              <Box>
                <Text fontWeight="700" fontSize="lg" color="brand.primary" fontFamily="uiFont" mb={1}>
                  Mission
                </Text>
                <Text fontSize="md" color="brand.textMid" fontFamily="bodyFont" lineHeight="tall">
                  Providing high calibre, inspirational expertise to schools and education organisations, equipping educators to take their organisation to the next level of performance – improving learning for every child.
                </Text>
              </Box>
              <Box>
                <Text fontWeight="700" fontSize="lg" color="brand.primary" fontFamily="uiFont" mb={1}>
                  Vision
                </Text>
                <Text fontSize="md" color="brand.textMid" fontFamily="bodyFont" lineHeight="tall">
                  Transformed thinking, raised standards, creative systems.
                </Text>
              </Box>
            </Stack>
          </Box>
          </SlideInRight>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const FocusSection = () => (
  <Box bg="brand.bg" py={{ base: 16, md: 24 }}>
    <Box maxW="5xl" mx="auto" px={{ base: 6, md: 10 }} textAlign="center">
      <FadeUp>
      <SectionLabel>What Drives Us</SectionLabel>
      <Heading
        as="h2"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontFamily="headingFont"
        bgGradient="linear(to-r, brand.textDark, brand.primary)"
        bgClip="text"
        fontWeight="700"
        mb={6}
      >
        Our Focus
      </Heading>
      <Text fontSize="lg" color="brand.textMid" fontFamily="bodyFont" lineHeight="tall" mb={4}>
        People and Potential focuses on creating and strengthening effective systems; developing leadership and training.
      </Text>
      <Text fontSize="lg" color="brand.textMid" fontFamily="bodyFont" lineHeight="tall">
        Consultants hold international and national expertise, enabling clients to access advice relevant to their context, which is informed by international best practice and is also within physical reach.
      </Text>
      </FadeUp>
    </Box>
  </Box>
)

const MultiSolutionsContent = ({ content }) => {
  const imageUrl = urlFor(content.multidisciplinaryImage).url()
  const { width, height } = getImageDimensions(content.multidisciplinaryImage)

  return (
    <Box bg="white" py={{ base: 16, md: 24 }}>
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 20 }} alignItems="center">
          <SlideInLeft>
          <Box>
            <SectionLabel>What We Provide</SectionLabel>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontFamily="headingFont"
              bgGradient="linear(to-r, brand.textDark, brand.primary)"
              bgClip="text"
              fontWeight="700"
              mb={8}
            >
              Multidisciplinary Solutions
            </Heading>
            <Stack spacing={3}>
              {content.solutions.map((solution, index) => (
                <SolutionItem key={index} text={solution} />
              ))}
            </Stack>
          </Box>
          </SlideInLeft>
          <SlideInRight>
          <Box overflow="hidden" borderRadius="2xl">
            <Image
              src={imageUrl}
              width={width}
              height={height}
              alt="Multidisciplinary Solutions"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
          </SlideInRight>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const SolutionItem = ({ text }) => (
  <Flex align="flex-start" gap={3}>
    <Box
      mt="5px"
      w="6px"
      h="6px"
      borderRadius="full"
      bg="brand.accent"
      flexShrink={0}
    />
    <Text fontFamily="bodyFont" color="brand.textMid" fontSize="md" lineHeight="tall">
      {text}
    </Text>
  </Flex>
)

export async function getStaticProps() {
  const aboutUsWhoWeArePageContent = await client.fetch(`*[_type == "aboutUsWhoWeAre"]`);
  return { props: { aboutUsWhoWeArePageContent }, revalidate: 10 };
}
