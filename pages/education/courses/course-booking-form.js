import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  Select,
  SimpleGrid,
  Text,
  Heading,
  Flex,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlinePhone, MdCheckCircle } from 'react-icons/md';
import { FaRegCalendarCheck, FaCreditCard, FaChalkboardTeacher } from 'react-icons/fa';
import { useState } from 'react';
import NavBar from '../../../components/utils/navbar3';
import SeoHead from '../../../components/utils/seoHead';
import PageHero from '../../../components/utils/pageHero';
import CallToActionBanner from '../../../components/callToActionBanner';

const NEXT_STEPS = [
  { icon: FaRegCalendarCheck, text: 'We confirm your booking within 48 hours' },
  { icon: FaChalkboardTeacher, text: 'Course materials sent one week before the start date' },
  { icon: FaCreditCard, text: 'Invoice issued on confirmation — payment due before course begins' },
  { icon: MdCheckCircle, text: 'Certificate of completion issued on the final day' },
];

export default function CourseBookingPageComponent() {
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const userTypedData = {
      Name: e.target.name.value,
      Course: e.target.course.value,
      Email: e.target.email.value,
      Phone: e.target.phone.value,
      Participants: e.target.participantsDetails.value,
      Message: e.target.message.value,
      Payment: e.target.payment.value,
    };

    await fetch('/api/courseBooking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userTypedData),
    });

    toast({
      title: 'Booking submitted.',
      description: 'We will confirm your booking within 48 hours.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <SeoHead title="Course Booking Form" />
      <NavBar />
      <PageHero
        category="Courses"
        title="Book a Course"
        subtitle="Complete the form below and we'll confirm your booking within 48 hours."
      />

      <Box bg="brand.bg" py={{ base: 12, md: 20 }}>
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0} borderRadius="2xl" overflow="hidden" shadow="xl">

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
                What Happens Next
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
                Your journey starts here
              </Heading>
              <Text color="whiteAlpha.800" fontFamily="bodyFont" fontSize="md" mb={10} lineHeight="tall">
                Fill in the form and one of our team will be in touch to finalise the details and get you set up for your course.
              </Text>

              <VStack align="flex-start" spacing={6}>
                {NEXT_STEPS.map(({ icon, text }, i) => (
                  <Flex key={i} align="flex-start" gap={4}>
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
                    <Text color="whiteAlpha.900" fontFamily="bodyFont" fontSize="sm" lineHeight="tall">
                      {text}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            {/* Right form panel */}
            <Box bg="white" p={{ base: 8, md: 10 }}>
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>

                  <FormControl>
                    <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                      Course
                    </FormLabel>
                    <Select
                      id="course"
                      name="course"
                      placeholder="Select a course"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                    >
                      <option>[English] Reading from Scratch: EN1</option>
                      <option>[Pedagogy] International Teaching Assistant: PE1</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                      Full Name
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement color="brand.textMid">
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        bg="brand.bg"
                        border="1px solid"
                        borderColor="brand.border"
                        fontFamily="bodyFont"
                        _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                      />
                    </InputGroup>
                  </FormControl>

                  <SimpleGrid columns={2} spacing={4} w="full">
                    <FormControl isRequired>
                      <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                        Email
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement color="brand.textMid">
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          bg="brand.bg"
                          border="1px solid"
                          borderColor="brand.border"
                          fontFamily="bodyFont"
                          _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                        Phone
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement color="brand.textMid">
                          <MdOutlinePhone />
                        </InputLeftElement>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+256 ..."
                          bg="brand.bg"
                          border="1px solid"
                          borderColor="brand.border"
                          fontFamily="bodyFont"
                          _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl isRequired>
                    <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                      Participants Details
                    </FormLabel>
                    <Text fontSize="xs" color="brand.textMid" fontFamily="bodyFont" mb={2}>
                      Include phone, email and dietary requirements for each participant.
                    </Text>
                    <Textarea
                      id="participantsDetails"
                      name="participantsDetails"
                      placeholder="e.g. Jane Smith — jane@school.org — vegetarian..."
                      rows={4}
                      resize="none"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                      Message
                    </FormLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Anything else you'd like us to know"
                      rows={3}
                      resize="none"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontFamily="uiFont" fontSize="sm" fontWeight="600" color="brand.textDark">
                      Preferred Payment Method
                    </FormLabel>
                    <Select
                      id="payment"
                      name="payment"
                      placeholder="Select payment method"
                      bg="brand.bg"
                      border="1px solid"
                      borderColor="brand.border"
                      fontFamily="bodyFont"
                      _focus={{ borderColor: 'brand.primary', bg: 'white' }}
                    >
                      <option>Bank Deposit (Preferred)</option>
                      <option>Cheque</option>
                      <option>Cash Payment</option>
                      <option>Mobile Money</option>
                    </Select>
                  </FormControl>

                  <Button
                    type="submit"
                    bg="brand.accent"
                    color="brand.textDark"
                    fontWeight="700"
                    fontFamily="uiFont"
                    size="lg"
                    w="full"
                    borderRadius="8px"
                    _hover={{ bg: 'brand.accentDark', transform: 'translateY(-1px)' }}
                    transition="all 0.2s ease"
                    shadow="md"
                    isLoading={submitted}
                    loadingText="Submitting..."
                  >
                    Submit Booking
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
