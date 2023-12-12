import React from 'react'

// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer';


const AdminData = () => {

  return (
    <Admin>
      <PanelContainer panelName="Panel Data" panelLink="/admin/dashboard" nameButton="Kembali">


      </PanelContainer>
    </Admin>
  )
}

export default AdminData