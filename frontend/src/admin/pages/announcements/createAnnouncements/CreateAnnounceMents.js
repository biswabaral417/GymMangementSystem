import React from 'react'
import addAnnouncement from './addAnnouncement'
import { useState } from 'react';


export default function CreateAnnounceMents() {
  console.log(Date.now())
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const[title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [priority,setPriority]=useState('normal')

  return (
    <>
      <form className='addAnnouncementModal' onSubmit={(e)=>addAnnouncement(e,{date,title,desc,priority})}>
        <h1>Create a new announcement</h1>
        <input type="text" id='announcementTitle' placeholder='announcement title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea id='announcementDescription' placeholder='annoncement description'  value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <select name="priority" id="createAnnouncementPriority" value={priority} onChange={(e)=>setPriority(e.target.value)}>
          <option value="high">high</option>
          <option value="normal">normal</option>
          <option value="low">low</option>
        </select>
        <input type="date" name="date" value={date} id="endDateforAnnouncemet" onChange={(e)=>setDate(e.target.value)} />
        <button type='submit' id='postAnnouncementButton'>Post Announcement</button>
      </form>
    </>
  )
}

