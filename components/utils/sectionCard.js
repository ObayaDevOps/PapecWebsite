import { Box } from '@chakra-ui/react';

export default function SectionCard({ children, ...rest }) {
  return (
    <Box
      borderRadius="xl"
      shadow="lg"
      bg="white"
      padding={8}
      mx={{ md: 4, lg: 8 }}
      my={{ base: 6, md: 8 }}
      {...rest}
    >
      {children}
    </Box>
  );
}
