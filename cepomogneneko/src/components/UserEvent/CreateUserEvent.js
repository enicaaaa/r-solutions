import { Button, Card, CardActions, CardContent, CardHeader, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const CreateUserEvent = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  return(
    <Stack alignItems="center" justifyContent="center" display="flex">
      <Card>
        <CardHeader title="Napravi novo ciscenje"></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              sx={{ width: "500px"}}
              type="text"
              label="Username"
              value={"enica"}
              disabled={true}
            />
            <TextField
              sx={{ width: "500px"}}
              type="file"
              label="Ubaci sliku"
              value={image}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setImage(e.target.value);
            }}
          />
          {image ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUUkIS_UnDwlOjvXJ-BNIGTiLv3aADYW-8KIcFVNwBxhiqljaJVbfOnZUUjUes28c-Qk&usqp=CAU"></img> : ""}
            <Stack direction="row" spacing={2}>
              <Stack>
                <Checkbox
                  checked={checked}
                  onChange={(event) => {
                    if(event.target.checked) setChecked(true);
                    else setChecked(false);
                  }}              
                />
              </Stack>
              <Stack justifyContent="center" alignItems="center">Cisti odmah</Stack>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
            <Button 
              variant="contained" 
              onClick={() => {
                navigate("/feed")
            }}
            >Kreiraj</Button>
            <Button onClick={() => {
              setImage(null);
            }}>Ponisti</Button>
        </CardActions>
      </Card>
    </Stack>
  )
};

export default CreateUserEvent;
