import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  countVal: number;
};
export const initialState = {
  countVal: 10,
};

const countPageValue = createSlice({
  name: "countPageValue",
  initialState,
  reducers: {
    changeCount(state, { payload }: PayloadAction<TPayload>) {
      state.countVal = payload.countVal;
    },
  },
});

export const CauntPageReducer = countPageValue.reducer;
export const { changeCount } = countPageValue.actions;
