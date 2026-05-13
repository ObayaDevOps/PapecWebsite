import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Divider,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa';
import NextLink from 'next/link';
import Image from 'next/image';
import footerLogo from '../../public/images/icon/Untitled_design_6_tv0jdx.webp';

const Logo = () => (
  <NextLink href="/">
    <Image
      src={footerLogo}
      width={434 / 2.2}
      height={181 / 2.2}
      alt="People and Potential Consultancy"
    />
  </NextLink>
);

const FooterLink = ({ href, children }) => (
  <Box as={NextLink} href={href}>
    <Text
      fontSize="sm"
      fontFamily="uiFont"
      color="whiteAlpha.700"
      _hover={{ color: 'white', textDecoration: 'underline' }}
      transition="color 0.2s"
    >
      {children}
    </Text>
  </Box>
);

const FooterSectionLabel = ({ children }) => (
  <Text fontSize="xs" fontWeight="700" fontFamily="subtitleFont" color="brand.accent" textTransform="uppercase" letterSpacing="widest" mb={3}>
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box bg="brand.primaryDark" w="full">
      <Container as={Stack} maxW="7xl" py={12} px={{ base: 4, md: 8 }}>
        <SimpleGrid
          templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={{ base: 8, md: 10 }}
        >
          {/* Brand column */}
          <Stack spacing={4}>
            <Box>
              <Logo />
            </Box>
            <HStack spacing={3}>
              <chakra.a
                href="https://www.linkedin.com/in/audrey-dralega-frsa-00b37448/"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w={8} h={8}
                bg="whiteAlpha.200"
                borderRadius="full"
                _hover={{ bg: 'whiteAlpha.400' }}
                transition="background 0.2s"
              >
                <Icon as={FaLinkedinIn} color="white" w={3.5} h={3.5} />
              </chakra.a>
              <Button
                as="a"
                href="https://www.dralegawebops.com/"
                size="xs"
                variant="outline"
                color="whiteAlpha.600"
                borderColor="whiteAlpha.300"
                fontFamily="uiFont"
                borderRadius="4px"
                _hover={{ color: 'white', borderColor: 'white' }}
              >
                Built by DWO
              </Button>
            </HStack>
          </Stack>

          {/* Contact column */}
          <Stack spacing={2}>
            <FooterSectionLabel>Contact</FooterSectionLabel>
            <Text fontSize="sm" fontFamily="uiFont" color="whiteAlpha.700">info@peopleandpotential.org</Text>
            <Text fontSize="sm" fontFamily="uiFont" color="whiteAlpha.700">+256 793 231969</Text>
            <Text fontSize="sm" fontFamily="uiFont" color="whiteAlpha.700">+256 787 921975</Text>
            <Text fontSize="sm" fontFamily="uiFont" color="whiteAlpha.700">PO. Box 27348, Kampala</Text>
            <Text fontSize="sm" fontFamily="uiFont" color="whiteAlpha.700">18 Millennium House Nsambya Road</Text>
          </Stack>

          {/* About column */}
          <Stack spacing={2}>
            <FooterSectionLabel>About Us</FooterSectionLabel>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/who-we-are">Who We Are</FooterLink>
            <FooterLink href="/why-choose-us">Why Choose Us</FooterLink>
            <FooterLink href="/consultant-profile">Consultant Profiles</FooterLink>
          </Stack>

          {/* Services & Courses column */}
          <Stack spacing={2}>
            <FooterSectionLabel>Services</FooterSectionLabel>
            <FooterLink href="/school-startup">School Start Up</FooterLink>
            <FooterLink href="/school-development">School Development</FooterLink>
            <Box pt={2}>
              <FooterSectionLabel>Courses</FooterSectionLabel>
            </Box>
            <FooterLink href="/course-list">Course List</FooterLink>
            <FooterLink href="/education/courses/course-booking-form">Course Booking</FooterLink>
            <Box pt={2}>
              <FooterSectionLabel>Contact</FooterSectionLabel>
            </Box>
            <FooterLink href="/info/contact-enquiry">Contact Form</FooterLink>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.200" mt={8} mb={4} />
        <Text fontSize="xs" fontFamily="uiFont" color="whiteAlpha.500" textAlign="center">
          © 2024 People and Potential Consultancy. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
