// LIBRARY
import useSWR, { useSWRConfig } from 'swr';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';



// TEMPLATE, ELEMENT, COMPONENT
import PanelContainer from './PanelContainer';
import Admin from './template/Admin';
import Button from './elements/Button';
import AlertMessage from './elements/AlertMessage';


const DataPekerjaan = () => {

    // INIT
    const navigate = useNavigate();
    const { mutate } = useSWRConfig()

    // USE STATE
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // SUPPORT FUNCTION
    const resetMessage = () =>  setSuccess('') && setError('')

    // ITEGRASI API
    const getDataPekerjaan = async () => {
        try {
            const response = await axios.get('http://195.35.8.190:4001/api/pekerjaan')
            return response.data.data
        } 
        catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }


    const deleteDataPekerjaan = async (kode) => {
        try {
            const response = await axios.delete(`http://195.35.8.190:4001/api/pekerjaan/${kode}`)
            if (response) {
                mutate('pekerjaan')
                resetMessage();
                setSuccess(response.data.msg)
            }
        } 
        catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }


    const TambahPekerjaan = () => navigate('/admin/pekerjaan/tambah')


    // PARSING DATA
    const { data } = useSWR('pekerjaan', getDataPekerjaan)


    return (
        <Admin>

            <div className='px-2 py-4'>
                {error && <AlertMessage type="error" message={error} color="red" />}
                {success && <AlertMessage type="success" message={success} color="green" />}
            </div>

            <PanelContainer panelName="Data Pekerjaan" panelLink="/admin/dashboard" nameButton="Kembali">
                <div className='w-full py-3'>

                    <Button type="button" name="Tambah Data Baru" color="blue" onClick={TambahPekerjaan} />

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-3">No</th>
                                <th scope="col" className="px-6 py-3">Kode Pekerjaan</th>
                                <th scope="col" className="px-6 py-3">Nama Pekerjaan</th>
                                <th scope="col" className="px-6 py-3">Update</th>
                                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data?.map((pekerjaan, index) => (
                                <tr key={index} className="bg-white border-b  hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                                    <td className="px-6 py-4">{pekerjaan.kode}</td>
                                    <td className="px-6 py-4">{pekerjaan.name}</td>
                                    <td className="px-6 py-4">{ formatDistanceToNow(parseISO(pekerjaan.updatedAt), { addSuffix: true, locale: id }) }</td>
                                    <td className="px-6 py-4 flex gap-2">
                                    <Button name="Hapus" color="red" onClick={() => {deleteDataPekerjaan(pekerjaan.kode)}} variant="w-full" />
                                    <Link to={`/admin/pekerjaan/${pekerjaan.kode}/edit`} className='w-full px-2 py-3 bg-blue-500 text-white text-center'> Edit </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </PanelContainer>

        </Admin>
        
    )
}

export default DataPekerjaan