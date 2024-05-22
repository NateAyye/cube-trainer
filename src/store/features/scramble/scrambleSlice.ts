import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getNewScramble } from "~/lib/utils";
import { type CubingEvent } from "~/types/cubing";

export interface ScrambleState {
  scramble: string;
}

const initialState: ScrambleState = {
  scramble: getNewScramble("3x3"),
};

export const scrambleSlice = createSlice({
  name: "scramble",
  initialState,
  reducers: {
    setScramble: (state, action: PayloadAction<string>) => {
      state.scramble = action.payload;
    },
    generateScramble: (state, action: PayloadAction<CubingEvent>) => {
      state.scramble = getNewScramble(action.payload);
    },
  },
});

export const { setScramble, generateScramble } = scrambleSlice.actions;
