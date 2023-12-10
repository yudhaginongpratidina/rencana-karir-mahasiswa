import React from 'react'

// IMPORT TEMPLATE, ELEMENTS, COMPONENTS
import Admin from '../components/template/Admin'
import PanelContainer from '../components/PanelContainer';
import Button from '../components/elements/Button'

const AdminData = () => {
  return (
    <Admin>
      <PanelContainer panelName="Data" panelLink="/admin/data">
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4 mt-4'>
          <Button name="Tambah Pekerjaan (P)" color="green" variant="w-full"/>
          <Button name="Tambah Kriteria (G)" color="green" variant="w-full"/>
          <Button name="Tambah Rule (R)" color="green" variant="w-full"/>
        </div>
      </PanelContainer>
    </Admin>
  )
}

export default AdminData