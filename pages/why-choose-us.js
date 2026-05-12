import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import SeoHead from '../components/utils/seoHead'
import Image from 'next/image'
import NavBar from '../components/utils/navbar3'
import CallToActionBanner from '../components/callToActionBanner'
import PageHero from '../components/utils/pageHero'
import { FadeUp, FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../components/utils/scrollReveal'
import imageUrlBuilder from '@sanity/image-url'
import client from '../src/sanity/lib/client.js'

const builder = imageUrlBuilder(client)
function urlFor(source) { return builder.image(source) }

export async function getStaticProps() {
  const aboutWhyChooseUsPageContent = await client.fetch(`*[_type == "aboutWhyChooseUs"]`);
  return { props: { aboutWhyChooseUsPageContent }, revalidate: 10 };
}

const SectionLabel = ({ children }) => (
  <Text color="brand.accent" fontWeight="700" fontSize="xs" textTransform="uppercase"
    letterSpacing="widest" fontFamily="subtitleFont" mb={3}>{children}</Text>
)

export default function WhyChooseUsPageComponent({ aboutWhyChooseUsPageContent }) {
  const content = aboutWhyChooseUsPageContent[0];
  return (
    <Box>
      <SeoHead title={content.title} />
      <NavBar />
      <PageHero category={content.title} title={content.heading} subtitle={content.introduction} />

      {/* Alternating image/text rows */}
      <ImageTextRow
        imageSrc={urlFor(content.image1).url()}
        imageAlt="Why Choose Us"
        imageLeft
        bg="white"
      >
        <SectionLabel>Our Approach</SectionLabel>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
          bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={5}>
          Focused on Your Success
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
          {content.paragraph1}
        </Text>
      </ImageTextRow>

      <ImageTextRow
        imageSrc={urlFor(content.image2).url()}
        imageAlt="Our Methods"
        bg="brand.bg"
      >
        <SectionLabel>How We Work</SectionLabel>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
          bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={5}>
          Systems That Stick
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
          {content.paragraph2}
        </Text>
      </ImageTextRow>

      <ImageTextRow
        imageSrc={urlFor(content.image3).url()}
        imageAlt="Our Impact"
        imageLeft
        bg="white"
      >
        <SectionLabel>Our Impact</SectionLabel>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="headingFont"
          bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={5}>
          Raising the Bar
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
          {content.paragraph3}
        </Text>
      </ImageTextRow>

      {/* Consultancy experience — full-width open section */}
      <Box bg="brand.bg" py={{ base: 16, md: 24 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeUp>
          <SectionLabel>Experience Base</SectionLabel>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} fontFamily="headingFont"
            bgGradient="linear(to-r, brand.textDark, brand.primary)" bgClip="text" fontWeight="700" mb={4}>
            {content.consultancyHeading}
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid"
            lineHeight="tall" mb={10} maxW="3xl">
            {content.consultancyExperienceBase}
          </Text>
          </FadeUp>

          <FadeIn><Box mb={10} overflow="hidden" borderRadius="2xl">
            <Image
              src={urlFor(content.image4).url()}
              width={1140} height={640}
              alt="Consultancy Experience"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box></FadeIn>

          <StaggerContainer>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {content.specialisms.map((specialism, index) => (
              <StaggerItem key={index}><SpecialismItem text={specialism} /></StaggerItem>
            ))}
          </SimpleGrid>
          </StaggerContainer>
        </Box>
      </Box>

      <CallToActionBanner title={content.callToAction?.title} subtitle={content.callToAction?.subtitle} />
    </Box>
  )
}

const ImageTextRow = ({ imageSrc, imageAlt, imageLeft, bg, children }) => (
  <Box bg={bg} py={{ base: 16, md: 24 }}>
    <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 10, lg: 20 }}
        alignItems="center"
        direction={imageLeft ? 'row' : 'row-reverse'}
      >
        {imageLeft ? (
          <>
            <SlideInLeft><Box overflow="hidden" borderRadius="2xl">
              <Image src={imageSrc} width={570} height={380} alt={imageAlt}
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box></SlideInLeft>
            <SlideInRight><Box>{children}</Box></SlideInRight>
          </>
        ) : (
          <>
            <SlideInLeft><Box>{children}</Box></SlideInLeft>
            <SlideInRight><Box overflow="hidden" borderRadius="2xl">
              <Image src={imageSrc} width={570} height={380} alt={imageAlt}
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box></SlideInRight>
          </>
        )}
      </SimpleGrid>
    </Box>
  </Box>
)

const SpecialismItem = ({ text }) => (
  <Flex align="flex-start" gap={3} py={2}>
    <Box mt="5px" flexShrink={0}>
      <Icon as={CheckIcon} w={4} h={4} color="brand.primary" />
    </Box>
    <Text fontFamily="bodyFont" color="brand.textMid" fontSize="md" lineHeight="tall">{text}</Text>
  </Flex>
)
