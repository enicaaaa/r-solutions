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

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="../../../assets/trashPicture1.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

