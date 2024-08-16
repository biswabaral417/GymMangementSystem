import React from 'react'
import Announcements from './Announcements'
import AnnouncementsContextProvider from './AnnouncementsContext'
import './announcements.css'

export default function AnnnouncementLayout() {
    return (
        <AnnouncementsContextProvider>
            <Announcements />
        </AnnouncementsContextProvider>
    )
}
