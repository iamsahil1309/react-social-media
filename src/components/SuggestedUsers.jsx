import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="Mew Apiras" followers={1396} avatar='/img4.png' />

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link
          href="https://github.com/iamsahil1309"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Sahil Singh
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
