import { useNavigate } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import React, { useState } from 'react';
import axios from 'axios';

import Admin from './template/Admin';
import PanelContainer from './PanelContainer';
import Button from './elements/Button';
import AlertMessage from './elements/AlertMessage';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

const DataRule = () => {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const resetMessage = () => {
    setSuccess('');
    setError('');
  };

  const TambahRule = () => navigate('/admin/rule/tambah');

  const getRule = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/rules');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response?.data?.msg || 'An error occurred while fetching rules.');
    }
  };

  const getBidang = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/bidang');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response?.data?.msg || 'An error occurred while fetching bidang.');
    }
  };

  const getPekerjaan = async () => {
    try {
      const response = await axios.get('http://195.35.8.190:4001/api/pekerjaan');
      return response.data.data;
    } catch (error) {
      resetMessage();
      setError(error.response?.data?.msg || 'An error occurred while fetching pekerjaan.');
    }
  };

  const deleteDataRule = async (kode) => {
    try {
      const response = await axios.delete(`http://195.35.8.190:4001/api/rules/${kode}`);
      if (response) {
        resetMessage();
        mutate('rule');
        setSuccess(response.data.msg);
      }
    } catch (error) {
      resetMessage();
      setError(error.response.data.msg)
    }
  }

  const { data: bidang } = useSWR('bidang', getBidang);
  const { data: pekerjaan } = useSWR('pekerjaan', getPekerjaan);
  const { data: rule } = useSWR('rule', getRule);

  return (
    <Admin>
      <div className='px-2 py-4'>
        {error && <AlertMessage type="error" message={error} color="red" />}
        {success && <AlertMessage type="success" message={success} color="green" />}
      </div>

      <PanelContainer panelName="Data Rule" panelLink="/admin/data" nameButton="Kembali">
        <div className='w-full py-3'>
          <Button type="button" name="Tambah Data Baru" color="blue" onClick={TambahRule} />
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 w-3">No</th>
              <th scope="col" className="px-6 py-3">Rule</th>
              <th scope="col" className="px-6 py-3">Bidang</th>
              <th scope="col" className="px-6 py-3">Pekerjaan</th>
              <th scope="col" className="px-6 py-3">Kriteria</th>
              <th scope="col" className="px-6 py-3">Update</th>
              <th scope="col" className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rule &&
              rule.map((ruleItem, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{ruleItem.kode}</td>
                  <td className="px-6 py-4">{bidang && bidang.find((b) => b.kode === ruleItem.kodeBidang)?.name}</td>
                  <td className="px-6 py-4">{pekerjaan && pekerjaan.find((p) => p.kode === ruleItem.kodePekerjaan)?.name}</td>
                  <td className="px-6 py-4">{ruleItem.kodeKriteria}</td>
                  <td className="px-6 py-4">{formatDistanceToNow(parseISO(ruleItem.updatedAt), { addSuffix: true, locale: id })}</td>
                  <td className="px-6 py-4 text-center flex gap-3 justify-center">
                    <Button type="button" name="Edit" color="blue" onClick={() => navigate(`/admin/rule/${ruleItem.kode}/edit`)} />
                    <Button type="button" name="Hapus" color="red" onClick={() => deleteDataRule(ruleItem.kode)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </PanelContainer>
    </Admin>
  );
};

export default DataRule;
