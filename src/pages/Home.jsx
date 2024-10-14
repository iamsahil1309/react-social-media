import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feeds from '../components/Feeds'
// import SuggestedUsers from '../components/SuggestedUsers'

const Home = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feeds/>
        </Box>
        <Box flex={3} mr={20} display={{base:"none", lg:"block"}} maxW={"300px"}  >
          {/* <SuggestedUsers/> */}
        </Box>
      </Flex>
    </Container>
  )
}

export default Home
