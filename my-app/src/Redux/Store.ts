import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";
// import categoryValue from "./categoryValue";
// import countPage from "./countPage";

// const store = configureStore({
//   reducer: {
//     categoryValue: categoryValue,
//     countPage: countPage,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

export const store = configureStore({ reducer });
export type TStore = ReturnType<typeof store.getState>;
