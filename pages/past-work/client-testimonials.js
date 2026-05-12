import { useState, useCallback } from 'react';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '../../components/utils/scrollReveal';
import { FaStar } from 'react-icons/fa';

const EASE = [0.22, 1, 0.36, 1];

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

const testimonials = [
  {
    name: 'ISU, Board of Directors',
    role: 'Governance Course',
    content:
      'Your flexibility and willingness to rethink the agenda midway was necessary to ensure the successful outcomes.',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637864/images_1_jje5hj.jpg',
  },
  {
    name: 'Little Cranes Montessori Kindergarten, Headteacher',
    role: 'Professional Development Course',
    content:
      'Well-equipped and well-informed about the specific field. Variety of examples to study and good use of the tangible material. No room for detachment!',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637805/images_fjxltj.jpg',
  },
  {
    name: 'Taibah International School, Headteacher',
    role: 'School Operations Audit & Review Course',
    content:
      'Thorough and very useful in giving us a clear view of areas of strength and our overlooked areas.',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637806/Taibah-International-School-logo-300x155_kzzuvd.jpg',
  },
  {
    name: 'The North Green School, Director',
    role: 'School Start Up Course',
    content:
      'The Consultancy support received was beyond exceptional. It exceeded our expectations!',
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637987/images_2_zpvxof.jpg',
  },
  {
    name: 'Kings International School Kampala, Director',
    role: 'Equipping Leaders Course',
    content:
      "I just wanted to write and let you know how much we have enjoyed having you coach us. You really are an extremely good communicator. Everything we've heard or discussed with you has been exactly what we've needed to hear. You are really, really good at your job!",
    avatar:
      'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718637806/thTJLxxo_400x400_jgniba.jpg',
  },
];

function TestimonialCard({ name, role, content, avatar, ...rest }) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={7}
      position="relative"
      border="1px solid"
      borderColor="brand.border"
      display="flex"
      flexDirection="column"
      gap={4}
      _hover={{ borderColor: 'brand.primary', transform: 'translateY(-3px)', shadow: 'lg' }}
      transition="all 0.25s ease"
      {...rest}
    >
      {/* Stars */}
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Icon key={i} as={FaStar} color="brand.accent" w={3} h={3} />
        ))}
      </HStack>

      {/* Quote mark */}
      <Text
        fontSize="6xl"
        lineHeight="0.8"
        color="brand.primary"
        fontFamily="headingFont"
        fontWeight="900"
        userSelect="none"
        aria-hidden
      >
        &ldquo;
      </Text>

      {/* Content */}
      <Text
        fontFamily="bodyFont"
        fontSize="md"
        color="brand.textMid"
        lineHeight="tall"
        fontStyle="italic"
        flex={1}
      >
        {content}
      </Text>

      {/* Divider */}
      <Box h="1px" bg="brand.border" />

      {/* Author */}
      <Flex align="center" gap={3}>
        <Avatar
          src={avatar}
          size="md"
          borderRadius="xl"
          border="2px solid"
          borderColor="brand.border"
        />
        <Box>
          <Text fontFamily="uiFont" fontWeight="700" fontSize="sm" color="brand.textDark" lineHeight="short">
            {name}
          </Text>
          <Text fontFamily="uiFont" fontSize="xs" color="brand.accent" fontWeight="600" mt={1}>
            {role}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const count = testimonials.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  return (
    <Box>
      {/* Sliding strip — all cards stay mounted, no height collapse */}
      <Box overflow="hidden" borderRadius="2xl">
        <motion.div
          style={{ display: 'flex' }}
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {testimonials.map((t, i) => (
            <Box key={i} flexShrink={0} w="100%">
              <TestimonialCard {...t} />
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* Controls */}
      <Flex align="center" justify="space-between" mt={5}>
        <IconButton
          aria-label="Previous testimonial"
          icon={<ChevronLeftIcon w={5} h={5} />}
          onClick={prev}
          variant="outline"
          borderColor="whiteAlpha.500"
          color="white"
          borderRadius="full"
          size="sm"
          _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
        />

        <HStack spacing={2}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              as="button"
              onClick={() => setCurrent(i)}
              boxSize={current === i ? '10px' : '7px'}
              bg={current === i ? 'brand.accent' : 'whiteAlpha.400'}
              rounded="full"
              transition="all 0.25s ease"
            />
          ))}
        </HStack>

        <IconButton
          aria-label="Next testimonial"
          icon={<ChevronRightIcon w={5} h={5} />}
          onClick={next}
          variant="outline"
          borderColor="whiteAlpha.500"
          color="white"
          borderRadius="full"
          size="sm"
          _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
        />
      </Flex>
    </Box>
  );
}

export default function ClientTestimonials() {
  return (
    <Box bg="brand.primary" backgroundImage={GRAIN} backgroundSize="200px" py={{ base: 16, md: 20 }}>
      <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }}>
        <FadeUp><Box textAlign="center" mb={12}>
          <Text
            color="brand.accent"
            fontWeight="600"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            fontFamily="subtitleFont"
            mb={3}
          >
            Past Client Testimonials
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="headingFont"
            color="white"
            mb={4}
          >
            What Our Clients Say
          </Heading>
          <Text
            fontSize="lg"
            color="whiteAlpha.800"
            fontFamily="bodyFont"
            maxW="2xl"
            mx="auto"
          >
            Following their team training, participants were asked to reflect on their experience.
          </Text>
        </Box></FadeUp>

        {/* Mobile carousel */}
        <Box display={{ base: 'block', md: 'none' }}>
          <MobileCarousel />
        </Box>

        {/* Desktop broken grid */}
        <StaggerContainer>
          <Grid
            display={{ base: 'none', md: 'grid' }}
            templateColumns={{ md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
            gap={6}
          >
            {/* Col 1 · Row 1 */}
            <GridItem>
              <StaggerItem>
                <TestimonialCard {...testimonials[0]} />
              </StaggerItem>
            </GridItem>

            {/* Col 2 · Row 1 */}
            <GridItem>
              <StaggerItem>
                <TestimonialCard {...testimonials[1]} />
              </StaggerItem>
            </GridItem>

            {/* Col 3 · Rows 1-2 on xl  |  full-width row on md */}
            <GridItem
              gridColumn={{ md: '1 / -1', xl: '3' }}
              gridRow={{ xl: '1 / 3' }}
            >
              <StaggerItem style={{ height: '100%' }}>
                <TestimonialCard {...testimonials[4]} h="100%" />
              </StaggerItem>
            </GridItem>

            {/* Col 1 · Row 2 */}
            <GridItem>
              <StaggerItem>
                <TestimonialCard {...testimonials[2]} />
              </StaggerItem>
            </GridItem>

            {/* Col 2 · Row 2 */}
            <GridItem>
              <StaggerItem>
                <TestimonialCard {...testimonials[3]} />
              </StaggerItem>
            </GridItem>
          </Grid>
        </StaggerContainer>
      </Container>
    </Box>
  );
}
