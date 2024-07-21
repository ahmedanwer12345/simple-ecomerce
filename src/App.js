import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Navbar from './component/Navbar';
import {Routes , Route} from 'react-router-dom' ;
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/simple-ecomerce" element={<Home />} />
      <Route  exact path="/products"  element={<Products />} />
      <Route exact path="/products/:id"  element={<Product />} />
      <Route exact path="/cart"  element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
