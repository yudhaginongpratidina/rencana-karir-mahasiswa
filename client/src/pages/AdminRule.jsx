import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

import Admin from '../components/template/Admin';
import PanelContainer from '../components/PanelContainer';
import AlertMessage from '../components/elements/AlertMessage';

const AdminRule = (props) => {
  const navigate = useNavigate();
  const { kode } = useParams();
  console.log(`kode : ${kode}`);

  const [kodeBidang, setKodeBidang] = useState('');
  const [kodePekerjaan, setKodePekerjaan] = useState('');
  const [kodeKriteria, setKodeKriteria] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const resetMessage = () => setSuccess('') && setError('');

  const getBidang = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/bidang');
      return response.data.data;
    } catch (error) {
      console.error(error);
      setError(error.response?.data.msg || 'Failed to fetch data');
    }
  };

  const getPekerjaan = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/pekerjaan');
      return response.data.data;
    } catch (error) {
      console.error(error);
      setError(error.response?.data.msg || 'Failed to fetch data');
    }
  };

  const getKriteria = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/kriteria');
      return response.data.data;
    } catch (error) {
      console.error(error);
      setError(error.response?.data.msg || 'Failed to fetch data');
    }
  };

  const { data: bidang } = useSWR('bidang', getBidang);
  const { data: pekerjaan } = useSWR('pekerjaan', getPekerjaan);
  const { data: kriteria } = useSWR('kriteria', getKriteria);

  const handleInputChange = (field, value) => {
    setKodeKriteria((prevRules) => ({ ...prevRules, [field]: value }));
  };

  const createRule = async (e) => {
    try {
      e.preventDefault();
      console.log(`kode bidang : ${kodeBidang}`);
      console.log(`kode pekerjaan : ${kodePekerjaan}`);
      const kriteriaKeys = Object.keys(kodeKriteria);
      const kriteria = kriteriaKeys.join(',');
      console.log(`kriteria : ${kriteria}`);

      const response = await axios.post('http://localhost:4000/api/rules', {
        kodeBidang: kodeBidang,
        kodePekerjaan: kodePekerjaan,
        kodeKriteria: kriteria,
      });

      if (response) {
        resetMessage();
        setSuccess(response.data.msg);
        setTimeout(() => {
          navigate('/admin/data/rule');
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data.msg || 'Failed to create rule');
    }
  };

  useEffect(() => {
    const getRuleByKode = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/rules/${kode}`);
        const { data } = response.data;
        setKodeBidang(data.kodeBidang);
        setKodePekerjaan(data.kodePekerjaan);
        // const kriteriaMap = data.kodeKriteria.reduce((acc, curr) => ({ ...acc, [curr]: true }), {});
        // setKodeKriteria(kriteriaMap);
      } catch (error) {
        console.error(error);
        setError(error.response?.data.msg || 'Failed to fetch rule data');
      }
    };
    if (kode) {
      getRuleByKode();
    }
  }, [kode]);

  const updateRule = async (e) => {
    try {
        e.preventDefault();

        const kriteriaKeys = Object.keys(kodeKriteria);
        console.log(`kriteriaKeys : ${kriteriaKeys}`);
        console.log(`Kode Bidang : ${kodeBidang}`);
        console.log(`Kode Pekerjaan : ${kodePekerjaan}`);
    } catch (error) {
        setError(error.response?.data.msg || 'Failed to update rule');
    }
  };

  const { panelName, panelLink, nameButton } = props;

  return (
    <Admin>
      <div className='my-2 px-3'>
        {error && <AlertMessage type='error' message={error} color='red' />}
        {success && <AlertMessage type='success' message={success} color='green' />}
      </div>

      <PanelContainer panelName={panelName} panelLink={panelLink} nameButton={nameButton}>
        <div className='py-3 px-4 mt-5'>
          <h1 className='text-center font-medium'>Data Rule</h1>

          <form
            className='w-full border max-w-2xl mx-auto mt-4 px-4 py-5 rounded'
            onSubmit={panelName === 'Tambah Rule' ? createRule : updateRule}
          >
            <div className='my-2'>
              <label className='block text-gray-700 text-sm font-bold mb-2 mt-3' htmlFor='bidang'>
                Pilih Bidang Pekerjaan
              </label>
              <select className='w-full px-3 py-2 border rounded' name='bidang' id='bidang' onChange={(e) => setKodeBidang(e.target.value)}>
                <option value={kodeBidang}>{bidang && bidang.find((b) => b.kode === kodeBidang)?.name || 'Pilih Bidang Pekerjaan'}</option>
                {bidang &&
                  bidang.map((bidang, index) => (
                    <option key={index} value={bidang.kode}>
                      {bidang.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className='my-2'>
              <label className='block text-gray-700 text-sm font-bold mb-2 mt-3' htmlFor='pekerjaan'>
                Pilih Pekerjaan
              </label>
              <select className='w-full px-3 py-2 border rounded' name='pekerjaan' id='pekerjaan' onChange={(e) => setKodePekerjaan(e.target.value)}>
                <option value={kodePekerjaan}>{pekerjaan && pekerjaan.find((p) => p.kode === kodePekerjaan)?.name || 'Pilih Pekerjaan'}</option>
                {pekerjaan &&
                  pekerjaan.map((pekerjaan, index) => (
                    <option key={index} value={pekerjaan.kode}>
                      {pekerjaan.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className='my-2 py-3'>
              <h1 className='text-center font-medium'>Kriteria</h1>
              <div className='py-2 px-3'>
                <hr />
                <ul className='px-3 py-2'>
                  {kriteria &&
                    kriteria.map((k) => (
                      <li key={k.kode}>
                        {k.kode} - {k.name}
                      </li>
                    ))}
                </ul>
                <hr />
              </div>
              <div className='grid grid-cols-6'>
                {kriteria &&
                  kriteria.map((k) => (
                    <div key={k.kode} className='mb-6 mt-4'>
                      <div className='w-full grid grid-cols-2 my-2'>
                        <label className='inline-flex items-center'>
                          <input
                            type='checkbox'
                            className='form-checkbox text-indigo-600'
                            name={k.kode}
                            value={k.kode}
                            onChange={(e) => handleInputChange(k.kode)}
                          />
                          <span className='ml-2'>{k.kode}</span>
                        </label>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {panelName === 'Tambah Rule' ? (
              <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>
                Tambah Data
              </button>
            ) : (
              <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>
                Update Data
              </button>
            )}
          </form>
        </div>
      </PanelContainer>
    </Admin>
  );
};

export default AdminRule;