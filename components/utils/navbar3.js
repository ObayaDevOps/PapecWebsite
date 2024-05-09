import {
    Box,
    chakra,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
  } from '@chakra-ui/react';

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import NextImage from 'next/image'

  import papecLogo from '../../public/images/icon/People__Potential-Logo_Full_Color-1.png'


  import NextLink from 'next/link'
  import { MdNightlight } from 'react-icons/md';
  import Script from 'next/script'

//Dynamic Routing for NavBars: https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths


  import { FaBeer } from 'react-icons/fa';
import theme from './theme';


  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
  
    return (
      <Box w="full">
        <Flex
        background="rgba(192,192,192,0.1)"
        // background={'whiteAlpha.900'}
        // color={useColorModeValue('gray.600', 'white')}
          // minH={'60px'}
          minW="100vw"
          py={{ base: 2 }}
          px={{ base: 2, sm: 4 }}
          // align={'center'}
          alignItems="center" justifyContent="space-between" mx="auto"
          maxW={'7xl'}
          shadow="md"
          border={'1px'}
          borderColor="purple.500"

          >
          <Flex
            flex={{ base: 1, lg: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg:'none' }}
            maxW={'8xl'}

            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">

          {/* <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}> */}
          {/* <NextLink href='/#' passHref>
                <NextImage src={colorMode === 'light' ? papecLogo:  papecLogo} width={1065/7} height={397/7}/>
          </NextLink> */}


          <Flex  display={{ base: "inline-flex", lg: "inline-flex" }}>
            <chakra.a
              href="/"
              title="Papec Home Page"
              display="flex"
              // alignItems="right"
            >
              <Flex  ml={{base: '-63vw',md: '-57vw', lg: '-15vw'}}>
                <NextImage src={ papecLogo } width={1065/8} height={397/8}  />
              </Flex>
            </chakra.a>
          </Flex>

            <Flex display={{ base: 'none', lg: 'flex' }}  >
              <DesktopNav />
            </Flex>
          </Flex>
  
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('gray.100', 'gray.800');
    const { colorMode, toggleColorMode } = useColorMode()

  
    return (
      <Stack direction={'row'} spacing={4} paddingTop={1.5} w='full'>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}
          // border={'1px'}
          p={1}
          borderRadius='lg'
          borderColor='purple.500'
              fontFamily='bodyFont'
              // boxShadow={'1px 1px 0 black'}
              // _hover={{ bg:'green.500', textColor: 'green.400'}}
          >
            <Popover trigger={'hover'} placement={'bottom-start'}
            >
                <PopoverTrigger>
                  <Link
                  p={2}
                  fontSize={{lg:'md'}}
                  href={navItem.href ?? '#'}
                  fontWeight={600}
                  // color={linkColor}
                  // _hover={{ bg: colorMode === 'light' ? 'green.50': 'gray.700', textColor: 'green.400'}}
                  fontFamily={'bodyFont'}
                  textColor='purple.700'
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

  
              {navItem.children && (
                <PopoverContent
                  border={'1px'}
                  borderColor={'purple.500'}
                  shadow='xl'
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
    //   <NextLink href={href} passHref>
      <Link
        role={'group'}
        display={'block'}
        p={2}
        href={href}
        rounded={'xl'}
        _hover={{ bg: useColorModeValue('green.100', 'gray.900') }}
        >
        <Stack direction={'row'} align={'right'}>
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'green.400' }}
              fontWeight={500}
              fontFamily={'bodyFont'}
              _hover={{ color: 'green.400' }}
              textColor='purple.800'
              >
              {label}
            </Text>

            <Text 
            fontSize={'sm'}
            textColor='purple.700'
            fontFamily={'bodyFont'}
            _hover={{ color: 'green.400' }}



            >
              {subLabel}
              </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    //   </NextLink>

    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('whiteAlpha.800', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          textColor='purple.700'
          fontFamily="bodyFont"

          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('purple.800', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            textColor='purple.700'

            borderColor={useColorModeValue('green.700', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                // <NextLink href={child.href} key={child.label} passHref>
                  <Link  py={2}  fontFamily="bodyFont"
                  href={child.href} key={child.label}
                  >
                    {child.label}
                  </Link>
                // </NextLink>

              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
    //This array should take items from the Sanity List
  //use the client to fetch the list you want


  const NAV_ITEMS = [
    {
      label: 'About Us',
      children: [
        {
          label: 'Who We Are',
          subLabel: 'Vision and Purpose ',
          href: '/education/about/who-we-are',
        },
        {
          label: 'Why Choose Us?',
          subLabel: '',
          href: '/education/about/why-choose-us',
        },
        {
          label: 'Consultant Profile',
          subLabel: 'Audrey Dralega, FRSA',
          href: '/education/about/consultant-profile',
        },
      ],
    },
    {
      label: 'Services',
      children: [
        {
          label: 'School Start Up',
          subLabel: 'Getting you going',
          href: '/education/services/school-startup',
        },
        {
          label: 'School Development',
          subLabel: 'Moving you forward',
          href: '/education/services/school-development',
        },
      ],
    }, 

    {
      label: 'Professional Development',
      children: [
        {
          label: 'Course List',
          subLabel: 'Choose your speciality',
          href: '/education/courses/course-list',
        },
        {
          label: 'Course Booking Form',
          subLabel: 'Make and Enquiry',
          href: '/education/courses/booking-form',
        },
      ],
    }, 
    
    
    {
      label: 'Blog',
      children: [
        {
          label: 'Articles',
          subLabel: "Latest Papec News",
          href: '/education/blog/blog-list',
        },
      ],
    },
    { //Now need to show how to display the list of items and have links to them
      //Easy ?
      label: 'Contact Us',
      href: '/info/contact-enquiry',
    },

  ];

  

