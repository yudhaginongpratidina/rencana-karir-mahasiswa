import React from 'react'

// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer';
import PanelItem from '../components/PanelItem';


const AdminData = () => {

  return (
    <Admin>
      <PanelContainer panelName="Panel Data" panelLink="/admin/dashboard" nameButton="Kembali">

        <div className='py-2 px-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <PanelItem Name="Panel" Count="Data Bidang" Url="/admin/data/bidang" Variant="bg-blue-500 text-white" />
          <PanelItem Name="Panel" Count="Data Pekerjaan" Url="/admin/data/pekerjaan" Variant="bg-green-500 text-white" />
          <PanelItem Name="Panel" Count="Data Kriteria" Url="/admin/data/kriteria" Variant="bg-red-500 text-white" />
          <PanelItem Name="Panel" Count="Data Rule" Url="/admin/data/rule" Variant="bg-indigo-500 text-white" />

          <PanelItem Name="panel" Count="Data Riwayat" Url="/admin/data/riwayat" Variant="bg-yellow-500 text-white" />
        </div>

      </PanelContainer>
    </Admin>
  )
}

export default AdminData