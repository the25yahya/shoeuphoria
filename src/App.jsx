import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar'
import {Men, Women, Home, Brands, Products} from './pages'

function App() {
 return(
  <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  </ChakraProvider>
 )
}

export default App
