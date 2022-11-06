import { Box, Button, Grid, Stack } from "@mui/material";
import UserEvent from "./UserEvent/UserEvent";

const Feed = () => {
  return (
    <Grid container flexDirection="row" justifyContent="center" spacing={2}>
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
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <UserEvent />
      </Grid>
    </Grid>
    // <Stack className="feed">

    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    //   <UserEvent />
    // </Stack>
  );
};

export default Feed;
