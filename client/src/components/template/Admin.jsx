import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import AdminNavbar from '../AdminNavbar'
import AdminFooter from '../AdminFooter'

const Admin = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        const localStorageKey = 'Credentials'
        const credentials = JSON.parse(localStorage.getItem(localStorageKey))
        if (!credentials) {
          navigate('/login')
        }
    })
    
    const { children } = props
    return (
        <div>
            <AdminNavbar />
                {children}
            <AdminFooter />
        </div>
    )
}

export default Admin