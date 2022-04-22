import React, { useEffect, useState } from "react";
import { StyledMain } from "./Styles/Main.styled";

const MainPage = () => {
  const [featuredCuts, setFeaturedCuts] = useState([] as any[]);
  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=21&page=1&category_ids=1`
    )
      .then((response) => response.json())
      .then((result) => {
        setFeaturedCuts(result);
      });
    //   .catch((err) => console.log(err.name));
  }, []);

  return (
    <StyledMain>
      {featuredCuts.map((item) => (
        <img src={item.url} alt="" />
      ))}
      <br />
      <button>Show More ...</button>
    </StyledMain>
  );
};

export default MainPage;
