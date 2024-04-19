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


export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | People and Potential Consultancy</title>
        <meta name="description" content="People and Potential Consultancy" />
        <link rel="shortcut icon" href="../../../images/icon/logo-black.svg"></link>
      </Head>

      <Box bg={'blackAlpha.200'}>
        <LandingPageTop />
        
        {/* <Features1 />

        <CallToActionBanner />

        <QualificationCard /> */}
      </Box>

    </div>
  )
}
