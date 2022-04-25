import { useEffect, useState } from "react";
import { StyledMain } from "./Styles/Main.styled";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../Redux/countPage";
import { TStore } from "../Redux/Store";

const MainPage = () => {
  const [featuredCuts, setFeaturedCuts] = useState([] as any[]);
  const dispatch = useDispatch();
  const countVal = useSelector((state: TStore) => state.CatValReducer);
  const catVal = countVal.catVal;
  const countPage = useSelector((state: TStore) => state.CauntPageReducer);
  const countImg = countPage.countVal;

  const handleImgCountChange = () => {
    // console.log(countPage);
    // console.log(catVal);
    dispatch(changeCount({ countVal: countPage.countVal + 10 }));
    if (countPage.countVal > 90) {
      alert("Finish this Category");
      dispatch(changeCount({ countVal: 10 }));
    }
  };

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${countImg}&page=1&category_ids=${catVal}`
    )
      .then((response) => response.json())
      .then((result) => {
        setFeaturedCuts(result);
      });
  }, [catVal, countImg]);

  return (
    <StyledMain>
      {featuredCuts.map((item) => (
        <img src={item.url} alt="" />
      ))}
      <br />
      <button onClick={handleImgCountChange}>Show More ...</button>
    </StyledMain>
  );
};

export default MainPage;
