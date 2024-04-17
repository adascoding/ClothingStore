import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useFetch } from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`products/${id}`)

  console.log(data);
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
      {loading && <li>Loading...</li>}
          {error && <li>Error: {error.message}</li>}
          {data ? (
            <>
                <p>Title: {data.attributes.title}</p>
                <p>Description: {data.attributes.description || 'No description'}</p>
                <p>Price: {data.attributes.price}</p>
                </>
            
          ) : (
            <div>No products</div>
          )}
      <Footer />
    </>
  );
};

export default Product;
