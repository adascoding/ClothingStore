import React from 'react'
import Navbar from '../components/Navbar'
import SpecialSale from '../components/SpecialSale'
import Main from '../components/Main'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <SpecialSale/>
        <Navbar/>
        <Main/>
        <Slider/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
