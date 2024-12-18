import { Box, Container,Text, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../hooks/useGetFeedPosts'

const Feeds = () => {
   
    const {isLoaing, posts} = useGetFeedPosts()


  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoaing && [0,1,2].map((_,index) => (
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size={10} />
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"} />
                        <Skeleton height={"10px"} w={"200px"} />
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"400px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
       
      {!isLoaing && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post = {post} />)}

      {!isLoaing && posts.length === 0 && (
        <>
        <Text fontSize={"md"} color={"red.400"}>
            Damnn, Looks like you don&apos;t have any friends.
        </Text>
        <Text color={"red.400"}>Stop Coding and go make some!</Text>
        </>
      )}
    
    </Container>
  )
}

export default Feeds
