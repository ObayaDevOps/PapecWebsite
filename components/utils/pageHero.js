import { Box, Heading, Text } from '@chakra-ui/react';

export default function PageHero({ category, title, subtitle }) {
  return (
    <Box
      bg="brand.primary"
      py={{ base: 12, md: 16 }}
      px={{ base: 6, md: 8 }}
      textAlign="center"
      backgroundImage="radial-gradient(circle at 10% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgba(255,255,255,0.07) 0%, transparent 40%)"
    >
      {category && (
        <Text
          color="brand.accent"
          fontWeight="600"
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="widest"
          mb={3}
          fontFamily="subtitleFont"
        >
          {category}
        </Text>
      )}
      <Heading
        as="h1"
        color="white"
        fontSize={{ base: '4xl', md: '5xl' }}
        fontFamily="headingFont"
        fontWeight="700"
        lineHeight="shorter"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          color="whiteAlpha.800"
          mt={4}
          maxW="2xl"
          mx="auto"
          fontSize={{ base: 'md', md: 'lg' }}
          fontFamily="bodyFont"
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
