
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
import Note from './Note.js';
import History from './History.js';
import Firsthistory from './Firsthistory.js';
import Secondhistory from './Secondhistory.js';
import Firstnote from './Firstnote.js';
import Secondnote from './Secondnote.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<ScrollToTOP />}  >
      <Route index element={<Home />} />
      <Route errorElement={<Error />} />
       <Route path='/*' element={<Missing />} />
      <Route path='/weblify' element={<Weblify />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/note' element={<Note />} >
        <Route index element={<Firstnote />} />
        <Route path='/note/:id' element={<Secondnote />} />
      </Route>
      <Route path='/history' element={<History />} >
        <Route index element={<Firsthistory />} />
        <Route path='/history/:id' element={<Secondhistory />} />

      </Route>

      <Route path='/demo' element={<Demo />} />
      <Route path='/cart/:id' element={<Cart />} >
        <Route index element={<Shopcart />} />
        <Route path='/cart/:id/checkout' element={<Checkout />}  />
        <Route path='/cart/:id/complete' element={<Complete />} />


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
