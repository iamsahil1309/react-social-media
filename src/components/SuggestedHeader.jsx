import { Avatar, Flex, Button, Text } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuthStore from "../store/authStore";

const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore((state) => state.user)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"md"} src={authUser.profilepicURL} />
        </Link>

        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        onClick={handleLogout}
        isLoading={isLoggingOut}
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
