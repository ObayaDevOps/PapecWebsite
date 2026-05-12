import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  Heading,
} from '@chakra-ui/react'

import {
  FaBook,
  FaChalkboardTeacher,
  FaSchool,
  FaChild,
  FaChartLine,
  FaBaby,
  FaUserTie,
  FaGlobe,
} from 'react-icons/fa'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Image from 'next/image'

import NavBar from '../components/utils/navbar3'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageHero from '../components/utils/pageHero'
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from '../components/utils/scrollReveal'

const COURSE_AREAS = [
  { icon: FaBook, title: 'Subject Knowledge', tagline: 'Deep curriculum expertise across all subject areas' },
  { icon: FaChalkboardTeacher, title: 'Teaching & Learning Strategies', tagline: 'Evidence-based approaches for classroom excellence' },
  { icon: FaSchool, title: 'School Development', tagline: 'Systems and structures for whole-school improvement' },
  { icon: FaChild, title: 'Child Development', tagline: 'Understanding how children grow and learn' },
  { icon: FaChartLine, title: 'Management & Finance', tagline: 'Practical skills for school leadership and resource management' },
  { icon: FaBaby, title: 'Early Childhood Education', tagline: 'Foundations for life-long learning in the early years' },
  { icon: FaUserTie, title: 'Governance & Leadership', tagline: 'Empowering leaders to drive strategic change' },
  { icon: FaGlobe, title: 'International Education', tagline: 'Global perspectives for a connected world' },
]

export default function CoursesPageComponent() {
  return (
    <Box>
      <SeoHead title="Courses" />
      <NavBar />
      <PageHero
        category="Professional Development"
        title="Courses"
        subtitle="We offer robust Professional Development courses to educators and administrators in a range of areas to help you develop systems and raise achievement."
      />

      {/* Image + intro text */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeIn><Box overflow="hidden" borderRadius="2xl" mb={8}>
            <Image
              src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074280/slider-3_yoybfu.jpg"
              width={1366} height={440} alt="Professional Development Courses"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box></FadeIn>
          <FadeUp><Text fontSize={{ base: 'md', md: 'lg' }} fontFamily="bodyFont" color="brand.textMid">
            Courses can be tailored to your specific needs. If you don&apos;t see the course you need — contact us. We may be able to help. Courses are divided into these main areas:
          </Text></FadeUp>
        </Box>
      </Box>

      {/* Course area cards */}
      <Box bg="brand.bg" py={{ base: 16, md: 20 }}>
        <Box maxW="7xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <FadeUp>
          <Text
            color="brand.accent"
            fontWeight="600"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            fontFamily="subtitleFont"
            mb={3}
          >
            Training Areas
          </Text>
          <Heading
            as="h2"
            bgGradient="linear(to-r, brand.textDark, brand.primary)"
            bgClip="text"
            fontWeight="700"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontFamily="headingFont"
            mb={10}
          >
            Choose Your Area of Training
          </Heading>
          </FadeUp>

          <StaggerContainer>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
            {COURSE_AREAS.map((area) => (
              <StaggerItem key={area.title}><CourseCard {...area} /></StaggerItem>
            ))}
          </SimpleGrid>
          </StaggerContainer>
        </Box>
      </Box>

      <CallToActionBanner />
    </Box>
  )
}

const CourseCard = ({ icon: IconComponent, title, tagline }) => (
  <Box
    as={Link}
    href="/education/courses/course-booking-form"
    bg="white"
    borderRadius="2xl"
    border="1px solid"
    borderColor="brand.border"
    p={7}
    _hover={{ shadow: 'xl', transform: 'translateY(-4px)', borderColor: 'brand.primary' }}
    transition="all 0.25s ease"
    display="flex"
    flexDirection="column"
    gap={5}
    role="group"
    cursor="pointer"
    textDecoration="none"
  >
    <Box
      w={12} h={12}
      bgGradient="linear(135deg, brand.primary, brand.primaryDark)"
      borderRadius="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <Icon as={IconComponent} color="white" w={6} h={6} />
    </Box>

    <Box flex={1}>
      <Text fontWeight="700" fontSize="md" fontFamily="headingFont" color="brand.textDark" mb={2} lineHeight="shorter">
        {title}
      </Text>
      <Text fontSize="sm" fontFamily="bodyFont" color="brand.textMid" lineHeight="tall">
        {tagline}
      </Text>
    </Box>

    <Flex align="center" gap={1} color="brand.primary" fontFamily="uiFont" fontSize="sm" fontWeight="600"
      _groupHover={{ gap: '10px', color: 'brand.primaryDark' }}
      transition="all 0.2s"
    >
      Enquire <ArrowForwardIcon w={3.5} h={3.5} />
    </Flex>
  </Box>
)
