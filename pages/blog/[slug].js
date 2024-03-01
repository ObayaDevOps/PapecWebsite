//this will be the template page for all exhibitions

//Link: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
//Link: How to get images : https://www.sanity.io/docs/how-queries-work#584ed2426ff5

import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Link
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'

  
import client from '../../sanityClient'
import groq from 'groq'

import Head from 'next/head'
import NextLink from 'next/link'

import ImageSlider from '../../components/utils/carousel/imageSlider'


const Exhibition = ({blogPage}) => {

    return (
    <Container maxW={'7xl'}>
      <Head>
        <title>{blogPage.authorName}: {blogPage.blogName}</title>
        <meta name="description" content="Tax Edge Advisory Webpage"  />
        <link rel="shortcut icon" href="../../public/images/icon/logo-black.svg"></link>
      </Head>


        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg:5 }}>
          <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            {/* <NextImage src={exhibitionPage.slideShowImageUrls[0]} layout='responsive' /> */}
                PUT IMAGE HERE
            {/* <ImageSlider slides={blogPage.slideShowImageUrls} /> */}
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {blogPage.authorName}: {blogPage.blogName}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {blogPage.subTitle}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    
                </Text>
                <Text fontSize={'lg'}>
                {blogPage.blogParagraphText}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                      {blogPage.blogTagList.map(feature =>
                      <ListItem key={feature}>
                        <Text as={'span'} fontWeight={'bold'}>
                            {feature}
                        </Text>
                    </ListItem>
                    )}
                  </List>
                </SimpleGrid>
              </Box>

            </Stack>
  
          </Stack>
        </SimpleGrid>
      </Container>
    )
}








export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "blogPage" && defined(slug.current)][].slug.current`
    )

    console.log("paths:")
    console.log(paths) //prints the slug - is this what I need in navbar
    //remember all this routing only works in the 'pages' directory

    //so how to get into navbar ? - navbar cannot be a page

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

const query = groq`*[_type == "blogPage" && slug.current == $slug][0]{
    artistName,
    "authorPFPUrl": authorPFP.asset->url,
    blogDate,
    blogName,
    blogParagraphText,
    blogTagList,
    subTitle,
    title
}`


export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params


    const blogPage = await client.fetch(
        query, { slug }    
    )

    console.log("RETURNR")
    console.log(blogPage)


    return {
        props: {
            blogPage
        },
        revalidate: 10, //In seconds

    }
}

export default Blog