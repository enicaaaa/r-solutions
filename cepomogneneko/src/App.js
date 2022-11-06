// import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import MainEventList from "./components/MainEvent/MainEventList";
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";

function App() {
  return (
    <Container className="app" sx={{ display: "flex" }}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Button
            variant="contained"
            className="create-user-event"
            style={{
              backgroundColor: "white",
            }}
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              border: "4px solid transparent",
              color: "lightgreen",
              ":hover": {
                bgColor: "lightgreen",
                border: "4px solid lightgreen",
              },
              position: "absolute",
              top: 80,
            }}
            size="large"
          >
            Prijavi mesto
          </Button>
        </div>
        <Stack className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/events" element={<MainEventList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </Container>
  );
}

export default App;
