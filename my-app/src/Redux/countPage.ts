import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface countPage {
  countVal: number;
}

export const initialState: countPage = {
  countVal: 10,
};

const categotyValue = createSlice({
  name: "categotyValue",
  initialState,
  reducers: {
    changeValue(state, action) {
      state.countVal = action.payload.countVal;
    },
  },
});

export const CatValAction = categotyValue.actions;
export default categotyValue.reducer;
