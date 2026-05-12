import { Box, Flex, Icon, SimpleGrid, Heading, Text, Stack } from '@chakra-ui/react'
import { FadeUp, SlideInLeft, SlideInRight, FadeIn } from '../components/utils/scrollReveal'
import { CheckIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import NavBar from '../components/utils/navbar3'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageHero from '../components/utils/pageHero'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'

const builder = imageUrlBuilder(client)
function urlFor(source) { return builder.image(source) }

export async function getStaticProps() {
  const servicesSchoolDevelopmentPageContent = await client.fetch(`*[_type == "servicesSchoolDevelopment"][0]`);
  return { props: { servicesSchoolDevelopmentPageContent }, revalidate: 10 };
}

const SectionLabel = ({ children }) => (
  <Text color="brand.accent" fontWeight="700" fontSize="xs" textTransform="uppercase"
    letterSpacing="widest" fontFamily="subtitleFont" mb={3}>{children}</Text>
)

export default function SchoolDevelopmentPageComponent({ servicesSchoolDevelopmentPageContent: c }) {
  const imageUrl = urlFor(c.image1).url()
  const { width, height } = getImageDimensions(c.image1)

  return (
    <Box>
      <SeoHead title={c.title} />
      <NavBar />
      <PageHero category="Services" title={c.heading} subtitle={c.introduction} />

      {/* Where to begin — image left, text right */}
      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="center">
            <SlideInLeft><Box overflow="hidden" borderRadius="2xl">
              <Image src={imageUrl} width={width} height={height} alt="School Development"
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box></SlideInLeft>
            <SlideInRight><Box>
              <SectionLabel>Where to Begin</SectionLabel>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
                {c.whereToBegin}
              </Text>
            </Box></SlideInRight>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Review process */}
      <Box bg="brand.bg" py={{ base: 16, md: 24 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeUp>
          <SectionLabel>School Review</SectionLabel>
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
            bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={8}>
            {c.reviewProcessHeading}
          </Heading>
          </FadeUp>
          <FadeIn><Box overflow="hidden" borderRadius="2xl" mb={10}>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717496641/PP2_vgac0v.jpg"
              width={1366} height={500} alt="Review Process"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box></FadeIn>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
            {c.reviewProcess.map((item, i) => (
              <ServiceItem key={i} text={item} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Development priorities */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeUp>
          <SectionLabel>Next Steps</SectionLabel>
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
            bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={8}>
            {c.developmentPrioritiesHeading}
          </Heading>
          </FadeUp>
          <Box overflow="hidden" borderRadius="2xl" mb={10}>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074277/PP-Website-Banner-7_cz77xw.jpg"
              width={1366} height={500} alt="Development Priorities"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
            {c.developmentPriorities.map((item, i) => (
              <ServiceItem key={i} text={item} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <CallToActionBanner title={c.callToAction?.title} subtitle={c.callToAction?.subtitle} />
    </Box>
  )
}

const ServiceItem = ({ text }) => (
  <Flex align="flex-start" gap={3} py={2}>
    <Box mt="5px" flexShrink={0}>
      <Icon as={CheckIcon} w={4} h={4} color="brand.primary" />
    </Box>
    <Text fontFamily="bodyFont" color="brand.textMid" fontSize="md" lineHeight="tall">{text}</Text>
  </Flex>
)
