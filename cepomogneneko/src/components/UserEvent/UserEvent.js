import { useState } from "react";
import { Title } from "@mui/icons-material";
import { Card } from "@mui/material";
import { Box, Stack } from "@mui/system";
import nature from "../../assets/images/nature.jpeg";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Link } from "react-router-dom";
import TimerIcon from "@mui/icons-material/Timer";

const UserEvent = (props) => {
  return (
    <Stack className="user-event u-border-radius-20">
      <Link to="/feed/1" className="u-text-decoration-none">
        <Box className="user-event__in-progress">
          <Brightness1Icon
            sx={{ color: "red", fontSize: 15, marginRight: 1 }}
          />
          Čišćenje u toku
        </Box>
        <Card className="user-event__info-container u-border-radius-20">
          <img className="user-event__image" src={nature} alt="nature" />
          <Stack className="user-event__event-info">
            <Box className="user-event__user-name">
              Postavio/la: Djordje Stamenkovic
            </Box>
            <Box className="user-event__event-location">
              Lokacija: Nis, Serbia
            </Box>
            <Box className="user-event__event-timer">
              <TimerIcon /> 0
            </Box>
          </Stack>
        </Card>
      </Link>
    </Stack>
  );
};

export default UserEvent;
