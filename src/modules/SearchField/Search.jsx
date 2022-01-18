import { TextField, FormHelperText, FormControl, Typography } from '@mui/material'
import React from 'react'
import Rating from '../Rating/Rating'

const Search = () => {
  return (
    <div>
      <FormControl fullWidth sx={{margin: '30px 0'}}>
        <Typography variant="h6" color='#da132d'>Get statistic by country</Typography>
        <TextField size="small"
          color="error"
          type="text"
          variant="outlined"
          fullWidth sx={{ borderBottom: "1px solid white", color: 'white' }}
          />
        <FormHelperText sx={{color: 'white'}}>Country</FormHelperText>
      </FormControl>  
      <Rating/>    
    </div>
  )
}

export default Search
