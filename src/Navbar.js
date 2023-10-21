import React from "react";
import Hero from "./components/Hero";
import HorizontalGallery from "./components/HorizontalGallery";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contacts";
import MobileNav from "./components/MobileNav";
import SideBarContent from "./components/SideBarContent";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Hero />
        {/* Main content  */}
        <HorizontalGallery />
        <Carousel />
        <Testimonials />
        <Contact />
      </Box>
    </Box>
  );
}

export default Navbar;
