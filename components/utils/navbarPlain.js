import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  Container,
  useDisclosure,
  VStack,
  Center,
  IconButton,
  CloseButton,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import NextLink from 'next/link'

import NextImage from 'next/image'
import papecLogo from '../../public/images/icon/People__Potential-Logo_Full_Color-1.png'



export default function WithSubnavigation(){
  const bg = useColorModeValue("purple.200", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        background="rgba(192,192,192,0.1)"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        border={'1px'}
        borderColor="purple"
        // boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>


      >
        <Container maxW={'7xl'}>
          <Flex alignItems="center" justifyContent={{base:"space-between", lg: "center"}} mx="auto">

            <Flex  display={{ base: "none", lg: "inline-flex" }}>
                <chakra.a
                  href="/"
                  title="Papec Home Page"
                  display="flex"
                  alignItems="center"
                >
                  <Flex >
                    <NextImage src={ papecLogo } width={1065/8} height={397/8}  />
                  </Flex>
                </chakra.a>
              </Flex>


              <HStack display="flex" alignItems="center" spacing={1}>
                  <Box display={{ base: "inline-flex", md: "flex", lg: "none" }}>


                  </Box>
              </HStack>


            <Flex  display={{ base: "inline-flex", lg: "none" }}>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <Flex  ml={{base: '-63vw', md: '-53vw'}}>
                  <NextImage src={ papecLogo } width={1065/7} height={397/7}  />
                </Flex>
              </chakra.a>
            </Flex>      
          </Flex>
        </Container>

      </chakra.header>
    </React.Fragment>
  );
};
