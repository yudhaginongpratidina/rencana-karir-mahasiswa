import React from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import ArticleLIst from '../components/ArticleLIst'
import Footer from '../components/Footer'

const Artikel = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <ArticleLIst />
            <Footer/>
        </div>
    )
}

export default Artikel