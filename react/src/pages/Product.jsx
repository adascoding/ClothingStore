import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Product = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div>
        <h2>Error</h2>
        <p>Product is not selected.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <Footer />
    </>
  );
};

export default Product;
