
import './App.css';
import Header from './components/header';
import Main from './components/body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products';
import Product from './orderTypes/product';
import CartProvider from './store/cartProvider';
import OrderPage from './orderTypes/orderPage';
import OrderPlaced from './orderTypes/orderPlaced';
import AllOrders from './orderTypes/allorders';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/order-success' element={<OrderPlaced />}  />
            <Route path='/all-orders' element={<AllOrders />}  />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
