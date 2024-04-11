import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductList() {
  const { category } = useParams();
  return (
    <>
      <Navbar />
      <h2>Product List</h2>
      <p>{category ? `Products for category: ${category}` : 'All Products'}</p>
      <Footer />
    </>
  )
}
