import { configureStore } from "@reduxjs/toolkit";
import { scrambleSlice } from "./features/scramble/scrambleSlice";
import { solvesSlice } from "./features/solves/solvesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      scramble: scrambleSlice.reducer,
      solves: solvesSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
