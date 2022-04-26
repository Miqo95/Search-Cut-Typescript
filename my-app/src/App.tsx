import React from "react";
import "./App.css";
import Category from "./Components/Category/Category";
import MainPage from "./Components/MainPage/MainPage";
import { Container } from "./assets/Container.styled";

function App() {
  return (
    <Container>
      <Category />
      <MainPage />
    </Container>
  );
}

export default App;
