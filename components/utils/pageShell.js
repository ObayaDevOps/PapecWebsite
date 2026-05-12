import { Box, Container } from '@chakra-ui/react';

export default function PageShell({ children, containerProps, ...rest }) {
  return (
    <Box py={6} bgGradient="linear(to-br, #e5e5f7, whiteAlpha.100)" {...rest}>
      <Container
        maxW={{ base: '1xl', md: '85vw' }}
        py={6}
        bg="whiteAlpha.600"
        rounded="3xl"
        shadow="2xl"
        border="1px"
        borderColor="purple.600"
        {...containerProps}
      >
        {children}
      </Container>
    </Box>
  );
}
