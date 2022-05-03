import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './App.css';

import { Router } from './routes';
import { loadProducts } from './store/modules/products/actions';
import { loadProducts as loadCart } from './store/modules/cart/actions';
import { products } from './db/database';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts(products));

    const localCart = localStorage.getItem('@kenzieShop:cart')
    if (localCart) {
      dispatch(loadCart(JSON.parse(localCart)))
    }
  }, [dispatch])

  return (
    <div className="App">
      <ToastContainer theme='light' />
      <Router />
    </div>
  );
}

export default App;
