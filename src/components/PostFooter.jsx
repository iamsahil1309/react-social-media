import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../assets/constants";

const PostFooter = ({username ,isProfilePage}) => {
  const [liked, setliked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setliked(false);
      setLikes(likes - 1);
    } else {
      setliked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box my={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box cursor={"pointer"} fontSize={18} onClick={handleLike}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={1}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
     {!isProfilePage && (
      <>
       <Text fontSize={"sm"} fontWeight={700}>
        {username}{" "}
        <Text as="span" fontWeight={400}>
          feelin good!
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        view all 10 comments
      </Text>
      </>
     )}

      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"full"}
        gap={2}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
