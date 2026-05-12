import { Box, Flex, Heading, Text, Divider, Stack } from '@chakra-ui/react'
import NavBar from '../components/utils/navbar3'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageHero from '../components/utils/pageHero'
import { FadeUp } from '../components/utils/scrollReveal'
import client from '../src/sanity/lib/client.js'

export async function getStaticProps() {
  const aboutUsConsultantProfilesPageContent = await client.fetch(`*[_type == "aboutUsConsultantProfiles"][0]`);
  return { props: { aboutUsConsultantProfilesPageContent }, revalidate: 10 };
}

export default function ConsultantPageComponent({ aboutUsConsultantProfilesPageContent }) {
  const { title, heading, introduction, consultants, callToAction } = aboutUsConsultantProfilesPageContent;
  return (
    <Box>
      <SeoHead title={title} />
      <NavBar />
      <PageHero category="About Us" title={heading} subtitle={introduction} />

      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Box maxW="4xl" mx="auto" px={{ base: 6, md: 10 }}>
          <Stack spacing={0} divider={<Divider borderColor="brand.border" />}>
            {consultants.map((consultant) => (
              <FadeUp key={consultant._key}>
                <ConsultantEntry consultant={consultant} />
              </FadeUp>
            ))}
          </Stack>
        </Box>
      </Box>

      <CallToActionBanner title={callToAction?.title} subtitle={callToAction?.subtitle} />
    </Box>
  )
}

const ConsultantEntry = ({ consultant }) => (
  <Box py={{ base: 12, md: 16 }}>
    <Box
      w="40px" h="3px"
      bg="brand.accent"
      mb={5}
      borderRadius="full"
    />
    <Heading
      as="h2"
      fontSize={{ base: '2xl', md: '3xl' }}
      fontFamily="headingFont"
      bgGradient="linear(to-r, brand.textDark, brand.primary)"
      bgClip="text"
      fontWeight="700"
      mb={5}
    >
      {consultant.name}
    </Heading>
    <Text
      fontSize={{ base: 'md', md: 'lg' }}
      fontFamily="bodyFont"
      color="brand.textMid"
      lineHeight="tall"
    >
      {consultant.bio}
    </Text>
  </Box>
)
