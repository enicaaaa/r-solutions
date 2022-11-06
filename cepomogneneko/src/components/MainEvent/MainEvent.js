import React from "react";
import "../../styles/MainEvent.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import nature from "../../assets/images/trashPicture1.jpeg";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";

const MainEvent = (props) => {
  const mainEventID = useParams();

  return (
    <div className="center-div-container">
      <Card sx={{ width: "75%", minWidth: "320px" }}>
        <CardMedia
          component="img"
          alt="Slike nije ucitana..."
          height="240"
          image={nature}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.MainEventObject.nazivRadneAkcije}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.MainEventObject.decription}
          </Typography>
          <div className="center-div-container">
            <div className="div-divider-80"></div>
          </div>
          <div className="center-div-container">
            <div>
              <Typography variant="body2" color="text.secondary">
                Date: 29.11.2022.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lokacija: Nis
              </Typography>
            </div>
            <div className="space-left-10px">
              <Box className="user-event__in-progress">
                <Brightness1Icon sx={{ color: "red" }} />
                <Typography variant="body2" color="text.secondary">
                  Nije Ocisceno
                </Typography>
              </Box>
            </div>
          </div>
          <div className="center-div-container">
            <div className="div-divider-80"></div>
          </div>
          <Typography variant="body2" color="text.secondary">
            Broj Prijavljenih: 89
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={"/events/123"}>Saznaj vise</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default MainEvent;
