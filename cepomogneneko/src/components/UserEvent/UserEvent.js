import { Title } from "@mui/icons-material";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import nature from "../../assets/images/nature.jpeg";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const UserEvent = () => {
  return (
    <>
      <Box className="user-event__in-progress">
        <Brightness1Icon sx={{ color: "red" }} />
        in Progress
      </Box>
      <Card className="user-event">
        <div className="user-event__info-container">
          <img className="user-event__image" src={nature} alt="nature" />
          <div className="user-event__event-info">
            <div className="user-event__user-name">
              Created by: Djordje Stamenkovic
            </div>
            <div className="user-event__event-location">
              Location: Nis, Serbia
            </div>
            <div className="user-event__event-timer">Timer: 14 min</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserEvent;
