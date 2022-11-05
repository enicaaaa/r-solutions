import "./App.scss";
import Navbar from "./components/Navbar";
import Login from "./components/Login.js";
import MainEvent from "./components//MainEvent/MainEvent.js";
import CreateMainEvent from "./components/MainEvent/CreateMainEvent.js";
import MainEventList from "./components/MainEvent/MainEventList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
          
            <Route path="/feed" element={<Feed />} />
            <Route path="/events" element={<MainEventList/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
