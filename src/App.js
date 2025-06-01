import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
    </Router>
  </div>;
};

export default App;
