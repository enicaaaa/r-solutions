import "../styles/Profile.scss";
// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import nature from "../assets/images/nature.jpeg";
import Stack from "@mui/material/Stack";
import "../styles/Profile.scss";
import Typography from '@mui/material/Typography';

const Profile = () => {
  return (
    <div className="center-div-container">
      <Card sx={{ width: "75%", minWidth: "320px"}}>
        <CardContent>
          <Stack direction="column" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={nature}
              sx={{ width: 100, height: 100 }}
            />
            <br/>
            <Typography sx={{ fontSize: "22px" }} color="text.primary" gutterBottom>
              Kraljica Djubradi
            </Typography>
            <div className="div-divider-username"></div>
            <Typography sx={{ fontSize: "18px" }} color="text.secondary" gutterBottom>
              Mnogo volim djubre, pogotovo da ga bacam u smece :)
            </Typography>
            <div className="div-divider-descrption"></div>
            <Typography sx={{ fontSize: "18px" }} color="text.secondary" gutterBottom>
              Broj ciscenja: 3
            </Typography>
            <Typography sx={{ fontSize: "18px" }} color="text.secondary" gutterBottom>
              Ukupan broj sati: 16h
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  )
}
export default Profile;
