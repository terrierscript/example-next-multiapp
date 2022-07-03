import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'


export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.APP_MODE === "subapp") {
    return {
      redirect: {
        destination: "/subapp",
        statusCode: 301
      }
    }
  }
  return {
    redirect: {
      destination: "/mainapp",
      statusCode: 301
    }
  }
}

export default function Home() {
  return null
}
