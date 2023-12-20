import React, { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr';
import axios from 'axios';

import Admin from './template/Admin'
import PanelContainer from './PanelContainer'
import Button from './elements/Button';

import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

const DataHistory = () => {

    const { mutate } = useSWRConfig()
    const time = id;

    // USE STATE
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // SUPPORT FUNCTION
    const resetMessage = () =>  setSuccess('') && setError('')


    const getHistory = async () => {
        try {
            const response = await axios.get('http://195.35.8.190:4001/api/history')
            return response.data.data
        } catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }

    const deleteHistory = async (id) => {
        try {
            const response = await axios.delete(`http://195.35.8.190:4001/api/history/${id}`)
            if(response) {
                mutate('history')
                resetMessage();
                setSuccess(response.data.msg)
            }
        } catch (error) {
            resetMessage();
            setError(error.response.data.msg)
        }
    }


    // getHistory();
    const { data: history } = useSWR('history', getHistory)
    // console.log(history)

    return (
        <Admin>
            <PanelContainer panelName="Riwayat" panelLink="/admin/data/" nameButton="Kembali">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 overflow-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-3">No</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Bidang Pekerjaan</th>
                            <th scope="col" className="px-6 py-3">Pekerjaan</th>
                            <th scope="col" className="px-6 py-3 text-center">Date</th>
                            <th scope="col" className="px-6 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history?.map((history, index) => (
                            <tr key={index} className="bg-white border-b">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                                <td className="px-6 py-4">{history.name}</td>
                                <td className="px-6 py-4">{history.bidangPekerjaan}</td>
                                <td className="px-6 py-4">{history.pekerjaan}</td>
                                <td className="px-6 py-4 text-center">{formatDistanceToNow(parseISO(history.createdAt), { addSuffix: true, locale: time })}</td>
                                <td>
                                    <Button name="Hapus" color="red" onClick={() => deleteHistory(history.id)} variant="w-full" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PanelContainer>
        </Admin>
    )
}

export default DataHistory