import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
 return(
  <ChakraProvider>
    <BrowserRouter>
      <h1>yahya</h1>
    </BrowserRouter>
  </ChakraProvider>
 )
}

export default App
