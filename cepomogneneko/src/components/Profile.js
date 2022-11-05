// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import nature from "../assets/images/nature.jpeg";
import Stack from "@mui/material/Stack";

const Profile = () => {
  return (
    //     <Stack
    //       // direction="row"
    //       sx={{ justifyContent: "center" }}
    //     >
    //       <Card sx={{ maxWidth: 345 }}>
    //         <CardActionArea>
    //           <Stack alignItems="center">
    //             <Avatar
    //               alt="Remy Sharp"
    //               src={nature}
    //               sx={{ width: 100, height: 100 }}
    //             />
    //           </Stack>
    //           <CardContent>
    //             <Typography gutterBottom variant="h5" component="div">
    //               Djordje Stamenkovic
    //             </Typography>
    //             <Typography variant="body2" color="text.secondary">
    //               Lizards are a widespread group of squamate reptiles, with over
    //               6,000 species, ranging across all continents except Antarctica
    //             </Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Card>
    //     </Stack>
    //   );
    // };
    <Card sx={{ maxWidth: "360px" }}>
      <CardContent>
        <Stack direction="column" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={nature}
            sx={{ width: 100, height: 100 }}
          />
          <br />
        </Stack>
      </CardContent>
    </Card>
  );
};
export default Profile;
