import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import AdminLogin from './pages/adminLogin/AdminLogin'
import PageNotFound from '../components/pageNotFound/PageNotFound'
import MainContextProvider, { MainContext } from './contexts/MainContext'
import Navheader from './navigation/Navheader'
import ManageMembers from './pages/manageMembers/ManageMembers'
import ManageOfflinePayments from './pages/manageOfflinePayments/ManageOfflinePayments'
import ManageStaffs from './pages/manageStaffs/ManageStaffs'
import AttendanceSheets from './pages/attendanceSheets/AttendanceSheets'
import AnnnouncementLayout from './pages/announcements/AnnnouncementLayout'
import './adminLayout.css'


export default function AdminLayout() {
  const {user}=useContext(MainContext)
  if (!user) {
    return <AdminLogin />
  } else
    return (
      <div className='d_flx Pos_Rel'>
        <MainContextProvider>
          <Navheader />
          <div id='contentRootAdmin'>
            <Routes>
              <Route path='/admin/home' element={<HomePage />} />
              <Route path='/admin' element={<HomePage />} />
              <Route path='/admin/login' element={< AdminLogin />} />
              <Route path='/admin/announcements' element={< AnnnouncementLayout />} />
              <Route path='/admin/managemembers' element={< ManageMembers />} />
              <Route path='/admin/managepayments' element={< ManageOfflinePayments />} />
              <Route path='/admin/managestaffs' element={< ManageStaffs />} />
              <Route path='/admin/attendencesheet' element={< AttendanceSheets />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </MainContextProvider>
      </div>
    )
}