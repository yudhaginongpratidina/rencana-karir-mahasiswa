import React from 'react'
import Navabar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Tentang from '../components/Tentang'
import ArticleLIst from '../components/ArticleLIst'
import Review from '../components/Review'
import Tim from '../components/Tim'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navabar />
      <Jumbotron/>
      <Tentang/>
      <ArticleLIst/>
      <Review/>
      <Tim/>
      <Footer />
    </div>
  )
}

export default Home