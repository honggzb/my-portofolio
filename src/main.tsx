import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/poppins/700.css'

import "./locales/i18n-config.tsx";

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import { myTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
