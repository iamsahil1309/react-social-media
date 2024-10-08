import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const Feeds = () => {
    const [isLoaing, setIsLoading]  = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },2000)
    },[])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoaing && [0,1,2,3,4].map((_,index) => (
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size={10} />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"} />
                        <Skeleton height={"10px"} w={"200px"} />
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
       
       {!isLoaing && (
        <>
         <FeedPost img='/img1.png' username='hima' avatar='/img1.png'/>
        <FeedPost img='/img2.png' username='james' avatar='/img2.png'/>
        <FeedPost img='/img3.png' username='yuqi' avatar='/img3.png'/>
        </>
       )}
    
    </Container>
  )
}

export default Feeds
