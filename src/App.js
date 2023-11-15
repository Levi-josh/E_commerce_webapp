
import './App.css';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import ScrollToTOP from './ScrollToTOP.js';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<ScrollToTOP />} >
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Route>

  ));


  return (
    <RouterProvider router={router} />
  )
}

export default App;
