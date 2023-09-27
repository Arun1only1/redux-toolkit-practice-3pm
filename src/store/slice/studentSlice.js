import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
  },
  reducers: {
    setStudents: (state, action) => {
      const newStudent = action.payload;

      state.students = [...state.students, newStudent];
    },
  },
});

export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;
