import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Matter from 'matter-js';

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LogInPage from "./pages/LogInPage";
import StorePage from './pages/StorePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';




export default function App() {
  
  return (

   
    <div className="App">
      <> <Header />
      
      <div className='container'>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
      </>
     <header className="App-header">
          
      </header>
     <Footer />
    </div>
  );
}

