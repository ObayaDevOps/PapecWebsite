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
  
  
  import Image from 'next/image'

  import NavBar from '../components/utils/navbar3'
  import SeoHead from '../components/utils/seoHead'
  import CallToActionBanner from '../components/callToActionBanner'
  import PageShell from '../components/utils/pageShell'
  import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../src/sanity/lib/client.js'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}


export async function getStaticProps() {
  const servicesSchoolDevelopmentPageContent = await client.fetch(`
    *[_type == "servicesSchoolDevelopment"][0]
  `);

  return {
    props: {
      servicesSchoolDevelopmentPageContent,
    },
    revalidate: 10, // In seconds
  };
}

  
  export default function SchoolDevelopmentPageComponent({ servicesSchoolDevelopmentPageContent }) {
    const { 
      title, 
      heading, 
      introduction, 
      image1, 
      whereToBegin, 
      reviewProcessHeading, 
      reviewProcess, 
      developmentPrioritiesHeading, 
      developmentPriorities, 
      callToAction 
    } = servicesSchoolDevelopmentPageContent;

    const imageUrl = urlFor(image1).url();
    const { width, height } = getImageDimensions(image1);

    return (
      <Box>
        <SeoHead title={title} />

        <NavBar />
  
        <PageShell>
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
                                display={{base: "block"}}
                                w="full"
                                bgClip="text"
                                bgGradient='linear(to-r, blackAlpha.800, purple.500)'
                                fontWeight="extrabold"
                                transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(120%)", }}
                                py={6}>
                                {heading}
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
                        {introduction}
                        </chakra.h2>
                    </Box>
  
                    <VisionPurposeContent whereToBegin={whereToBegin} imageUrl={imageUrl} width={width} height={height} />
  
    
  
                    <ReviewContent reviewProcessHeading={reviewProcessHeading} reviewProcess={reviewProcess} />
                        


                    <NextStepsContent developmentPrioritiesHeading={developmentPrioritiesHeading} developmentPriorities={developmentPriorities} />

  
  
                    <CallToActionBanner title={callToAction?.title} subtitle={callToAction?.subtitle} />

                </Flex>
        </PageShell>
    </Box>
    )
  }
  
  const VisionPurposeContent = ({ whereToBegin, imageUrl, width, height }) => {
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
                    src={imageUrl}
                    width={width}
                    height={height}
                    alt="School Development"
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
                  {whereToBegin}
                </Text>
            </Box>  
  
              
           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>        
    )
  }
  
  
  const ReviewContent = ({ reviewProcessHeading, reviewProcess }) => {
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
         {reviewProcessHeading}
       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 1}}  >
         {/* <Center > */}
            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717496641/PP2_vgac0v.jpg'}
                    width={1366}
                    height={500}
                    alt="Review Process"
                    />
            </Box>
        {/* </Center> */}
  
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={6}>
                {reviewProcess.map((item, index) => (
                    <SolutionsListItem key={index} text={item} />
                ))}
           </SimpleGrid>
         </Box>
       </SimpleGrid>
       </Box>
       
     </Box>
    )
  }
  

  const NextStepsContent = ({ developmentPrioritiesHeading, developmentPriorities }) => {
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
         {developmentPrioritiesHeading}
       </Text>
  
       <Box  >
       <SimpleGrid columns={{base: 1, md:1, lg: 1}}  >
         {/* <Center > */}
            <Box overflow='hidden' m={{base: 2, md: 6}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074277/PP-Website-Banner-7_cz77xw.jpg'}
                    width={1366}
                    height={500}
                    alt="Development Priorities"
                    />
            </Box>
        {/* </Center> */}
  
         <Box  mt={2} mb={{lg:20}} >
           <SimpleGrid columns={1} spacing={6}>
                {developmentPriorities.map((item, index) => (
                    <SolutionsListItem key={index} text={item} />
                ))}
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
  
  
  
  
