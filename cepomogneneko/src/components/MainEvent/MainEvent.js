import React from 'react'


// const MainEvent = (props) => {

//   console.log("Ovo je main Event" + props.MainEventObject.nazivRadneAkcije)
//   return (
//     <div>
//           <h3>{props.MainEventObject.nazivRadneAkcije}</h3>

//           <h3>{props.MainEventObject.lokacija}</h3>
  
//           <h3>{props.MainEventObject.decription}</h3>

//           <h3>{props.MainEventObject.pictureInput}</h3>

//           <h3>{props.MainEventObject.startDate}</h3>

//       </div>
//   )
// }

// export default MainEvent

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nature from "../../assets/images/trashPicture1.jpeg"

const MainEvent = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Slike nije ucitana..."
        height="160"
        image={nature}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.MainEventObject.nazivRadneAkcije}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.MainEventObject.decription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MainEvent;
