import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/componet.nav";
import Hoc from "./components/Hoc/hoc";
import Container from "./containers/Container";

function App() {
  return (
    <Hoc>
      <NavBar />
      <Container />
    </Hoc>
  );
}

export default App;
