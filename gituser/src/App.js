import React from 'react';
import GitHubCard from './Components/GitHubCard';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './Components/Header';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <GitHubCard/>
    </ChakraProvider>
  );
}

export default App;
