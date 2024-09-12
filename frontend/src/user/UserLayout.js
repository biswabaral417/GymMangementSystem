import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
// import Login from './pages/auth/login/Login'
import NavContainer from './navigation/NavContainer'
import Footer from './footer/Footer'
import PageNotFound from '../components/pageNotFound/PageNotFound'
import Todo from './pages/features/todo/Todo'
import AnnouncementLayout from './pages/features/gymAnnouncements/AnnouncementLayout'
// import Register from './pages/auth/register/Register'
import AuthBox from './pages/auth/AuthBox'
import Report from './pages/features/report/Report'
import Services from './pages/ourServices/Services'
import AboutUs from './pages/aboutUs/AboutUs'
import Membership from './pages/membership/Membership'
import './userLayout.css'
import './userLayout.mobile.css'
import MainContextProvider from './contexts/mainContext'
import Recomendation from './recomendations/Recomendation'
import GetMembership from './MembershipForm/GetMembership'
export default function UserLayout() {
    return (
        <>
            <MainContextProvider>
                <NavContainer />
                <div id='contentRoot'>
                    <Routes>
                        <Route path='' element={<HomePage />} />
                        <Route path='/' element={<HomePage />} />
                        <Route path='/user' element={<HomePage />} />
                        <Route path='/user/' element={<HomePage />} />
                        <Route path='/user/login' element={<AuthBox />} />
                        <Route path='/user/todo/*' element={<Todo />} />
                        <Route path='/user/announcements' element={<AnnouncementLayout />} />
                        <Route path='/user/login/register' element={<AuthBox />} />
                        <Route path='/user/report' element={<Report />} />
                        <Route path='/user/services' element={<Services />} />
                        <Route path='/user/Aboutus' element={<AboutUs />} />
                        <Route path='/user/Membership' element={<Membership />} />
                        <Route path='/user/dietrecomendations' element={<Recomendation />} />
                        <Route path='/user/getMembership' element={<GetMembership />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer />
            </MainContextProvider>
        </>
    )
}
