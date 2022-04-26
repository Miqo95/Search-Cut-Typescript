import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../../Redux/countPage";
import { TStore } from "../../Redux/Store";
import * as SC from "./assets/styles";
// import { cutHeats } from "../../json/cutApi";

const MainPage = () => {
  const [featuredCuts, setFeaturedCuts] = useState([] as any[]);
  const dispatch = useDispatch();
  const countVal = useSelector((state: TStore) => state.CatValReducer);
  const catVal = countVal.catVal;
  const countPage = useSelector((state: TStore) => state.CauntPageReducer);
  const countImg = countPage.countVal;

  const handleImgCountChange = () => {
    dispatch(changeCount({ countVal: countPage.countVal + 10 }));
    if (countPage.countVal > 90) {
      alert("Finish this Category");
      dispatch(changeCount({ countVal: 10 }));
    }
  };

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${countImg}&page=0&category_ids=${catVal}`
    )
      .then((response) => response.json())
      .then((result) => {
        setFeaturedCuts(result);
      });
  }, [catVal, countImg]);

  return (
    <SC.StyledMain>
      {featuredCuts.map((item) => (
        <img src={item.url} alt="" key={item.id} />
      ))}
      <br />
      <button onClick={handleImgCountChange}>Show More ...</button>
    </SC.StyledMain>
  );
};

export default MainPage;
