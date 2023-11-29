import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "animesh",
    role: "react developer",
    city: "lko",
    country: "india",
  },
  {
    id: 2,
    name: "aman",
    role: "react developer",
    city: "lko",
    country: "india",
  },
  {
    id: 3,
    name: "shakti",
    role: "java developer",
    city: "orisa",
    country: "india",
  },
  {
    id: 4,
    name: "uday",
    role: "php developer",
    city: "mathura",
    country: "india",
  },
];

export const dataSlice = createSlice({
  name: "dataslice",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
      // state = [...state, action.payload]
    },
    removeData: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
      // const newarr =  state.filter((item) => item.id !== action.payload);
      // state = newarr
    },
    editData: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload.id);
      debugger;

      if (index !== -1) {
        state[index] = action.payload;
      } else {
        console.log("no object with this id found");
      }
    },
  },
});

export const { addData, removeData, editData } = dataSlice.actions;

export default dataSlice.reducer;
