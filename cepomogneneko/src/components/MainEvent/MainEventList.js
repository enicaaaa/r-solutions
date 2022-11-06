import React, { useEffect } from 'react'
import MainEventThumblr from './MainEventThumblr'
import "../../styles/Profile.scss";
import { useState } from 'react';
import { GetAllUserEvents } from '../../services/EventsServices';
import Stack from "@mui/material/Stack";

const MainEventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetAllUserEvents("user").then(respponse => {
      setEvents(respponse);
    });
  },[])

  return (
    <div className='make-space-for-navbar'>
      {events.map(e => 
          <Stack key={e.id}>
            <MainEventThumblr MainEventObject={e}/>
            <div className='spacer-between-main-events'></div>
          </Stack>
      )}
    </div>
  )
}

export default MainEventList;
