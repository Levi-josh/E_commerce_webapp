
import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import ScrollToTOP from './ScrollToTOP.js';
import Shopcart from './Shopcart.js';
import Complete from './Complete.js';
import Checkout from './Checkout.js';
import Weblify from './Weblify.js';
import Demo from './Demo.js';
import Contact from './Contact.js';
import About from './About.js';
import Product from './Product.js';
import Login from './Login.js';
import Logout from './Logout.js';
import Missing from './Missing.js';
import Error from './Error.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<ScrollToTOP />} >
      <Route path='*' element={<Missing />} />
      <Route errorElement={<Error />} />
      <Route index element={<Home />} />
      <Route path='/weblify' element={<Weblify />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />

      <Route path='/demo' element={<Demo />} />
      <Route path='/cart' element={<Cart />} >
        <Route index element={<Shopcart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart/complete' element={<Complete />} />


      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
    </Route>

  ));


  return (
    <RouterProvider router={router} />
  )
}

export default App;
