import { Title } from "@mui/icons-material";
import { Card } from "@mui/material";
import { Box, Stack } from "@mui/system";
import nature from "../../assets/images/nature.jpeg";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { Link } from "react-router-dom";

const UserEvent = ({ flag, img, username, location, time }) => {
  return (
    <Stack className="user-event u-border-radius-20">
      <Link to="/feed/1" className="u-text-decoration-none">
        <Box className="user-event__in-progress">
          <Brightness1Icon sx={{ color: "red" }} />
          {flag}
        </Box>
        <Card className="user-event__info-container u-border-radius-20">
          <img className="user-event__image" src={img} alt="nature" />
          <Stack className="user-event__event-info">
            <Box className="user-event__user-name">
              Postavio/la: {username}
            </Box>
            <Box className="user-event__event-location">
              Lokacija: {location}
            </Box>
            <Box className="user-event__event-timer">Tajmer: {time}</Box>
          </Stack>
        </Card>
      </Link>
    </Stack>
  );
};

export default UserEvent;
