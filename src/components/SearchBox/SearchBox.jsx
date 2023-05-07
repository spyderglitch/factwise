import React, { useState } from 'react'
import './SearchBox.scss';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from "@mui/icons-material/Clear";

const SearchBox = () => {
        // const { search } = useStyles();
      
        const [showClearIcon, setShowClearIcon] = useState("none");
      
        const handleChange = (event) => {
          setShowClearIcon(event.target.value === "" ? "none" : "flex");
        };
      
        const handleClick = ()  => {
          // TODO: Clear the search input
          console.log("clicked the clear icon...");
        };
  return (
    <div className='search-box'>
        <FormControl fullWidth>
        <TextField id="outlined-basic" variant="outlined" size='small' type='search' 
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            )}}
        />
      </FormControl>
    </div>
  )
}

export default SearchBox;
