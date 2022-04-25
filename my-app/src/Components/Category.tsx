import React, { useState } from "react";
import { StyledCategory } from "./Styles/Category.styled";
import { useDispatch } from "react-redux";
import { changeValue } from "../Redux/categoryValue";
import { data } from "./data";

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
        {data.map((item: any) => {
          return <option value={item.value}>{item.type}</option>;
        })}
      </select>
    </StyledCategory>
  );
};

export default Category;
