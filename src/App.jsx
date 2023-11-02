import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar'
import Loader from './Components/Loader';
import {Men, Women, Home, Brands, Products} from './pages'
import { useStateContext } from './Contexts/ContextProvider';
import Footer from './Components/Footer';

function App() {
  const {loading} = useStateContext();
 return(
  <ChakraProvider>
    <BrowserRouter>
      {loading ? <Loader /> : <div className='bg-gray-100'>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
        <Footer />
      </div>}
    </BrowserRouter>
  </ChakraProvider>
 )
}

export default App
