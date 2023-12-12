import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer'

import Input from '../components/elements/Input'
import AlertMessage from '../components/elements/AlertMessage'

const AdminBidang = (props) => {

    const navigate = useNavigate();
    const { kode } = useParams();

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const resetMessages = () => {
        setError('');
        setSuccess('');
    }

    const createBidang = async (e) => {
        try {
            e.preventDefault();
            
            const response = await axios.post("http://localhost:4000/api/bidang", {
                name        : name
            })

            if (response) {
                resetMessages();
                setSuccess(response.data.msg);
                setTimeout(() => { navigate('/admin/data/bidang') }, 2000);
            }

        } catch (error) {
            resetMessages();
            setError(error.response.data.msg);
        }
    }


    if (kode) {
        useEffect(() => {
            const getBidangByKode = async () => {
                try {
                    const response = await axios.get(`http://localhost:4000/api/bidang/${kode}`)
                    const { data } = response.data
                    setName(data.name)
                } catch (error) {
                    setError
                }
            }
            getBidangByKode()
        }, [kode])
    }

    const updatedBidang = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.patch(`http://localhost:4000/api/bidang/${kode}`, {
                name        : name
            })

            if (response) {
                resetMessages();
                setSuccess(response.data.msg);
                setTimeout(() => { navigate('/admin/data/bidang') }, 2000);
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
                <div className='py-3 px-4 mt-5'>
                    <h1 className='text-center font-medium'>Data Bidang Pekerjaan</h1>

                    <form className='w-full border max-w-2xl mx-auto mt-4 px-4 py-5 rounded' onSubmit={ panelName === 'Tambah Bidang' ? createBidang : updatedBidang }>
                        <Input type="text" name="Bidang Pekerjaan"  placeholder="Bidang Pekerjaan" value={name} onChange={(e) => setName(e.target.value)}/>

                        { panelName === 'Tambah Bidang' ? (
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

export default AdminBidang