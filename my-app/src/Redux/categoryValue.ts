import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryValue {
  catVal: number;
}

export const initialState: categoryValue = {
  catVal: 1,
};

const categotyValue = createSlice({
  name: "categotyValue",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.catVal = action.payload.catVal;
    },
  },
});

export const CatValAction = categotyValue.actions;
export default categotyValue.reducer;
