import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { store } from './store'
import { light } from './themes'

import 'react-toastify/dist/ReactToastify.min.css';
import './global.css';
import './index.css';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={light} >
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
