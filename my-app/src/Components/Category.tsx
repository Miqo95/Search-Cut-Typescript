import React from "react";
import { StyledCategory } from "./Styles/Category.styled";

const Category = () => {
  return (
    <StyledCategory>
      <p>Selected Category</p>
      <select>
        <option value={1}>Hets</option>
        <option value={2}>Space</option>
        <option value={3}>Funny</option>
        <option value={4}>Sunglasses</option>
        <option value={5}>Boxes</option>
        <option value={6}>Caturday</option>
        <option value={7}>Ties</option>
      </select>
    </StyledCategory>
  );
};

export default Category;
