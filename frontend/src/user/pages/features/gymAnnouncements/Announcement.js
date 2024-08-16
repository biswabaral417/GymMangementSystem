import React from 'react'

export default function Announcement({ title, description,endDate,priority }) {

  return (
    <div className='announcementItemContainer'>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{endDate.split('T')[0]}</p>
      <p>{priority}</p>
    </div>
  )
}
