import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import AlertMessage from '../components/elements/AlertMessage';
import axios from 'axios';
import useSWR from 'swr';
import Button from '../components/elements/Button';

const Career = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [answers, setAnswers] = useState({});

  const resetMessage = () => {
    setSuccess('');
    setError('');
  };

  const getBidang = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/bidang');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg);
    }
  };

  const getKriteria = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/kriteria');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg);
    }
  };

  const { data: bidang } = useSWR('bidang', getBidang);
  const { data: kriteria } = useSWR('kriteria', getKriteria);

  const handleInputChange = (field, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Mendapatkan bidang yang dipilih
      const bidangTerpilih = answers['bidang'];

      // Mendapatkan kriteria yang dipilih
      const kriteriaTerpilih = kriteria
        .filter((k) => answers[k.kode] === 'Ya')
        .map((k) => k.kode)
        .join(',');

      // setSuccess(response.data.msg);
      // setSuccess('Jawaban telah berhasil disubmit');

      console.log('Bidang yang Dipilih:', bidangTerpilih);
      console.log('Kriteria yang Dipilih:', kriteriaTerpilih);

      const response = await axios.post('http://localhost:4000/api/rules/check', {
        kodeBidang : bidangTerpilih,
        kodeKriteria : kriteriaTerpilih
      })

      if (response) {
        resetMessage();
        setSuccess(response.data.msg);
        console.log(response.data.data);
      }
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl text-center font-bold text-gray-900">FORM CEK KARIR</h2>
          <hr />

          <form className="w-full max-w-lg">
            {/* Dropdown Bidang */}
            <h1 className='font-medium text-lg text-center'>Bidang</h1>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bidang">
                Apa bidang yang kamu sukai
              </label>
              <select
                id="bidang"
                name="bidang"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleInputChange('bidang', e.target.value)}
              >
                <option value="">Pilih Bidang yang Kamu Sukai</option>
                {bidang &&
                  bidang.map((b) => (
                    <option key={b.kode} value={b.kode}>
                      {b.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Looping Kriteria dalam bentuk radio button */}
            <h1 className='font-medium text-lg text-center'>Kriteria</h1>
            {kriteria &&
              kriteria.map((k) => (
                <div key={k.kode} className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={k.kode}>
                    {k.name}
                  </label>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name={k.kode}
                        value="Ya"
                        onChange={() => handleInputChange(k.kode, 'Ya')}
                        required
                      />
                      <span className="ml-2">Ya</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio text-red-600"
                        name={k.kode}
                        value="Tidak"
                        onChange={() => handleInputChange(k.kode, 'Tidak')}
                        required
                      />
                      <span className="ml-2">Tidak</span>
                    </label>
                  </div>
                </div>
              ))}

            <Button type="submit" name="Lihat Hasil" color="blue" variant="w-full" onClick={handleSubmit} />
          </form>

          <div>
            {error && <AlertMessage type="error" message={error} color="red" />}
            {success && <AlertMessage type="success" message={success} color="green" />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
