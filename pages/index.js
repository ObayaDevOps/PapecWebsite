import Head from 'next/head'
import {  Box, Icon, useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import LandingPageTop from '../components/landingPage/landingPageTop'

import Features1 from '../components/features/features1'
import Features2 from '../components/features/features2'
import Features3 from '../components/features/features3'

import ProjectCards from '../components/projectCard'

import QualificationCard from '../components/qualificationCard'


import Image from 'next/image'
import CallToActionBanner from '../components/callToActionBanner'

import client from '../sanityClient'


  export async function getStaticProps() {
    const landingPageContent = await client.fetch(`
    *[_type == "landingPage"]`);

    return {
      props: {
        landingPageContent,
      },
      revalidate: 10, //In seconds
    };
  }
  


export default function Home(props) {
  return (
    <div >
      <Head>
        <title>Home | Tax Edge Advisory</title>
        <meta name="description" content="Tax Edge Advisory Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/logo-black.svg"></link>
      </Head>

      <Box bg={'blackAlpha.200'}>
        <LandingPageTop pageContent={props.landingPageContent} />
        
        <Features1 pageContent={props.landingPageContent} />

        <CallToActionBanner pageContent={props.landingPageContent} />

        <QualificationCard pageContent={props.landingPageContent} />
      </Box>

    </div>
  )
}
