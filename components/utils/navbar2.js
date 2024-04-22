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

        <Flex alignItems="center" justifyContent="space-between" mx="auto">

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
            <HStack
              spacing={6}
              mr={1}
              color="purple.700"
              display={{ base: "none", lg: "inline-flex" }}
            >

              <Button
              variant="outline"
              colorScheme='black'
              borderRadius='3px'
              boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')}


              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/#' passHref>
                About Us 
                </NextLink>
              </Button>

              <Button
              variant="outline"
              colorScheme='black'
              borderRadius='3px'
              boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')}
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/#' passHref>
                Services
                </NextLink>
              </Button>

              {/* <Button
              variant="ghost"
              variant="outline"
              colorScheme='black'
              borderRadius='3px'
              boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')}
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/past-work/client-testimonials' passHref>
                Client Testimonials
                </NextLink>
              </Button> */}

              <Button
              variant="outline"
              colorScheme='black'
              borderRadius='3px'
              boxShadow={useColorModeValue('1px 1px 0 black', '6px 6px 0 cyan')}
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/info/contact-enquiry' passHref>
                Contact Us
                </NextLink>
              </Button>

            
            </HStack>
            <Box display={{ base: "inline-flex", md: "flex", lg: "none" }}>
              <IconButton
                display={{ base: "flex", md: "flex", lg:"none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="purple.300"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={0}
                bg={'purple.100'}
                zIndex={999}
                spacing={3}
                w="100%"
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />


                <Button
                w="full"
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/#' passHref>
                About Us
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/#' passHref>
                Services
                </NextLink>
              </Button>

              <Button
              variant="ghost"
              _hover={{ bg:'green.50', textColor: 'green.400'}}
              >
                <NextLink href='/#' passHref>
                Contact Us
                </NextLink>
              </Button>

              </VStack>
            </Box>
          </HStack>


          <Flex  display={{ base: "inline-flex", lg: "none" }}>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Flex  ml={{base: '-60vw', md: '-53vw'}}>
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
