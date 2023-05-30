import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Services, AllProducts } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/all-products" element={<AllProducts />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
