import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { CreateEventttttt } from "../../services/EventsServices";
import Chip from '@mui/material/Chip';

const CreateUserEvent = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" marginTop="10px" justifyContent="center" display="flex">
      <Card sx={{ minWidth: "200px" }}>
        <CardHeader title="Napravi novo ciscenje"></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              sx={{ width: "500px" }}
              type="text"
              label="Name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <TextField
              sx={{ width: "500px" }}
              type="text"
              label="Description"
              value={desc}
              onChange={(e) => { setDesc(e.target.value) }}
            />
            <Chip variant="contained" sx={{ backgroundColor: "green", color: "white", minWidth: "20px"}} label={checked ? "Čišćenje u toku" : "Neočišćeno"}/>
            <TextField
              sx={{ width: "500px" }}
              type="file"
              label="Ubaci sliku"
              value={image}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            {image && (
              <img src="https://pbs.twimg.com/media/EYuyHUqWsAEMtcs?format=jpg&name=360x360"></img>
            )}
            <Stack direction="row" spacing={2}>
              <Stack>
                <Checkbox
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) setChecked(true);
                    else setChecked(false);
                  }}
                />
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                Cisti odmah
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => {
              CreateEventttttt({
                id: localStorage.getItem('guid'),
                name: name,
                description: desc,
                flag: checked ? "Čišćenje u toku" : "Neočišćeno",
                ImgBefore: image,
                type: "user",
                points: 0,
                eventCreatedAt: Date.now()
              }).then((response) => {
                // navigate("/feed");
              });
            }}
          >
            Kreiraj
          </Button>
          <Button
            onClick={() => {
              setImage(null);
            }}
          >
            Ponisti
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default CreateUserEvent;
