// LIBRARY
import useSWR, { useSWRConfig } from 'swr';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


// TEMPLATE, ELEMENT, COMPONENT
import PanelContainer from './PanelContainer';
import Admin from './template/Admin';
import Button from './elements/Button';
import AlertMessage from './elements/AlertMessage';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

const DataKriteria = () => {

    // INIT
    const navigate = useNavigate();
    const { mutate } = useSWRConfig()

    // USE STATE
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // SUPPORT FUNCTION
    const resetMessage = () =>  setSuccess('') && setError('')

    // NAVIGASI
    const TambahKriteria = () => navigate('/admin/kriteria/tambah')

    // INTEGRASI API
    const getDataKriteria = async () => {
        try {
            const response = await axios.get('http://195.35.8.190:4001/api/kriteria')
            return response.data.data
        } catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }

    const deleteDataKriteria = async (kode) => {
        try {
            const response = await axios.delete(`http://195.35.8.190:4001/api/kriteria/${kode}`)

            if(response) {
                mutate('kriteria')
                resetMessage();
                setSuccess(response.data.msg)
            }
        } catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }


    // PARSING
    const { data } = useSWR('kriteria', getDataKriteria)

    // console.log(data)

    return (
        <Admin>

            <div className='px-2 py-4'>
                {error && <AlertMessage type="error" message={error} color="red" />}
                {success && <AlertMessage type="success" message={success} color="green" />}
            </div>

            <PanelContainer panelName="Data Kriteria" panelLink="/admin/data" nameButton="Kembali">
                 <div className='w-full py-3'>
                    <Button type="button" name="Tambah Data Baru" color="blue" onClick={TambahKriteria} />
                 </div>

                 <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-3">No</th>
                                <th scope="col" className="px-6 py-3">Kode Kriteria</th>
                                <th scope="col" className="px-6 py-3">Kriteria</th>
                                <th scope="col" className="px-6 py-3">Update</th>
                                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((kriteria, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b">
                                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                                            <td className="px-6 py-4">{kriteria.kode}</td>
                                            <td className="px-6 py-4">{kriteria.name}</td>
                                            <td className="px-6 py-4">{formatDistanceToNow(parseISO(kriteria.updatedAt), { addSuffix: true, locale: id })}</td>
                                            <td className="px-6 py-4 flex gap-2">
                                                <Button name="Hapus" color="red" onClick={() => deleteDataKriteria(kriteria.kode)} variant="w-full" />
                                                <Link to={`/admin/kriteria/${kriteria.kode}/edit`} className='w-full px-2 py-3 bg-blue-500 text-white text-center'>Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                 </table>
            </PanelContainer>
        </Admin>
    )
}

export default DataKriteria