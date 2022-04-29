import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import { Router } from './routes';
import { loadProducts } from './store/modules/products/actions';
import { products } from './db/database';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts(products));
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
