import { chakra, Box, Flex, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FadeUp } from './utils/scrollReveal';

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

export default function CallToActionBanner({
  title = "Don't Leave it to Chance",
  subtitle = "Take your School to the Next Level!",
} = {}) {
  return (
    <Box
      w="full"
      bg="brand.primary"
      backgroundImage={GRAIN}
      backgroundSize="200px"
    >
      <FadeUp>
      <Flex
        px={{ base: 6, md: 16, lg: 24 }}
        py={{ base: 14, lg: 20 }}
        w="full"
        maxW="7xl"
        mx="auto"
        alignItems={{ base: "flex-start", lg: "center" }}
        justifyContent={{ base: "flex-start", lg: "space-between" }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 8, lg: 4 }}
      >
        <chakra.h2
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          lineHeight="shorter"
          fontFamily="headingFont"
          textAlign="left"
        >
          <chakra.span display="block" color="white">
            {title}
          </chakra.span>
          <chakra.span display="block" color="brand.accent">
            {subtitle}
          </chakra.span>
        </chakra.h2>

        <Stack direction={{ base: "column", sm: "row" }} flexShrink={0}>
          <Button
            as={NextLink}
            href="/info/contact-enquiry"
            bg="brand.accent"
            color="brand.textDark"
            fontWeight="700"
            fontFamily="uiFont"
            size={{ base: "md", sm: "lg" }}
            px={{ base: 5, sm: 8 }}
            borderRadius="6px"
            _hover={{ bg: "brand.accentDark", transform: "translateY(-2px)" }}
            transition="all 0.2s ease"
            shadow="lg"
          >
            Talk to us Today
          </Button>
        </Stack>
      </Flex>
      </FadeUp>
    </Box>
  );
}
