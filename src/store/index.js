import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slice/studentSlice";
import snackbarReducer from "./slice/snackbarSlice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
    snackbar: snackbarReducer,
  },
});
