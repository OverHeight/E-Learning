import React from "react";
import Button from "@mui/material/Button";
import { AiOutlineCheck } from "react-icons/ai";

const MarkButton = () => {
  return (
    <Button variant="outlined" color="inherit" startIcon={<AiOutlineCheck />}>
      mark as done
    </Button>
  );
};

export default MarkButton;
