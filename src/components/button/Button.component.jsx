import React from "react";
import { Button } from "@material-ui/core";

const InputText = ({ ...props }) => (
  <Button variant="contained" color="primary" {...props}>
    Ingresar
  </Button>
);

export default InputText;
