import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import UserEvent from "./UserEvent/UserEvent";
import { GetAllUserEvents } from "../services/EventsServices";

const Feed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetAllUserEvents("user").then((response) => {
      setEvents(response);
    });
  },[]);

  return (
    <Grid container flexDirection="row" justifyContent="center" spacing={2}>
      {events.map(e => 
        <Grid key={e.id} item xs={12} sm={8} md={6} lg={5}>
          <UserEvent 
            flag={e.flag}
            img={e.imgBefore} 
            username={e.user.username}
            location={e.user.city} 
            time={"14min"}
            desc={e.description}
          />
        </Grid>)
      }
    </Grid>
  );
};

export default Feed;
