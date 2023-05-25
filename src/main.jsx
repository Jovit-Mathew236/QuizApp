import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// import QuizHolder from './context/QuizHolder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <BrowserRouter> */}
        {/* <QuizHolder> */}
          <App />
        {/* </QuizHolder> */}
      {/* </BrowserRouter> */}
    </ChakraProvider>
  </React.StrictMode>,
)
