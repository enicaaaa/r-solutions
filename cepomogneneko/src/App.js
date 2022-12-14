import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import MainEventList from "./components/MainEvent/MainEventList";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import MainEvent from "./components/MainEvent/MainEvent";
import CreateUserEvent from "./components/UserEvent/CreateUserEvent";
import Login from "./components/Login.js";
import FeedElement from "./components/UserEvent/FeedElement";

const App = () => {
  return (
    <BrowserRouter>
      <Container className="app" sx={{ display: "flex" }}>
        <Navbar />
        <Stack className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" />} />
            <Route path="/login" element={<Login to="/login" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/events" element={<MainEventList />} />
            <Route path="/events/:id" element={<MainEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-user-event" element={<CreateUserEvent />} />
            <Route path="/feed/:id" element={<FeedElement />} />
          </Routes>
        </Stack>
      </Container>
    </BrowserRouter>
  );
};

export default App;
