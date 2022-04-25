import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface countPage {
  countVal: number;
}

export const initialState: countPage = {
  countVal: 10,
};

type TPayload = {
  countVal: number;
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
