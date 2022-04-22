import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledMain } from "./Styles/Main.styled";
import { RootState } from "../Redux/Store";

const MainPage = () => {
  const [featuredCuts, setFeaturedCuts] = useState([] as any[]);
  // const dispatch = useDispatch();
  // const countVal = useSelector<RootState, number>(
  //   (state) => state.countPage.countVal
  // );
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
      <button
        onClick={() => {
          console.log("countVal");
        }}
      >
        Show More ...
      </button>
    </StyledMain>
  );
};

export default MainPage;
