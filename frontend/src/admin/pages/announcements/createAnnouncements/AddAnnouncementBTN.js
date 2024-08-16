import React, { useContext } from 'react'
import  { openModal } from './openModals'
import { AnnouncementsContext } from '../AnnouncementsContext'

export default function AddAnnouncementBTN() {
  const {setToggleAddAnnouncements}=useContext(AnnouncementsContext)
  return (
    <button className='announcementItemContainer' onClick={()=>openModal({toggleAddAnnouncements:setToggleAddAnnouncements})}>
      +
      <p>Add Announcements</p>
    </button>
  )
}
