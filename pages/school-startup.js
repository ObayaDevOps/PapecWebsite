import { Box, Flex, Icon, SimpleGrid, Text, Heading, Stack } from '@chakra-ui/react'
import { FadeUp, SlideInLeft, SlideInRight } from '../components/utils/scrollReveal'
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
  const servicesSchoolStartUpPageContent = await client.fetch(`*[_type == "servicesSchoolStartUp"][0]`);
  return { props: { servicesSchoolStartUpPageContent }, revalidate: 10 };
}

const SectionLabel = ({ children }) => (
  <Text color="brand.accent" fontWeight="700" fontSize="xs" textTransform="uppercase"
    letterSpacing="widest" fontFamily="subtitleFont" mb={3}>{children}</Text>
)

export default function SchoolStartUpPageComponent({ servicesSchoolStartUpPageContent: c }) {
  const { width, height } = getImageDimensions(c.image1)

  return (
    <Box>
      <SeoHead title={c.title} />
      <NavBar />
      <PageHero category="Services" title={c.heading} subtitle={c.introduction} />

      {/* Full-width image — no box */}
      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="center">
            <SlideInLeft><Box overflow="hidden" borderRadius="2xl">
              <Image
                src={urlFor(c.image1).url()}
                width={width} height={height}
                alt="School Start-Up"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box></SlideInLeft>
            <SlideInRight><Stack spacing={5}>
              <SectionLabel>Starting Out</SectionLabel>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
                {c.paragraph1}
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
                {c.paragraph2}
              </Text>
            </Stack></SlideInRight>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Services list — open section, no box */}
      <Box bg="brand.bg" py={{ base: 16, md: 24 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeUp>
          <SectionLabel>Our Services</SectionLabel>
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
            bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={10}>
            {c.heading2}
          </Heading>
          </FadeUp>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
            {c.services.map((service, i) => (
              <ServiceItem key={i} text={service} />
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
