import React from 'react'
import "../../styles/MainEvent.scss";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nature from "../../assets/images/trashPicture1.jpeg"

const MainEvent = (props) => {
  return (
    <div className='center-div-container'>
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
        </CardContent>
        <CardActions>
          <Button size="small">Saznaj vise</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MainEvent;
