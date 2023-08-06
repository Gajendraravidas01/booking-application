import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import PropertyList from '../../components/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties'
import MailList from '../../components/MailList'
import Footer from '../../components/Footer'

const home = () => {
  return (
    <div  className='home'>
      <Navbar/>
      <Header/>
      <div className="homecontainer">
        <Featured/>
        <h1 className='hometitle'>browse by property type</h1>
        <PropertyList/>
        <h1 className='hometitle'>Homes guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home