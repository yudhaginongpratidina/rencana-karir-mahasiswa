import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer'

import Input from '../components/elements/Input'
import AlertMessage from '../components/elements/AlertMessage'

const AdminPekerjaan = (props) => {

    const navigate = useNavigate();
    const { kode } = useParams();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const resetMessages = () => {
        setError('');
        setSuccess('');
    }

    if (kode) {
        useEffect(() => {
            const getPekerjaanByKode = async () => {
                try {
                    const response = await axios.get(`http://195.35.8.190:4001/api/pekerjaan/${kode}`)
                    const { data } = response.data
                    setName(data.name)
                    setDescription(data.description)
                } catch (error) {
                    setError
                }
            }
            getPekerjaanByKode()
        }, [kode])
    }

    const createPekerjaan = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post("http://195.35.8.190:4001/api/pekerjaan", {
                name        : name,
                description : description
            })

            resetMessages();
            if (response) setSuccess(response.data.msg);
            setTimeout(() => { navigate('/admin/data/pekerjaan') }, 2000);
        } catch (error) {
            resetMessages();
            setError(error.response.data.msg);
        }
    }

    const updatePekerjaan = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.patch(`http://195.35.8.190:4001/api/pekerjaan/${kode}`, {
                name        : name,
                description : description
            })

            resetMessages();
            if (response) setSuccess(response.data.msg);
            setTimeout(() => { navigate('/admin/data/pekerjaan') }, 2000);
        } catch (error) {
            resetMessages();
            setError(error.response.data.msg);
        }
    }


    const {panelName, panelLink, nameButton} = props;

    return (
        <Admin>
            
            <div className='my-2 px-3'>
                {error && <AlertMessage type="error" message={error} color="red" />}
                {success && <AlertMessage type="success" message={success} color="green" />}
            </div>

            <PanelContainer panelName={panelName} panelLink={panelLink} nameButton={nameButton}>
                <div className='py-3 px-4 mt-5'>
                    <h1 className='text-center font-medium'>Data Pekerjaan</h1>
                    <form className='w-full border max-w-2xl mx-auto mt-4 px-4 py-5 rounded' onSubmit={ panelName === 'Tambah Pekerjaan' ? createPekerjaan : updatePekerjaan }>
                        
                        <Input type="text" name="Name" placeholder="Name Pekerjaan" value={name} onChange={(e) => setName(e.target.value)} />


                        <div className='mt-2'>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Deskripsi Pekerjaan</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description"  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
                        </div>


                        { panelName === 'Tambah Pekerjaan' ? (
                            <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>Tambah Data</button>
                        ) : (
                            <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>Update Data</button>
                        )}
                    </form>
                </div>
            </PanelContainer>
        </Admin>
    )
}

export default AdminPekerjaan