import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

const InputText = ({ handleChange, label, id, ...props }) => (
  <div className="mb-2 px-5">
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Input id={id} onChange={handleChange} fullWidth {...props} />
    </FormControl>
  </div>
);

export default InputText;
