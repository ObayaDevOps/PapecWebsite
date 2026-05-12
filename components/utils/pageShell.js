import { Box } from '@chakra-ui/react';

export default function PageShell({ children, ...rest }) {
  return (
    <Box bg="white" w="full" {...rest}>
      {children}
    </Box>
  );
}
