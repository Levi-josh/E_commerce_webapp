
import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import ScrollToTOP from './ScrollToTOP.js';
import Shopcart from './Shopcart.js';
import Complete from './Complete.js';
import Checkout from './Checkout.js';
import Weblify from './Weblify.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<ScrollToTOP />} >

      <Route index element={<Home />} />
      <Route path='/weblify' element={<Weblify />} />
      <Route path='/cart' element={<Cart />} >
        <Route index element={<Shopcart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart/complete' element={<Complete />} />


      </Route>
    </Route>

  ));


  return (
    <RouterProvider router={router} />
  )
}

export default App;
