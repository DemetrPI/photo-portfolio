import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import theme from "./theme";
import Footer from "./components/Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box>
        <Navbar />

        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
