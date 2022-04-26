import React, { useState } from "react";
import { StyledCategory } from "./Styles/Category.styled";
import { useDispatch } from "react-redux";
import { changeValue } from "../Redux/categoryValue";

const Category = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState<string>("1");
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNumber = e.target.value;
    setSelectedType(selectedNumber);
    dispatch(
      changeValue({
        catVal: selectedNumber,
      })
    );
  };

  return (
    <StyledCategory>
      <p>Selected Category</p>
      <select value={selectedType} onChange={handleCategoryChange}>
        <option value="1">Hets</option>
        <option value="2">Space</option>
        <option value="3">Funny</option>
        <option value="4">Sunglasses</option>
        <option value="5">Boxes</option>
        <option value="6">Caturday</option>
        <option value="7">Ties</option>
      </select>
    </StyledCategory>
  );
};

export default Category;
