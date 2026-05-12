

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
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  UnorderedList,
  ListItem,
  OrderedList
} from '@chakra-ui/react'

import { CheckIcon, ChatIcon, ArrowRightIcon } from '@chakra-ui/icons'


import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../components/utils/navbar3'
import BookingForm from './education/courses/course-booking-form'
import SeoHead from '../components/utils/seoHead'
import CallToActionBanner from '../components/callToActionBanner'
import PageShell from '../components/utils/pageShell'

export default function CoursesPageComponent() {
  return (
      <Box>
          <SeoHead title="Courses" />

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
                              Professional Development
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
                                  Courses
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
                          
                          We offer robust Professional Development (PD) courses to educators and administrators in a range of areas to help you develop systems and raise achievement.
                              </chakra.h2>
                      </Box>

                      <VisionPurposeContent />

                      {/* <CourseInfo /> */}


                      {/* <BookingFormSection /> */}


                      <CallToActionBanner />

                  </Flex>
          </PageShell>
      </Box>
  )
}


const CourseInfo = () => {
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
         textAlign='center'
         fontSize={{ base: "2xl",md: "5xl",}}
         p={{base: 4, lg:4}}
         fontFamily='bodyFont'
     >
       Select Your Area of Training:
     </Text>

     <Box ml={6}>
     <SimpleGrid columns={1} spacing={4}>
        <SolutionsListItem text="Subject Knowledge" />
        <SolutionsListItem text="Teaching and Learning Strategies" />
        <SolutionsListItem text="School Development" />
        <SolutionsListItem text="Child Development" />
        <SolutionsListItem text="Management & Finance" />
        <SolutionsListItem text="Early Childhood Education" />
        <SolutionsListItem text="Governance & Leadership" />
        <SolutionsListItem text="International Education" />
      </SimpleGrid>
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
     mx={{base: 0, md: 10,lg:20}}
     // paddingRight={12}
     background="whiteAlpha.700"
     my={{base: 16,md:20, lg: 20}}
   >
     <Text
         bgClip="text"
         bgGradient='linear(to-r, blackAlpha.800, purple.500)'
         fontWeight="extrabold"
         textAlign='left'
         fontSize={{ base: "2xl",md: "3xl",lg: "5xl"}}

         p={{base: 2, lg:4}}
         fontFamily='bodyFont'
     >
       What we Offer
     </Text>

     <Box>
       
     <SimpleGrid columns={{base: 1, md:1, lg: 1}} >

       <Box  mt={2} mb={{lg:20}} >
         <SimpleGrid columns={1} spacing={10}>
          <Box ml={{base:2, md: 6}}>
              <Text
                  textAlign='left'
                  fontSize={{ base: "sm",md: "lg",}}
                  fontFamily='bodyFont'
                  mb={4}
              >
                  Courses can be tailored to your specific needs. If you don’t see the course you need – contact us. We may be able to help.

                  Courses are divided into these main areas:
              </Text>
          </Box>  
         </SimpleGrid>

         <Box overflow='hidden' m={{base: 2, md: 2}} borderRadius={'10px'}>
            <Image
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1717074280/slider-3_yoybfu.jpg'}
                    width={1366}
                    height={520}
                    alt="Course"
                    />
            </Box>
       </Box>
     </SimpleGrid>



     {/* <Box mx={{lg:6}} >
        <TabsSection />
      </Box>  */}

<Box
      // borderWidth='1px'
      // borderRadius='xl'
      // borderColor='purple.500'
      // shadow='xl'
      //  overflow='hidden'
      padding={2}
      // mx={{md: 10,lg:20}}
      // paddingRight={12}
      background="whiteAlpha.700"
      my={{base: 16,md:12, lg: 8}}
    >
           <Text
         bgClip="text"
         bgGradient='linear(to-r, blackAlpha.800, purple.500)'
         fontWeight="extrabold"
         textAlign='left'
         fontSize={{ base: "xl",md: "3xl", lg:"5xl"}}
         p={{base: 2, lg:4}}
         mb={{base: 4}}
         fontFamily='bodyFont'
     >
       Choose Your Area of Training:
     </Text>

     <Box ml={{base:2, md:4}}>
     <SimpleGrid columns={1} spacing={4}>
        <SolutionsListItem text="Subject Knowledge" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="Teaching and Learning Strategies" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="School Development" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="Child Development" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="Management & Finance" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="Early Childhood Education" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="Governance & Leadership" href='/education/courses/course-booking-form' />
        <SolutionsListItem text="International Education" href='/education/courses/course-booking-form' />
      </SimpleGrid>
      </Box>  


      
      
    </Box>

      
     </Box>
     
   </Box>        
  )
}


const TabsSection = () => {
  return (
    <Tabs isFitted variant='enclosed' colorScheme='purple'>
      <TabList mb='1em'>
        <Tab>
          <Text fontSize={{base: 'xs', md: 'sm', lg: 'md'}} fontWeight='600' fontFamily='bodyFont'>
            Learning and Teaching
          </Text>          
        </Tab>
        <Tab>
          <Text fontSize={{base: 'xs', md: 'sm', lg: 'md'}} fontWeight='600' fontFamily='bodyFont' >
          Administration and Systems Development
          </Text>           
        </Tab>
        <Tab>
          <Text fontSize={{base: 'xs', md: 'sm', lg: 'md'}} fontWeight='600' fontFamily='bodyFont' >
          Coaching for School Leaders
          </Text> 
          </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TabSection1 />
        </TabPanel>
        <TabPanel>
          <TabSection2 />
        </TabPanel>
        <TabPanel>
          <TabSection3 />
        </TabPanel>
      </TabPanels>
  </Tabs>
  )
}

const TabSection1 = () => {
  return (
    <UnorderedList textAlign='left' fontFamily='bodyFont'>
      <ListItem >Reading from Scratch</ListItem>
      <ListItem>Mapping the Curriculum</ListItem>
      <ListItem>Effective Strategies for Primary Mathematics</ListItem>
      <ListItem>Assessment and Tracking Achievement</ListItem>
      <ListItem>Developing Writers</ListItem>
      <ListItem>Science and Maths in the Early Years</ListItem>
    </UnorderedList>
  )
}

const TabSection2 = () => {
  return (
    <UnorderedList textAlign='left' fontFamily='bodyFont'>
    <ListItem >Managing Finances and Resources</ListItem>
    <ListItem>Effective School Governance</ListItem>
    <ListItem>Strategic Planning</ListItem>
  </UnorderedList>
  )
}

const TabSection3 = () => {
  return (
    <UnorderedList textAlign='left'  fontFamily='bodyFont'>
      <ListItem >Leading a British Curriculum School</ListItem>
      <ListItem>What Makes a High Performing School?</ListItem>
      <ListItem>Team Building and Leadership</ListItem>
      </UnorderedList>
  )
}


const BookingFormSection = () => {
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
         textAlign='center'
         fontSize={{ base: "2xl",md: "5xl",}}
         p={{base: 4, lg:4}}
         fontFamily='bodyFont'
     >
       Course Booking Form
     </Text>

     <Box  >
        <BookingForm />
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
               transition="all .65s ease" _hover={{ transform: 'scale(1.03)', filter: "brightness(120%)", bg:'blackAlpha.200' }}

      // border='30px'
      // shadow={'md'}
      >
      <HStack  align={'flex-start'} >
        
        <Box color={'green.400'} px={2} 

        >
          <Icon as={CheckIcon} />
        </Box>
        <VStack align={'start'}>
          <Link href={props.href}>
            <Text color={'black'} fontWeight={200} fontSize={{base: 'lg', md:'xl'}} fontFamily='bodyFont' >{props.text}</Text>
          </Link>
        </VStack>
      </HStack>
      </Box>
  )
}



