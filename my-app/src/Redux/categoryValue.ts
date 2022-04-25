import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  catVal: string;
};

const initialState = {
  catVal: "1",
};

const categotyValue = createSlice({
  name: "categotyValue",
  initialState,
  reducers: {
    changeValue(state, { payload }: PayloadAction<TPayload>) {
      state.catVal = payload.catVal;
    },
  },
});

export const CatValReducer = categotyValue.reducer;
export const { changeValue } = categotyValue.actions;
