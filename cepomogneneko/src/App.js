import "./App.scss";
import Navbar from "./components/Navbar";
import Login from "./components/Login.js";
import MainEvent from "./components/MainEvent.js";
import CreateMainEvent from "./components/CreateMainEvent.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route index element={<h1>Main</h1>} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/events" element={<h1>Main events</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
