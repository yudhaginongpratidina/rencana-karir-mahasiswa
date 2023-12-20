import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer'

import Input from '../components/elements/Input'
import AlertMessage from '../components/elements/AlertMessage'

const AdminKriteria = (props) => {

    const navigate = useNavigate();
    const { kode } = useParams();

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const resetMessages = () => {
        setError('');
        setSuccess('');
    }

    const createKriteria = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post("http://195.35.8.190:4001/api/kriteria", {
                name        : name
            })

            if (response) {
                resetMessages();
                setSuccess(response.data.msg);
                setTimeout(() => { navigate('/admin/data/kriteria') }, 2000);
            }
        } catch (error) {
            setError(error.response.data.msg);
        }
    }


    if (kode) {
        useEffect(() => {
            const getKriteriaByKode = async () => {
                try {
                    const response = await axios.get(`http://195.35.8.190:4001/api/kriteria/${kode}`)
                    const { data } = response.data
                    setName(data.name)
                } catch (error) {
                    setError
                }
            }
            getKriteriaByKode()
        }, [kode])
    }

    const updateKriteria = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.patch(`http://195.35.8.190:4001/api/kriteria/${kode}`, {
                name        : name
            })

            if (response) {
                resetMessages();
                setSuccess(response.data.msg);
                setTimeout(() => { navigate('/admin/data/kriteria') }, 2000);
            }
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
                <h1 className='text-center font-medium'>Data Kriteria</h1>

                    <form className='w-full border max-w-2xl mx-auto mt-4 px-4 py-5 rounded' onSubmit={ panelName === 'Tambah Kriteria' ? createKriteria : updateKriteria }>
                        <Input type="text" name="Kriteria"  placeholder="Kriteria" value={name} onChange={(e) => setName(e.target.value)}/>

                        { panelName === 'Tambah Kriteria' ? (
                            <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>Tambah Data</button>
                        ) : (
                            <button type='submit' className='w-full bg-blue-500 text-white mt-3 py-2'>Update Data</button>
                        )}

                    </form>
            </PanelContainer>
        </Admin>
    )
}

export default AdminKriteria