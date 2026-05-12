import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  HStack,
  Divider,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import client from '../src/sanity/lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import NavBar from '../components/utils/navbar3.js';
import ClientTestimonials from './past-work/client-testimonials.js';
import SeoHead from '../components/utils/seoHead.js';
import CallToActionBanner from '../components/callToActionBanner.js';
import { FaClipboardCheck, FaChalkboardTeacher, FaProjectDiagram } from 'react-icons/fa';
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, SlideInLeftLoad } from '../components/utils/scrollReveal';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

// Resolved hex values for brand.primary and brand.bg — needed in SVG fills
const C_PURPLE = '#5B3FA6';
const C_PALE   = '#F7F6FF';
const C_OFF    = '#F9F8F5';

const SectionWave = ({ from, to, flip = false }) => (
  <Box bg={from} lineHeight={0}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '72px' }}
    >
      <path
        d={flip
          ? 'M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z'
          : 'M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z'}
        fill={to}
      />
    </svg>
  </Box>
);

export async function getStaticProps() {
  const landingPageContentSanity = await client.fetch(`*[_type == "landingPage"]`);
  return {
    props: { landingPageContentSanity },
    revalidate: 10,
  };
}

export default function Home(props) {
  return (
    <div>
      <SeoHead title="Home" />
      <EducationLanding landingPageContent={props.landingPageContentSanity} />
    </div>
  );
}

function EducationLanding({ landingPageContent }) {
  const content = landingPageContent[0];

  return (
    <Box>
      <SeoHead
        title={content.title || 'Education Home'}
        ogDescription={content.description || 'Professional HR Training'}
      />

      <NavBar />

      <Box bg="#F9F8F5" backgroundImage={GRAIN} backgroundSize="200px">
        <HeroSection content={content} />
        <WhatWeOffer offerings={content.whatWeOffer} />
        <SectionWave from={C_PURPLE} to={C_PALE} />
        <WhyChooseUs chooseUs={content.whyChooseUs} />
        <SectionWave from={C_PALE} to={C_PURPLE} flip />
        <ClientTestimonials testimonials={content.testimonials} />
        <CallToActionBanner />
      </Box>
    </Box>
  );
}

function HeroSection({ content }) {
  const slides = useMemo(
    () =>
      (content.carouselImages || [])
        .filter((img) => img?.asset?._ref)
        .map((img) => urlFor(img).url()),
    [content.carouselImages]
  );

  const count = slides.length;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  useEffect(() => {
    if (count < 2) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, count]);

  return (
    <Box position="relative" minH="100vh" overflow="hidden" display="flex" alignItems="center">
      {/* Background slides — crossfade */}
      {slides.map((src, i) => (
        <Box
          key={i}
          position="absolute"
          inset={0}
          bgImage={`url(${src})`}
          bgSize="cover"
          bgPos="center"
          opacity={current === i ? 1 : 0}
          transition="opacity 1.2s ease-in-out"
        />
      ))}

      {/* Dark purple overlay for text readability */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(26, 23, 51, 0.72)"
      />

      {/* Text content */}
      <Box
        position="relative"
        zIndex={2}
        maxW="8xl"
        mx="auto"
        w="full"
        px={{ base: 6, md: 10, lg: 16 }}
        pt={{ base: 16, lg: 0 }}
        pb={{ base: 24, lg: 0 }}
      >
        <Box maxW={{ base: 'full', lg: '600px' }}>
          {/* White logo */}
          <SlideInLeftLoad delay={0}>
            <Box mb={6}>
              <Image
                src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1718006910/Untitled_design_6_tv0jdx.png"
                width={200}
                height={83}
                alt="People and Potential Consultancy"
              />
            </Box>
          </SlideInLeftLoad>

          <SlideInLeftLoad delay={0.15}>
            <Text
              color="brand.accent"
              fontWeight="600"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="widest"
              fontFamily="subtitleFont"
              mb={3}
            >
              Professional Educational Consultancy
            </Text>
          </SlideInLeftLoad>

          <SlideInLeftLoad delay={0.28}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontFamily="headingFont"
              fontWeight="700"
              color="white"
              lineHeight="1.1"
              mb={5}
            >
              {content.heading || 'Professional Educational Trainings'}
            </Heading>
          </SlideInLeftLoad>

          <SlideInLeftLoad delay={0.42}>
            <Text
              fontFamily="bodyFont"
              color="whiteAlpha.800"
              fontSize={{ base: 'md', md: 'lg' }}
              mb={8}
              maxW="xl"
            >
              {content.description ||
                "We focus on creating training systems that effectively convey your organisation's identity, then optimise for an enhanced learning experience."}
            </Text>
          </SlideInLeftLoad>

          <SlideInLeftLoad delay={0.55}>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mb={10}>
              <Button
                as={NextLink}
                href="/info/contact-enquiry"
                bg="brand.accent"
                color="brand.textDark"
                fontWeight="700"
                fontFamily="uiFont"
                size={{ base: 'sm', sm: 'lg' }}
                px={{ base: 5, sm: 8 }}
                borderRadius="8px"
                _hover={{ bg: 'brand.accentDark', transform: 'translateY(-2px)' }}
                transition="all 0.2s ease"
                shadow="md"
              >
                Talk to Us Today
              </Button>
              <Button
                as={NextLink}
                href="/why-choose-us"
                variant="outline"
                borderColor="whiteAlpha.700"
                color="white"
                fontWeight="600"
                fontFamily="uiFont"
                size={{ base: 'sm', sm: 'lg' }}
                px={{ base: 5, sm: 8 }}
                borderRadius="8px"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Our Services
              </Button>
            </Stack>
          </SlideInLeftLoad>

          {/* Trust bar */}
          <SlideInLeftLoad delay={0.68}>
            <HStack
              spacing={0}
              divider={<Divider orientation="vertical" h="40px" borderColor="whiteAlpha.300" />}
              flexWrap="nowrap"
            >
              <TrustStat number="50+" label="Schools Supported" />
              <TrustStat number="10+" label="Countries" />
              <TrustStat number="15+" label="Years Experience" />
            </HStack>
          </SlideInLeftLoad>
        </Box>
      </Box>

      {/* Prev / Next arrows */}
      {count > 1 && (
        <>
          <IconButton
            aria-label="Previous slide"
            icon={<ChevronLeftIcon w={6} h={6} />}
            onClick={prev}
            position="absolute"
            left={6}
            top="50%"
            transform="translateY(-50%)"
            zIndex={3}
            borderRadius="full"
            bg="whiteAlpha.300"
            color="white"
            backdropFilter="blur(4px)"
            _hover={{ bg: 'whiteAlpha.500' }}
            size="md"
            display={{ base: 'none', md: 'flex' }}
          />
          <IconButton
            aria-label="Next slide"
            icon={<ChevronRightIcon w={6} h={6} />}
            onClick={next}
            position="absolute"
            right={6}
            top="50%"
            transform="translateY(-50%)"
            zIndex={3}
            borderRadius="full"
            bg="whiteAlpha.300"
            color="white"
            backdropFilter="blur(4px)"
            _hover={{ bg: 'whiteAlpha.500' }}
            size="md"
            display={{ base: 'none', md: 'flex' }}
          />
        </>
      )}

      {/* Dot indicators */}
      <HStack
        position="absolute"
        bottom="28px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={3}
        spacing={2}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            cursor="pointer"
            boxSize={current === i ? '12px' : '8px'}
            bg={current === i ? 'brand.accent' : 'whiteAlpha.500'}
            rounded="50%"
            transition="all 0.3s ease"
            onClick={() => setCurrent(i)}
            border="1px solid"
            borderColor={current === i ? 'brand.accent' : 'whiteAlpha.300'}
          />
        ))}
      </HStack>

      {/* Wave bleeds into WhatWeOffer purple below */}
      <Box position="absolute" bottom={0} left={0} right={0} lineHeight={0} zIndex={2} pointerEvents="none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path d="M0,55 C480,0 960,0 1440,55 L1440,80 L0,80 Z" fill={C_PURPLE} />
        </svg>
      </Box>
    </Box>
  );
}

const TrustStat = ({ number, label }) => (
  <Box px={{ base: 2, md: 6 }} textAlign="center">
    <Text fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="brand.accent" fontFamily="headingFont" lineHeight={1}>
      {number}
    </Text>
    <Text fontSize="xs" color="whiteAlpha.800" fontFamily="uiFont" mt={1}>
      {label}
    </Text>
  </Box>
);

const OFFERING_ICONS = [FaClipboardCheck, FaChalkboardTeacher, FaProjectDiagram];

const WhatWeOffer = ({ offerings }) => (
  <Box bg="brand.primary" backgroundImage={GRAIN} backgroundSize="200px" py={{ base: 16, md: 20 }}>
    <Box maxW="8xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
      <FadeUp>
        {/* <Text
          color="brand.accent"
          fontWeight="600"
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="widest"
          fontFamily="subtitleFont"
          textAlign="center"
          mb={3}
        >
          What We Do
        </Text> */}
        <Heading
          as="h2"
          textAlign="center"
          fontFamily="headingFont"
          fontSize={{ base: '3xl', md: '5xl' }}
          color="white"
          mb={12}
        >
          What We Offer
        </Heading>
      </FadeUp>

      <StaggerContainer>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {offerings && offerings.map((offering, index) => (
            <StaggerItem key={index}>
              <OfferingCard
                title={offering.title}
                description={offering.description}
                icon={OFFERING_ICONS[index % OFFERING_ICONS.length]}
                imgUrl={urlFor(offering.image?.asset?._ref).url()}
              />
            </StaggerItem>
          ))}
        </SimpleGrid>
      </StaggerContainer>
    </Box>
  </Box>
);

const OfferingCard = ({ title, description, icon: IconComp, imgUrl }) => (
  <Box
    position="relative"
    h={{ base: '300px', md: '380px' }}
    borderRadius="2xl"
    overflow="hidden"
    role="group"
    cursor="default"
    _hover={{ transform: 'translateY(-4px)' }}
    transition="transform 0.3s ease"
  >
    {/* Full-bleed background image */}
    <chakra.img
      src={imgUrl}
      alt={title}
      position="absolute"
      inset={0}
      w="full"
      h="full"
      objectFit="cover"
      transition="transform 0.6s ease"
      _groupHover={{ transform: 'scale(1.06)' }}
    />

    {/* Gradient overlay — transparent top, dark purple bottom */}
    <Box
      position="absolute"
      inset={0}
      bgGradient="linear(to-t, rgba(26,23,51,0.95) 0%, rgba(26,23,51,0.35) 55%, transparent 100%)"
    />

    {/* Icon badge — top left */}
    <Box
      position="absolute"
      top={5}
      left={5}
      w={9} h={9}
      bg="brand.accent"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={IconComp} color="brand.textDark" w={4} h={4} />
    </Box>

    {/* Text — bottom */}
    <Box position="absolute" bottom={0} left={0} right={0} p={6}>
      <Heading as="h3" fontSize="xl" fontFamily="headingFont" color="white" mb={2} lineHeight="shorter">
        {title}
      </Heading>
      <Text fontSize="sm" fontFamily="bodyFont" color="whiteAlpha.800" lineHeight="tall">
        {description}
      </Text>
    </Box>
  </Box>
);

const STATS = [
  { number: '50+', label: 'Schools Supported' },
  { number: '10+', label: 'Countries Reached' },
  { number: '100%', label: 'Client Focus' },
  { number: '15+', label: 'Years Experience' },
];

const WhyChooseUs = ({ chooseUs }) => (
  <Box py={{ base: 16, md: 24 }} bg="brand.bg" backgroundImage={GRAIN} backgroundSize="200px">
    <Box maxW="8xl" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="center">
        {/* Text side */}
        <FadeUp>
        <Box>
          <Text
            color="brand.accent"
            fontWeight="600"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            fontFamily="subtitleFont"
            mb={3}
          >
            Why Choose Us
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="headingFont"
            bgGradient="linear(to-r, brand.textDark, brand.primary)"
            bgClip="text"
            mb={5}
          >
            {chooseUs?.title || 'High achievers never stop striving'}
          </Heading>
          <Text fontSize="lg" color="brand.textMid" fontFamily="bodyFont" mb={4}>
            {chooseUs?.description || 'People & Potential Consultancy helps schools and organisations identify areas for growth and implement systems for continuous improvement.'}
          </Text>
          <Text fontSize="lg" color="brand.textMid" fontFamily="bodyFont" mb={6}>
            {chooseUs?.additionalDescription || 'We build frameworks for progress tracking, performance management, and creating thriving learning environments.'}
          </Text>
          <Button
            as={NextLink}
            href="/why-choose-us"
            variant="outline"
            borderColor="brand.primary"
            color="brand.primary"
            fontFamily="uiFont"
            fontWeight="600"
            size="md"
            borderRadius="8px"
            _hover={{ bg: 'brand.bg' }}
          >
            Learn More About Us
          </Button>
        </Box>
        </FadeUp>

        {/* Stats grid */}
        <StaggerContainer>
        <SimpleGrid columns={2} spacing={4}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
            <Box
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              textAlign="center"
              border="1px solid"
              borderColor="brand.border"
              _hover={{ borderColor: 'brand.primary', shadow: 'md' }}
              transition="all 0.2s ease"
            >
              <Text
                fontWeight="800"
                fontSize={{ base: '4xl', md: '5xl' }}
                color="brand.primary"
                fontFamily="headingFont"
                lineHeight={1}
                mb={2}
              >
                {stat.number}
              </Text>
              <Text fontSize="xs" color="brand.textMid" fontFamily="uiFont" textTransform="uppercase" letterSpacing="wide">
                {stat.label}
              </Text>
            </Box>
            </StaggerItem>
          ))}
        </SimpleGrid>
        </StaggerContainer>
      </SimpleGrid>
    </Box>
  </Box>
);
