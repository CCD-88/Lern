import ProductsPage from './pages/Products/products';
import BasketPage from './pages/Basket/basket';
import Product from './pages/Product/product';
import PageNotFound from './pages/PageNotFound/pageNotFound';
import { Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
      <Routes>

            <Route path="/" element={<ProductsPage />} />
            <Route path="Basket" element={<BasketPage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
