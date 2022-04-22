import React from "react";
import "./App.css";
import Category from "./Components/Category";
import MainPage from "./Components/MainPage";
import { Container } from "./Components/Styles/Container.styled";

function App() {
  return (
    <Container>
      <Category />
      <MainPage />
    </Container>
  );
}

export default App;
