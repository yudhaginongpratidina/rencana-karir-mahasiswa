import React from 'react'
import { Link } from 'react-router-dom'

const PanelContainer = (props) => {
    const { panelName, panelLink, children } = props
    return (
        <div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 xl:mb-0'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-medium'>{panelName}</h1>
                <Link to={panelLink} className='text-white border py-2 px-4 bg-green-500 rounded-lg'>Lihat Semua</Link>
            </div>
            {children}
        </div>
    )
}

export default PanelContainer