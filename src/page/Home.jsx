import React from 'react'
import Navbars from '../component/Navbars'
import Hero from '../component/Hero'
import Slider from '../component/Slider'
import Covers from '../component/Covers'
import Itemscard from '../component/Itemscard'
import Offercard from '../component/Offercard'
import Footer from '../component/Footer'
import MainApp from '../component/MainApp'


function Home() {
  return (
   <>
    <Navbars></Navbars>
    <Hero></Hero>
    <Slider></Slider>
    <Covers></Covers>
    <MainApp></MainApp>
    <Offercard></Offercard>
    <Footer></Footer>
   </>
  )
}

export default Home