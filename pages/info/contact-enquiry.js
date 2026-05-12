import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,
  Text,
  Icon,
  HStack,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import NavBar from '../../components/utils/navbar3';
import SeoHead from '../../components/utils/seoHead';
import PageHero from '../../components/utils/pageHero';
import CallToActionBanner from '../../components/callToActionBanner';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = event.target;
    const userTypedData = {
      Name: form.name.value,
      Email: form.email.value,
      Message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userTypedData),
      });

      if (res.ok) {
        toast({
          title: 'Message Sent.',
          description: 'We will get back to you soon!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        form.reset();
      } else {
        toast({
          title: 'Could not send message.',
          description: 'Please try again or email us directly.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: 'Network error.',
        description: 'Please check your connection and try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <SeoHead title="Contact" />
      <NavBar />

      <PageHero
        category="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and we'll respond as soon as possible."
      />

      <Box bg="brand.bg" py={{ base: 10, md: 16 }}>
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={0}
          borderRadius="2xl"
          overflow="hidden"
        >
          {/* Left info panel */}
          <Box bg="brand.primary" p={{ base: 8, md: 10 }}>
            <Text
              color="brand.accent"
              fontWeight="600"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="widest"
              fontFamily="subtitleFont"
              mb={4}
            >
              Contact Details
            </Text>
            <Heading
              as="h2"
              color="white"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontFamily="headingFont"
              fontWeight="700"
              mb={6}
              lineHeight="shorter"
            >
              People &amp; Potential Consultancy
            </Heading>
            <Text color="whiteAlpha.800" fontFamily="bodyFont" fontSize="md" mb={10} lineHeight="tall">
              We help schools and education organisations identify areas for growth and implement systems for continuous improvement.
            </Text>

            <VStack align="flex-start" spacing={6}>
              <ContactInfoItem icon={MdOutlineEmail} text="info@peopleandpotential.org" />
              <ContactInfoItem icon={MdPhone} text="+256 793 231969" />
              <ContactInfoItem icon={MdPhone} text="+256 787 921975" />
              <ContactInfoItem icon={MdLocationOn} text="18 Millennium House, Nsambya Road" />
              <ContactInfoItem icon={MdLocationOn} text="PO. Box 27348, Kampala" />
            </VStack>

            <Box mt={10}>
              <Text color="brand.accent" fontSize="xs" textTransform="uppercase" letterSpacing="widest" fontFamily="subtitleFont" mb={3}>
                Follow Us
              </Text>
              <HStack spacing={3}>
                <Link href="https://www.linkedin.com/in/audrey-dralega-frsa-00b37448/" isExternal>
                  <Box
                    w={9} h={9}
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: 'whiteAlpha.400' }}
                    transition="background 0.2s"
                  >
                    <Icon as={BsLinkedin} color="white" w={4} h={4} />
                  </Box>
                </Link>
              </HStack>
            </Box>
          </Box>

          {/* Right form panel */}
          <Box bg="white" p={{ base: 8, md: 10 }}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name" fontFamily="uiFont" color="brand.textDark" fontSize="sm" fontWeight="600">
                    Name
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BsPerson} color="brand.textMid" />
                    </InputLeftElement>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ bg: 'white', borderColor: 'brand.primary', boxShadow: 'none' }}
                      _placeholder={{ color: 'brand.textMid', opacity: 0.6 }}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontFamily="uiFont" color="brand.textDark" fontSize="sm" fontWeight="600">
                    Email
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MdOutlineEmail} color="brand.textMid" />
                    </InputLeftElement>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ bg: 'white', borderColor: 'brand.primary', boxShadow: 'none' }}
                      _placeholder={{ color: 'brand.textMid', opacity: 0.6 }}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="message" fontFamily="uiFont" color="brand.textDark" fontSize="sm" fontWeight="600">
                    Message
                  </FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    resize="none"
                    bg="brand.bg"
                    border="1px solid"
                    borderColor="brand.border"
                    fontFamily="bodyFont"
                    _focus={{ bg: 'white', borderColor: 'brand.primary', boxShadow: 'none' }}
                    _placeholder={{ color: 'brand.textMid', opacity: 0.6 }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  bg="brand.accent"
                  color="brand.textDark"
                  fontWeight="700"
                  fontFamily="uiFont"
                  width="full"
                  size="lg"
                  borderRadius="8px"
                  isLoading={submitting}
                  loadingText="Sending..."
                  _hover={{ bg: 'brand.accentDark', transform: 'translateY(-1px)' }}
                  transition="all 0.2s ease"
                  shadow="md"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
        </Box>
      </Box>

      <CallToActionBanner />
    </Box>
  );
}

const ContactInfoItem = ({ icon, text }) => (
  <Flex align="flex-start" gap={4}>
    <Box
      w={9} h={9}
      bg="whiteAlpha.200"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      mt="1px"
    >
      <Icon as={icon} color="brand.accent" w={4} h={4} />
    </Box>
    <Text color="whiteAlpha.900" fontSize="sm" fontFamily="bodyFont" lineHeight="tall" mt={2}>
      {text}
    </Text>
  </Flex>
);
