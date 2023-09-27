import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { openSuccessSnackbar } from "./store/slice/snackbarSlice";
import { setStudents } from "./store/slice/studentSlice";
import { getRandomId } from "./utils/generate.random.id";

const StudentForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Name is required."),
      })}
      onSubmit={(values) => {
        const newStudent = values;
        newStudent.id = getRandomId();

        dispatch(setStudents(newStudent));

        dispatch(openSuccessSnackbar("Student added successfully!"));
      }}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <Box
          sx={{
            width: "20vw",
            padding: "2rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography variant="h4">Student Form</Typography>
            <TextField label="Name" {...getFieldProps("name")} />
            {touched.name && errors.name ? (
              <FormHelperText error>{errors.name}</FormHelperText>
            ) : null}

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default StudentForm;
