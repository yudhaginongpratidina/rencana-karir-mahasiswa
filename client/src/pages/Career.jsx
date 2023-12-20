import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom'



import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import AlertMessage from '../components/elements/AlertMessage';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';

const Career = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [answers, setAnswers] = useState({});
  const [resultData, setResultData] = useState(null);

  const resetMessage = () => setSuccess('') && setError('');

  const getBidang = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/bidang');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg);
    }
  };

  const getPekerjaan = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/pekerjaan');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg);
    }
  };

  const getKriteria = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/kriteria');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg);
    }
  };

  const { data: bidang } = useSWR('bidang', getBidang);
  const { data: kriteria } = useSWR('kriteria', getKriteria);
  const { data: pekerjaan } = useSWR('pekerjaan', getPekerjaan);


  const handleInputChange = (field, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [field]: value,}));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!name || !gender) {
        resetMessage();
        setError('Nama dan jenis kelamin harus diisi');
        return;
      }

      if (!answers['bidang']) {
        resetMessage();
        setError('Bidang harus diisi');
        return;
      }

      const bidangTerpilih = answers['bidang'];
      const kriteriaTerpilih = kriteria
        .filter((k) => answers[k.kode] === 'Ya')
        .map((k) => k.kode)
        .join(',');

      const getRule = await axios.post('http://195.35.8.190:4001/api/rules/check', {
        kodeBidang: bidangTerpilih,
        kodeKriteria: kriteriaTerpilih,
      });

      if (getRule) {
        resetMessage();
        setSuccess(getRule.data.msg);
      }

      const { data } = getRule;
      setResultData(data.data);

      // console.log(data.data.id);
    } catch (error) {
      resetMessage();
      setError(error.getRule.data.msg);
    }
  };


  const handleKembali = (e) => {
    e.preventDefault();
    
    if (resultData && resultData.length > 0) {
      const resultItem = resultData[0];

      // console.log(`Name: ${name}`);
      // console.log(`Gender: ${gender}`);
      // console.log(`Bidang Pekerjaan: ${bidang && bidang.find((b) => b.kode === resultItem.kodeBidang).name}`);
      // console.log(`Nama Pekerjaan: ${pekerjaan && pekerjaan.find((p) => p.kode === resultItem.kodePekerjaan).name}`);
      // console.log(`Deskripsi Pekerjaan: ${pekerjaan && pekerjaan.find((p) => p.kode === resultItem.kodePekerjaan).description}`);
      
      // console.log('Kriteria:');
      kriteria &&
        resultItem.kodeKriteria.split(',').forEach((kode) => {
          const kriteriaItem = kriteria.find((k) => k.kode === kode);
          // console.log(`${kriteriaItem.kode} - ${kriteriaItem.name}`);
        });

      const response = axios.post('http://195.35.8.190:4001/api/history', {
        name : name,
        gender : gender,
        bidangPekerjaan : bidang && bidang.find((b) => b.kode === resultItem.kodeBidang).name,
        pekerjaan : pekerjaan && pekerjaan.find((p) => p.kode === resultItem.kodePekerjaan).name,
      })

      if (response) {
        resetMessage();
        setSuccess("Data tersimpan");
        setTimeout(() => { navigate('/home'); }, 2000);
      }
    } else {
      console.log('No result data available');
    }
  };
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0">
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl text-center font-bold text-gray-900">FORM CEK KARIR</h2>
          <hr />

          <div className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Catatan</span>
                <ul className="mt-1.5 list-disc list-inside">
                  <li>Isi identitas diri anda dengan benar</li>
                  <li>Jawab semua pertanyaan dengan benar dan sesuai dengan kondisi anda sekarang</li>
              </ul>
            </div>
          </div>

          <form className="w-full max-w-2xl my-4 overflow-hidden">
            <div className='font-medium text-lg mb-4'> 
              <h1 className='font-medium text-lg'>Identitas Diri</h1> <hr />
              <Input type="text" name="Nama" placeholder="Masukkan Nama" value={name} onChange={(e) => setName(e.target.value)} />
              <div className="mb-4">
                <hr />
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-3" htmlFor="gender">Pilih Jenis Kelamin</label>
                <select id="gender" name="gender" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setGender(e.target.value)}>
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <h1 className='font-medium text-lg'>Kategori Bidang Pekerjaan</h1> <hr />
              <label className="block text-gray-700 text-sm font-bold mb-2 mt-3" htmlFor="bidang">Apa bidang yang kamu sukai</label>
              <select id="bidang" name="bidang" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => handleInputChange('bidang', e.target.value)}>
                <option value="">Pilih Bidang yang Kamu Sukai</option>
                {bidang && bidang.map((b) => (<option key={b.kode} value={b.kode}>{b.name}</option>))}
              </select>
            </div>

            <div className='mb-4'>
              <h1 className='font-medium text-lg'>Kriteria</h1><hr />
              {kriteria &&
                kriteria.map((k, index) => (
                  <div key={k.kode} className="mb-6 mt-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={k.kode}>{`${index + 1}. ${k.name}`}</label>
                      <div className='w-full grid grid-cols-2 my-2'>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio text-indigo-600" name={k.kode} value="Ya" onChange={() => handleInputChange(k.kode, 'Ya')} required />
                          <span className="ml-2">Ya</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input type="radio" className="form-radio text-red-600" name={k.kode} value="Tidak" onChange={() => handleInputChange(k.kode, 'Tidak')} required/>
                          <span className="ml-2">Tidak</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
            </div>


            <Button type="submit" name="Lihat Hasil" color="blue" variant="w-full" onClick={handleSubmit} />
          </form>

          <div>
            {error && <AlertMessage type="error" message={error} color="red" />}
          </div>

          {/* Results Section */}
          {success && (
            <div className="mb-8">
              <h1 className="font-medium text-lg">Hasil Pengecekan</h1>
              <hr />
              <p className="text-green-600"> <AlertMessage type="success" message={success} color="green" /> </p>
              {resultData && resultData.length > 0 ? (
                <div key={resultData[0].id}>
                  <form onSubmit={handleKembali}>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className='px-6 py-3'>Keterangan</th>
                          <th scope="col" className='px-6 py-3'>Hasil</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Name</td>
                          <td scope="col" className='px-6 py-3' > {name}</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Gender</td>
                          <td scope="col" className='px-6 py-3'>{gender}</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Bidang Pekerjaan</td>
                          <td scope="col" className='px-6 py-3'>{bidang && bidang.find((b) => b.kode === resultData[0].kodeBidang).name}</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Nama Pekerjaan</td>
                          <td scope="col" className='px-6 py-3'>{pekerjaan && pekerjaan.find((p) => p.kode === resultData[0].kodePekerjaan).name}</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Deskripsi Pekerjaan</td>
                          <td scope="col" className='px-6 py-3'>{pekerjaan && pekerjaan.find((p) => p.kode === resultData[0].kodePekerjaan).description}</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td scope="col" className='px-6 py-3'>Kriteria</td>
                          <td scope="col" className='px-6 py-3'>
                            {kriteria &&
                              resultData[0].kodeKriteria.split(',').map((kode) => (
                                <li key={kode}>
                                  {kriteria.find((k) => k.kode === kode).kode} - {kriteria.find((k) => k.kode === kode).name}
                                </li>
                              ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Button type="submit" name="Kembali" color="blue" variant="w-full" />
                  </form>
                </div>
              ) : (
                <AlertMessage message="Maaf, database kami terbatas. Tidak ada pekerjaan yang ditemukan" color="yellow" />
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
