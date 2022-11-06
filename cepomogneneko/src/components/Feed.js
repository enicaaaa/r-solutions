import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import UserEvent from "./UserEvent/UserEvent";
import { GetAllEvents } from "../services/EventsServices";

const Feed = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetAllEvents().then((response) => {
      setEvents(response);
    });
  },[]);

  return (
    <Grid container flexDirection="row" justifyContent="center" spacing={2}>
      {/* <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid> */}

      {events.map(e => 
        <Grid key={e.id} item xs={12} sm={8} md={6} lg={5}>
          <UserEvent 
            flag={e.flag}
            img={e.imgBefore} 
            username={e.user.username}
            location={e.user.city} 
            time={"14min"}
          />
        </Grid>)
      }
    </Grid>
  );
};

export default Feed;
