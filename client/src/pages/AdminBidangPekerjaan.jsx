import React from 'react'
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer'

const AdminBidangPekerjaan = () => {
  return (
    <Admin>
        <PanelContainer panelName="Bidang Pekerjaan" panelLink="/admin/data" nameButton="Kembali"></PanelContainer>
    </Admin>
  )
}

export default AdminBidangPekerjaan