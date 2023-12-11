import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';


import Admin from './template/Admin';
import PanelContainer from './PanelContainer';

const ViewMessage = () => {

    // const { id } = useParams();

    const userId = useParams().id

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [time, setTime] = useState('')


    if (id) {
        useEffect(() => {
            const getMessageById = async () => {
                try {
                    const response = await axios.get(`http://localhost:4000/api/messages/${userId}`)
                    const { data } = response.data
                    setEmail(data.email)
                    setSubject(data.subject)
                    setMessage(data.message)
                    setTime(formatDistanceToNow(parseISO(data.createdAt), { addSuffix: true, locale: id }))
                    
                } catch (error) {
                    console.log(error)
                }
            }
            getMessageById()
        }, [])
    }


    return (
        <Admin>
            <PanelContainer panelName="Detail Pesan" panelLink="/admin/message" nameButton="Kembali">
                <div className='py-2 px-4 border mt-3'>
                    <div className='my-3'>
                        <h1 className='text-2xl font-bold'> { subject } </h1>
                        <p className='text-sm'> From : { email } | { time } </p>

                        <hr className='mt-3' />
                    </div>
                    <div className='my-3'>
                        <p className='text-sm'>{message}</p>
                    </div>
                </div>
            </PanelContainer>
        </Admin>
    )
}

export default ViewMessage