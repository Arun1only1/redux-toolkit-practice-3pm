import { useState } from "react";
import "./App.css";
import StudentForm from "./StudentForm";
import ShowStudents from "./ShowStudents";
import CustomSnackbar from "./CustomSnackbar";

function App() {
  return (
    <>
      <CustomSnackbar />
      <StudentForm />
      <ShowStudents />
    </>
  );
}

export default App;
