import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab';
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const DatePicker = ({value, setNewDate, clearDate}) => {
  return (
    <div className='datePicker'>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <StaticDateRangePicker
          displayStaticWrapperAs="mobile"
          value={value}
          disableFuture
          onChange={(newValue) => {
            setNewDate(newValue);
          }}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        endIcon={< QueryStatsIcon />}
        className='showStat'
        onClick={() => clearDate()}
        sx={{ background: '#86072de6', display: 'flex', margin: '30px auto', '&:hover': { background: '#df0333' } }}>
        Reset
      </Button>
    </div>
  )
}

export default DatePicker
