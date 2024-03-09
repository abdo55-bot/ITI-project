import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products';
import LogIn from './components/login';
import AdminProducts from './components/adminproducts';
import Home from './components/home';
import './App.css';
import DetailsProducts from './components/showdetails';
import DeleteProduct from './components/deleteproduct';
import AddProduct from './components/addproduct';
import EditeProduct from './components/editeproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login'  element={<LogIn/>}/>
        <Route path='/adminproducts' element={<AdminProducts/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/productdetails/:id' element={<DetailsProducts/>}/>
        <Route path='/deleteproduct/:id' element={<DeleteProduct/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/editeproduct/:id' element={<EditeProduct/>}/>


      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
