'use client'

import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'

import img from '../../../public/images/PP-Website-Banner-9.jpeg'

export default function CardBorder(props) {
  const [liked, setLiked] = useState(false)

  return (
    <Center py={{lg:'10vh'}}>
      <Box
        w={{base:"xs", md: "sm"}}
        h={{base:"sm", md: "md"}}
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        // background="rgba(192,192,192,0.35)"
        bgGradient='linear(to-br, purple.200, purple.100)'


        border={'1px'}
        borderColor="purple"
        boxShadow={useColorModeValue('6px 6px 0 gray', '6px 6px 0 cyan')}
        transition="0.3s ease-in-out"
        _hover={{
          transform: 'scale(1.05)',
        }}
        >
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              props.img
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}

          />
        </Box>
        <Box p={4} pb={{base: 4, md:28}}>
          {/* <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              React
            </Text>
          </Box> */}
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {props.title}
          </Heading>
          <Text color={'grey.800'} noOfLines={2}>
            {props.subtitle}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
        </HStack>
      </Box>
    </Center>
  )
}