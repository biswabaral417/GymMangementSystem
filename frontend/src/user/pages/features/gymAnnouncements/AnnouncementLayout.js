import React from 'react'
import AnnouncementsContextProvider from './AnnouncementContext'
import GymAnnouncements from './GymAnnouncements'
import './gymAnnouncements.css'



export default function AnnouncementLayout() {
  return (
    <AnnouncementsContextProvider>
      <GymAnnouncements />
    </AnnouncementsContextProvider>)
}
