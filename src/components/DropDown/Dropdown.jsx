import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];

const Dropdown = ({ options, value, handleDropdownChange }) => {
    const [selectedValue, setSelectedValue] = useState(value)
  return (
    <FormControl fullWidth>
      <Select
        id="demo-simple-select"
        size="small"
        renderValue={() => selectedValue}
        value={value}
        onChange={(e)=>{setSelectedValue(e.target.value)}}
      >
        {options.map((option) => {
          return <MenuItem value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
