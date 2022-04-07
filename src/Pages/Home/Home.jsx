import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home