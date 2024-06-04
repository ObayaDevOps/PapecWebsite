

import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    Heading,
    Text,
    Stack,
    HStack,
    VStack,
    Button,
    Center,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'
  
  
  import Head from 'next/head';
  import Image from 'next/image'
  
  import NavBar from '../../../components/utils/navbar3'
  
  export default function SchoolDevelopmentPageComponent() {
    return (
        <Box>
            <Head>
                <title>School Development | People and Potential Consultancy</title>
                <meta name="description" content="People and Potential Consultancy" />
                <link rel="shortcut icon" href="../../../images/icon/People__Potential-Logo_Full_Color-2.png"></link>
  
                <meta property="og:title" content="People and Potential Consultancy" />
                <meta property="og:description" content="Professional HR Training" />
                <meta property="og:image" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
                <meta property="og:image:secure_url" content="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png" />
                <meta property="og:url" content="https://papec-website.vercel.app/" />
                <meta property="og:type" content="website" />
            
            </Head>
  
            <NavBar />
  
            <Box py={6} bgGradient='linear(to-br, #e5e5f7, whiteAlpha.100)'>
                <Container 
                    maxW={{base:'1xl',md:'85vw'}} 
                    py={6} 
                    minHeight={{md:'110vh'}}   
                    // background="rgba(240,255,244,0.55)"
                    bg='whiteAlpha.600'
                    rounded='3xl' 
                    shadow='2xl'
                    border={'1px'}
                    borderColor={'purple.600'}    
                >
                    <Flex
                        textAlign={'center'}
                        pt={10}
                        justifyContent={'center'}
                        direction={'column'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                            <chakra.h3
                            fontWeight={'bold'}
                            fontSize={20}
                            textTransform={'uppercase'}
                            color={'purple.400'}
                            fontFamily='bodyFont'
                            >
                                Services
                            </chakra.h3>
                            <Heading
                                as={'h1'}
                                mb={{base: 2, md: 10}}
                                fontSize={{ base: "5xl",md: "6xl", lg:"7xl",}}
                                minHeight={'1vh'}
                                fontWeight="bold"
                                lineHeight="none"
                                letterSpacing={{base: "normal",md: "tight" }}
                                color="purple.900"
                                textAlign='center'
                                fontFamily={'bodyFont'}>
                                <Text
                                    display={{base: "block",
                                                // lg: "inline",
                                            }}
                                    w="full"
                                    bgClip="text"
                                    bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                                    fontWeight="extrabold"
                                    transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                                    py={6}>
                                    School Development
                                </Text>
                            </Heading>
                            <chakra.h2
                            margin={'auto'}
                            width={'100%'}
                            fontWeight={'medium'}
                            fontSize={'lg'}
                            color={useColorModeValue('gray.500', 'gray.400')}
                            mt={{base:-2,md: -8, lg:-8}}
                            fontFamily={'bodyFont'}
  
                            >
                            Systematic school development planning underpins effective practice and is essential to ensuring high standards and ongoing school improvement. 
                            
                             </chakra.h2>
                        </Box>
  
                        <VisionPurposeContent />
  
    
  
                        <ReviewContent />
                        


                        <NextStepsContent />

  
  
                        <CallToAction />
  
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
  }
  
  const VisionPurposeContent = () => {
    return (
        <Box
        borderWidth='1px'
         borderRadius='xl'
        borderColor='purple.500'
        shadow='xl'
       //  overflow='hidden'
       padding={8}
       mx={{md: 10,lg:20}}
       // paddingRight={12}
       background="whiteAlpha.700"
       my={{base: 16,md:20, lg: 20}}
     >
       <Text
           bgClip="text"
           bgGradient='linear(to-r, blackAlpha.800, purple.500)'
           fontWeight="extrabold"
           textAlign='left'
           fontSize={{ base: "xl",md: "3xl",}}
           p={{base: 4, lg:4}}
           fontFamily='bodyFont'
       >
         Where to begin
       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 2}}  >
         {/* <Center > */}
            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074276/PP-Website-Banner-4_mv8poh.jpg'}
                    width={1366}
                    height={500}
                
                    
                    />
            </Box>
        {/* </Center> */}
  
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={10}>
            <Box>
                {/* <Text
                    bgClip="text"
                    bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                    fontWeight="extrabold"
                    textAlign='left'
                    fontSize={{ base: "xl",md: "3xl",}}
                    fontFamily='bodyFont'
                >
                Background
                </Text> */}
                <Text
                    textAlign='left'
                    fontSize={{ base: "sm",md: "lg",}}
                    fontFamily='bodyFont'
                >
                  The starting point for this process is to gain thorough understanding of previous and current practice. The review process is always tailored to the specific needs of the school.
                </Text>
            </Box>  
  
              
           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>        
    )
  }
  
  
  const ReviewContent = () => {
    return (
        <Box
        borderWidth='1px'
         borderRadius='xl'
        borderColor='purple.500'
        shadow='xl'
       //  overflow='hidden'
       padding={8}
       mx={{md: 10,lg:20}}
       // paddingRight={12}
       background="whiteAlpha.700"
       my={{base: 16,md:20, lg: 20}}
     >
       <Text
           bgClip="text"
           bgGradient='linear(to-r, blackAlpha.800, purple.500)'
           fontWeight="extrabold"
           textAlign='left'
           fontSize={{ base: "xl",md: "3xl",}}
           p={{base: 4, lg:4}}
           fontFamily='bodyFont'
       >
         We offer a full school review process which may include:
       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 1}}  >
         {/* <Center > */}
            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717496641/PP2_vgac0v.jpg'}
                    width={1366}
                    height={500}
                
                    
                    />
            </Box>
        {/* </Center> */}
  
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={6}>
                <SolutionsListItem text="Review of current systems and practice" />
                <SolutionsListItem text="Review of classroom practice and performance" />
                <SolutionsListItem text="Assessment processes, use of tracking data and systems for monitoring processes" />
                <SolutionsListItem text="Audit of parental, staff and children’s expectations and perceptions" />             
                <SolutionsListItem text="Lesson observation and evaluation of teaching standards" />             
                <SolutionsListItem text="Resources and financial planning for best value" />           
           
           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>
    )
  }
  

  const NextStepsContent = () => {
    return (
        <Box
        borderWidth='1px'
         borderRadius='xl'
        borderColor='purple.500'
        shadow='xl'
       //  overflow='hidden'
       padding={8}
       mx={{md: 10,lg:20}}
       // paddingRight={12}
       background="whiteAlpha.700"
       my={{base: 16,md:20, lg: 20}}
     >
       <Text
           bgClip="text"
           bgGradient='linear(to-r, blackAlpha.800, purple.500)'
           fontWeight="extrabold"
           textAlign='left'
           fontSize={{ base: "xl",md: "3xl",}}
           p={{base: 4, lg:4}}
           fontFamily='bodyFont'
       >
         The next step is the identification of priorities for development and well-targeted advice and support to ensure effective outcomes.

This may include:
       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 1}}  >
         {/* <Center > */}
            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074277/PP-Website-Banner-7_cz77xw.jpg'}
                    width={1366}
                    height={500}
                
                    
                    />
            </Box>
        {/* </Center> */}
  
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={6}>
                <SolutionsListItem text="Guidance for the Leadership Team on prioritising and planning Strategies for effective learning & teaching" />
                <SolutionsListItem text="Developing a thorough understanding of curriculum requirements and the rationale behind teaching strategies" />
                <SolutionsListItem text="Guidance on financial planning and the development of resources" />
                <SolutionsListItem text="Development of systems for assessing learning & tracking achievement" />             
                <SolutionsListItem text="Teacher development, mentoring and training" />             
                <SolutionsListItem text="Organisational structure and management" />           
                <SolutionsListItem text="Guidance on compliance to international or national standards" />           
                <SolutionsListItem text="Curriculum overview and development"/>           

           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>
    )
  }
  
  

  
  const SolutionsListItem = (props) => {
    return (
        <Box
        maxW='5xl' borderWidth='1px' borderRadius='lg' overflow='hidden'
        padding={3}
        paddingRight={{base:8,md:12}}
        // bgColor="gray.100"
        background="whiteAlpha.800"
        // border='30px'
        // shadow={'md'}
        >
        <HStack  align={'flex-start'} >
          
          <Box color={'green.400'} px={2} >
            <Icon as={CheckIcon} />
          </Box>
          <VStack align={'start'}>
            <Text color={'black'} textAlign='left' fontWeight={200} fontSize={'xl'} fontFamily='bodyFont' >{props.text}</Text>
          </VStack>
        </HStack>
        </Box>
    )
  }
  
  
  
  const CallToAction = () => {
    return (
      <Flex
      // bg="#edf3f8"
      // _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Box bg="gray.50" _dark={{ bg: "gray.800" }}> */}
      <Box>
        <Box
          // maxW={{md: '85vw', lg: '8xl'}}
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
            color="purple.900"
            fontFamily='bodyFont'
            _dark={{ color: "gray.100" }}
          >
            <chakra.span display="block">
            Don&apos;t Leave it to Chance
            </chakra.span>
            <chakra.span
              display="block"
              // color="brand.600"
              // _dark={{ color: "gray.500" }}
              bgClip="text"
            bgGradient="linear(to-r, purple.900, purple.300)"
            pr={10}
            >
              Take your School to the Next Level!
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column" }}
            mt={{ base: 8, lg: 0 }}
            flexShrink={{ lg: 0 }}
          >
                  <Button
                  as="a"
                  href="/info/contact-enquiry"
                  colorScheme="whiteAlpha"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow={'lg'}
                  border={'1px'}
                  rounded={'6px'}
                  borderColor='purple'
                  textColor={useColorModeValue('purple.700', 'white')}
  
  
                  w={{
                      base: "full",
                      sm: "auto",
                  }}
                  mb={{
                      base: 2,
                      sm: 0,
                  }}
                  size="lg"
                  cursor="pointer"
                  fontFamily='bodyFont'
  
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
    )
  }
  