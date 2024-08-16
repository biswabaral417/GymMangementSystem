import React, { useContext } from 'react'
import { AnnouncementsContext } from './AnnouncementContext'
import Announcement from './Announcement'

export default function GymAnnouncements() {
  const { announcements } = useContext(AnnouncementsContext)

  return (
    <>
      <div className="d_grid announcementContainer">
        {
          announcements.length > 0 && announcements.map(announcement =>
            <Announcement key={announcement._id} _id={announcement._id} title={announcement.title} priority={announcement.priority} description={announcement.description} endDate={announcement.endDate} />
          )
        }
      </div>
    </>
  )
}


