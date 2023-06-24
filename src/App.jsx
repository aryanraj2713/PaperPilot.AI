import "./App.css";
import Landing from "./Components/Landing";
import Error from "./Components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createAuth0Client } from "@auth0/auth0-spa-js";
function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
