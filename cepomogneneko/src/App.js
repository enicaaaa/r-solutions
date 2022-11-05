import "./App.scss";
import Header from "./components/Navbar";
import Login from "./components/Login.js";
import MainEvent from "./components/MainEvent.js";
import CreateMainEvent from "./components/CreateMainEvent.js";

function App() {
  return (
    <>
      <Header />
      <Login />
      <MainEvent
        nazivRadneAkcije="Ocistimo Nisavu"
        lokacija="Nis"
        decription="Ljudi, ajde da se skupimo i ocustimo ovu nasu reku :)"/>
      <CreateMainEvent />
    </> 
  );
}

export default App;
