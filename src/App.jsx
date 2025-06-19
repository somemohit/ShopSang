import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
