import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'

const Career = () => {

  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');

  const CekKarir = async (e) => {
    e.preventDefault();
    console.log(`Question 1 : ${question1} dan Question 2 : ${question2} dan Question 3 : ${question3} dan Question 4 : ${question4} dan Question 5 : ${question5}`);
  }

  return (
    <div>
        <Navbar />
        <Jumbotron />
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
          <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
            <h2 className="text-2xl text-center font-bold text-gray-900">{" "}FORM CEK KARIR{" "}</h2>
            <form className="mt-8 space-y-6" onSubmit={CekKarir}>

              <div className="mb-6">
                <label htmlFor="question1" className="block mb-2 text-sm font-medium text-gray-900">Apakah Anda mempunyai pengalaman Organisasi ?</label>
                <select 
                  id="question1"
                  value={question1}
                  onChange={(e) => setQuestion1(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected value="">-- Pilih Jawaban Mu --</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="question2" className="block mb-2 text-sm font-medium text-gray-900">Keterampilan atau keahlian apa yang Anda miliki saat ini ?</label>
                <select 
                  id="question2" 
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected value="">-- Pilih Jawaban Mu --</option>
                  <option value="Desain Grafis">Desain Grafis</option>
                  <option value="Penulis dan Penerjemah">Penulis dan Penerjemah</option>
                  <option value="Web dan Pemrograman">Web dan Pemrograman</option>
                  <option value="Visual dan Audio">Visual dan Audio</option>
                  <option value="Pemasaran dan Periklanan">Pemasaran dan Periklanan</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="question3" className="block mb-2 text-sm font-medium text-gray-900">Apakah anda memiliki pengalaman kerja atau magang sebelumnya ?</label>
                <select 
                  id="question3"
                  value={question3}
                  onChange={(e) => setQuestion3(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected value="">-- Pilih Jawaban Mu --</option>
                  <option value="Ya">Ya</option>
                  <option value="Tidak">Tidak</option>
                </select>
              </div>


              <div className="mb-6">
                <label htmlFor="question4" class="block mb-2 text-sm font-medium text-gray-900">Apakah anda suka bekerja secara mandiri atau bekerja bersama tim ?</label>
                <select 
                  id="question4"
                  value={question4}
                  onChange={(e) => setQuestion4(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected value="">-- Pilih Jawaban Mu --</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="Bersama Tim">Bersama Tim</option>
                  <option value="Keduanya">Keduanya</option>
                </select>
              </div>


              <div className="mb-6">
                <label htmlFor="question5" class="block mb-2 text-sm font-medium text-gray-900">Apakah anda suka bekerja dirumah atau dikantor ?</label>
                <select 
                  id="question5"
                  value={question5}
                  onChange={(e) => setQuestion5(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected value="">-- Pilih Jawaban Mu --</option>
                  <option value="WFH">Di Rumah</option>
                  <option value="WFO">Di Kantor</option>
                  <option value="HYBRID">Keduanya</option>
                </select>
              </div>

              <button type="submit" className='w-full bg-blue-700 text-white py-3 px-4 rounded-lg'>Cari Tahu Sekarang</button>

            </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Career