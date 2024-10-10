import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavBar = !user && !loading && pathname !== "/auth";

  if(!user && loading) return <PageLayoutSpinner/>

  return (
    <Flex flexDirection={canRenderNavBar ? "column" : "row"}>
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {/* NavBar */}
      {canRenderNavBar ? <Navbar/> : null}

      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;

const PageLayoutSpinner = () => {
  return(
    <Flex flexDir={"column"} h={"100vh"} alignItems={"cenetr"} justifyContent={"center"} >
      <Spinner size={"xl"} />
    </Flex>
  )
}