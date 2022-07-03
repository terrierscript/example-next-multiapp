import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import React, { FC, PropsWithChildren } from "react"

const SubappLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Stack>
    <Box bg="blue.100">Sub app</Box>
    <Box>
      {children}
    </Box>
  </Stack>
}

const MainappLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Stack>
    <Box bg="red.100">Main app</Box>
    <Box>
      {children}
    </Box>
  </Stack>
}

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const router = useRouter()
  if (router.pathname.startsWith("/subapp")) {
    return <SubappLayout>
      {children}
    </SubappLayout>
  }

  return <MainappLayout>
    {children}
  </MainappLayout>

}

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ChakraProvider>
}

export default App
