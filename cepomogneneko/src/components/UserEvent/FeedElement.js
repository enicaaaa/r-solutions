import { Card, Divider, Modal, TextField } from "@mui/material";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import nature from "../../assets/images/nature.jpeg";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FeedElement = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("useEffect");
  //     if (localStorage.getItem("isAdmin")) {
  //       setIsAdmin(true);
  //     }
  //   }, []);

  return (
    <Card className="feed-element">
      <CardMedia
        component="img"
        height="250"
        image={nature}
        alt="feed-element-image"
      />
      <CardContent>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Grad: Nis
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Ulica i broj:
          </Typography>
        </Stack>
      </CardContent>
      <Divider />
      <CardContent>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Status:
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Trajalo: 3h
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Broj ucesnika: 3
          </Typography>
        </Stack>
      </CardContent>
      <Divider />
      <CardContent>
        <Stack>
          <Typography variant="body3" color="text.secondary">
            Postavio/la: Djordje Stamenkovic
          </Typography>
        </Stack>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Button sx={{ flexGrow: "1", margin: 0 }}>Započni</Button>
        <Button onClick={handleOpen} sx={{ flexGrow: "1", margin: 0 }}>
          Zaustavi
        </Button>
        <Button sx={{ flexBasis: "100%" }} size="small">
          Uključi i mene
        </Button>
        {isAdmin && (
          <Button sx={{ flexBasis: "100%" }} size="medium">
            Potvrdi
          </Button>
        )}
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ width: "auto", marginBottom: "20px" }}
            type="file"
            label="Unesite dokaz o čišćenju"
            value={image}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          {image && (
            <img
              style={{ marginBottom: 20 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUUkIS_UnDwlOjvXJ-BNIGTiLv3aADYW-8KIcFVNwBxhiqljaJVbfOnZUUjUes28c-Qk&usqp=CAU"
            ></img>
          )}
          <Button
            variant="contained"
            onClick={() => {
              navigate("/feed");
            }}
            disabled={image === undefined}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default FeedElement;
