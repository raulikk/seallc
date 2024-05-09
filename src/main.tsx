import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes.tsx';
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ChakraProvider theme={theme} > 
  <RouterProvider router={router} />
  </ChakraProvider>
  </React.StrictMode>,
)
