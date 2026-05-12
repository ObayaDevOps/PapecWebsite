import { chakra, Box, Flex, Stack, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CallToActionBanner({
  title = "Don't Leave it to Chance",
  subtitle = "Take your School to the Next Level!",
} = {}) {
  const textColor = useColorModeValue('purple.700', 'white');
  const headingColor = useColorModeValue('purple.900', 'gray.100');

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box>
        <Box
          w={{ md: "3xl", lg: "5xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={headingColor}
            fontFamily="bodyFont"
            textAlign="left"
          >
            <chakra.span display="block">{title}</chakra.span>
            <chakra.span
              display="block"
              bgClip="text"
              bgGradient="linear(to-r, purple.900, purple.300)"
              pr={10}
            >
              {subtitle}
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
            <Button
              as={NextLink}
              href="/info/contact-enquiry"
              colorScheme="whiteAlpha"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              shadow="lg"
              border="1px"
              rounded="6px"
              borderColor="purple"
              textColor={textColor}
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              fontFamily="bodyFont"
            >
              Talk to us Today
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
