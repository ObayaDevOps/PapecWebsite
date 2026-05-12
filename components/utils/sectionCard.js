import { Box } from '@chakra-ui/react';

export default function SectionCard({ children, ...rest }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      borderColor="purple.500"
      shadow="xl"
      padding={8}
      mx={{ md: 10, lg: 20 }}
      background="whiteAlpha.700"
      my={{ base: 16, md: 20, lg: 20 }}
      {...rest}
    >
      {children}
    </Box>
  );
}
