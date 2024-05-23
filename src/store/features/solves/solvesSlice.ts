import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type solves } from "~/server/db/schema";

type SolveState = {
  solves: (typeof solves.$inferSelect)[];
};

const initialState: SolveState = {
  solves: [],
};

export const solvesSlice = createSlice({
  name: "solves",
  initialState,
  reducers: {
    setSolves: (
      state,
      action: PayloadAction<(typeof solves.$inferSelect)[]>,
    ) => {
      state.solves = action.payload;
    },
  },
});

export const { setSolves } = solvesSlice.actions;
