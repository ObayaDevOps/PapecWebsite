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
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import NextImage from 'next/image';
import papecLogo from '../../public/images/icon/People__Potential-Logo_Full_Color-1.png';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box w="full" position="sticky" top={0} zIndex={100}>
      <Flex
        bg={scrolled ? 'white' : 'rgba(255,255,255,0.92)'}
        backdropFilter="blur(8px)"
        boxShadow={scrolled ? 'md' : 'sm'}
        transition="box-shadow 0.3s ease, background 0.3s ease"
        w="full"
        py={{ base: 2 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        mx="auto"
        borderBottom="1px solid"
        borderColor="brand.primaryDark"
      >
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant="ghost"
          aria-label="Toggle Navigation"
          display={{ base: 'flex', lg: 'none' }}
          color="brand.primary"
        />

        <chakra.a
          href="/"
          title="Papec Home Page"
          display="flex"
          alignItems="center"
          position={{ base: 'absolute', lg: 'static' }}
          left={{ base: '50%', lg: 'auto' }}
          transform={{ base: 'translateX(-50%)', lg: 'none' }}
        >
          <NextImage
            src={papecLogo}
            width={113}
            height={42}
            alt="People and Potential Consultancy"
          />
        </chakra.a>

        <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center" gap={2}>
          <DesktopNav />
          <Button
            as={NextLink}
            href="/education/courses/course-booking-form"
            bg="brand.accent"
            color="brand.textDark"
            fontWeight="600"
            fontFamily="uiFont"
            size="sm"
            px={5}
            borderRadius="6px"
            _hover={{ bg: 'brand.accentDark', transform: 'translateY(-1px)' }}
            transition="all 0.2s ease"
            ml={2}
          >
            Book a Course
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const router = useRouter();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {NAV_ITEMS.map((navItem) => {
        const isActive =
          navItem.href === router.pathname ||
          (navItem.children &&
            navItem.children.some((c) => c.href === router.pathname));

        return (
          <Box key={navItem.label}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Link
                  px={3}
                  py={2}
                  display="block"
                  fontSize="sm"
                  href={navItem.href ?? '#'}
                  fontWeight={600}
                  fontFamily="uiFont"
                  color={isActive ? 'brand.primary' : 'brand.textDark'}
                  borderBottom={isActive ? '2px solid' : '2px solid transparent'}
                  borderColor={isActive ? 'brand.accent' : 'transparent'}
                  _hover={{ color: 'brand.primary', textDecoration: 'none' }}
                  transition="color 0.2s ease"
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border="1px solid"
                  borderColor="brand.border"
                  shadow="xl"
                  bg={popoverContentBgColor}
                  p={4}
                  rounded="xl"
                  minW="sm"
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      role="group"
      display="block"
      p={2}
      href={href}
      rounded="lg"
      _hover={{ bg: 'brand.bg', textDecoration: 'none' }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .2s ease"
            _groupHover={{ color: 'brand.primary' }}
            fontWeight={500}
            fontFamily="uiFont"
            color="brand.textDark"
            fontSize="sm"
          >
            {label}
          </Text>
          {subLabel && (
            <Text fontSize="xs" color="brand.textMid" fontFamily="uiFont">
              {subLabel}
            </Text>
          )}
        </Box>
        <Flex
          transition="all .2s ease"
          transform="translateX(-8px)"
          opacity={0}
          _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="brand.accent" w={4} h={4} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ lg: 'none' }} borderBottom="1px solid" borderColor="brand.border">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        as={NextLink}
        href="/education/courses/course-booking-form"
        bg="brand.accent"
        color="brand.textDark"
        fontWeight="600"
        fontFamily="uiFont"
        size="md"
        borderRadius="6px"
        mt={2}
      >
        Book a Course
      </Button>
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
        justify="space-between"
        align="center"
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600} fontFamily="uiFont" color="brand.textDark" fontSize="sm">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={5}
            h={5}
            color="brand.primary"
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft="2px solid"
          borderColor="brand.accent"
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                fontFamily="uiFont"
                fontSize="sm"
                color="brand.textMid"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'About Us',
    children: [
      {
        label: 'Who We Are',
        subLabel: 'Vision and Purpose',
        href: '/who-we-are',
      },
      {
        label: 'Why Choose Us?',
        subLabel: 'What makes us different',
        href: '/why-choose-us',
      },
      {
        label: 'Consultant Profiles',
        subLabel: 'Meet our team',
        href: '/consultant-profile',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'School Start Up',
        subLabel: 'Getting you going',
        href: '/school-startup',
      },
      {
        label: 'School Development',
        subLabel: 'Moving you forward',
        href: '/school-development',
      },
    ],
  },
  {
    label: 'Courses',
    href: '/course-list',
    children: [
      {
        label: 'Course List & Booking',
        subLabel: 'Choose your speciality',
        href: '/course-list',
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/info/contact-enquiry',
  },
];
