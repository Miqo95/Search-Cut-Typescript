import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryValue {
  catVal: string;
}

const initialState: categoryValue = {
  catVal: "1",
};

type TPayload = {
  catVal: string;
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
// export default categotyValue.reducer;
