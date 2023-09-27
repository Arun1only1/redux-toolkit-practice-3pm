import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ShowStudents = () => {
  const { students } = useSelector((state) => state.student);

  return (
    <div>
      {students.map((item) => {
        return (
          <Stack key={item.id} spacing={2} direction="row">
            <Typography variant="h6">{item.name}</Typography>
          </Stack>
        );
      })}
    </div>
  );
};

export default ShowStudents;
