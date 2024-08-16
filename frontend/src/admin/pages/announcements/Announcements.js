import React, { useContext } from 'react'
import AddAnnouncementBTN from './createAnnouncements/AddAnnouncementBTN'
import Announcement from './Announcement'
import { AnnouncementsContext } from './AnnouncementsContext'
import CreateAnnounceMents from './createAnnouncements/CreateAnnounceMents'

export default function Announcements() {
  const { toggleAddAnnouncements, announcements } = useContext(AnnouncementsContext)
  return (
    <>
      {
        toggleAddAnnouncements && <CreateAnnounceMents />
      }
      <div className="d_grid announcementContainer">
        <AddAnnouncementBTN toggleAddAnnouncements={toggleAddAnnouncements} />
        {
          announcements.length > 0 && announcements.map(announcement =>
            <Announcement key={announcement._id} _id={announcement._id} title={announcement.title} priority={announcement.priority} description={announcement.description} endDate={announcement.endDate} />
          )
        }
      </div>
    </>
  )
}

