import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Router } from './routes';
import { loadProducts } from './store/modules/products/actions';
import { loadProducts as loadCart } from './store/modules/cart/actions';
import { products } from './db/database';
import { themes } from './themes'

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme)

  useEffect(() => {
    dispatch(loadProducts(products));


    const localCart = localStorage.getItem('@kenzieShop:cart')
    if (localCart) {
      dispatch(loadCart(JSON.parse(localCart)))
    }
  }, [dispatch])

  return (
    <ChakraProvider theme={themes[theme]} >
      <Box minH='100vh' bg='primary.0'>
        <ToastContainer theme={theme} />
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
