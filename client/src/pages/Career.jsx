import React from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

const Career = () => {
  return (
    <div>
        <Navbar />
        <Jumbotron />
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
          <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
            <h2 className="text-2xl text-center font-bold text-gray-900">{" "}FORM CEK KARIR{" "}</h2>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Career