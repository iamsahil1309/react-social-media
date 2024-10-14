import { Grid, VStack, Skeleton,Flex,Text, Box, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../hooks/useGetUserPost";

const ProfilePosts = () => {
  const {isLoading, posts} = useGetUserPosts()

  const noPostsFound = !isLoading && posts.length === 0
  if(noPostsFound) return <NoPostsFound />

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrpapped</Box>
            </Skeleton>
          </VStack>
        ))}
        {!isLoading && (
          <>
            {posts.map((post) => (
              <ProfilePost post={post} key={post.id} />
            ))}
          </>
        )}
    </Grid>
  );
};

export default ProfilePosts;


const NoPostsFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2x1"}>No Posts Found🫣</Text>
    </Flex>
  );
}