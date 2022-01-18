import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Chart from '../modules/Chart/Chart';
import DatePicker from '../modules/Datepicker/DatePicker';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CurrentStats from '../modules/SinglePageCurrentStats/CurrentStats';

const SingleCountryPage = () => {
  const [date,setDate] = useState([null, null])
  const [value, setValue] = useState([null, null])
  const [country, setCountry] = useState();
  const [live, setLive] = useState();

  const params = useParams().countryId.slice(1);
  
  const navigate = useNavigate()


  useEffect(() => {
    const val = []
    const today = new Date();
    val[1] = formatDate(today);
    today.setDate(today.getDate() - 7);
    val[0] = formatDate(today);
    setDate(val);
    const countryCurrentInfo = JSON.parse(localStorage.getItem('Country'));
    setLive(countryCurrentInfo);
    console.log(countryCurrentInfo);
  }, []);

  const formatDate = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T00:00:00Z`
  }

  useEffect(() => {
    console.log(date)
    if (date[0] !== null && date[1] !== null) getDataByCountry();
  }, [date])


  const getDataByCountry = async () => {
    await axios.get(`https://api.covid19api.com/country/${params}?from=${date[0]}&to=${date[1]}`).then(d => { console.log(d); setCountry(d.data)})
    }

  const setNewDate = (value) => {
    setValue(value)
    if (value[0] !== null && value[1] !== null) {
      const val = [];
      val[0] = formatDate(value[0])
      val[1] = formatDate(value[1])
      setDate(val)
    }
  }

  const getFullStats = async () => {
    await axios.get(`https://api.covid19api.com/country/${params}`).then(d => setCountry(d.data));
    clearDate()
  }

  const clearDate = () => {
    setValue([null, null])
  }

  return (
    <div className='singlePage'>
      <div className="singlePageSidebar">
        <Button
          onClick={() => navigate('/')}
          startIcon={<ArrowBackIosIcon />}
          variant='outlined'
          color='error'
          size='small'
          sx={{ marginLeft: '30px', marginBottom: '50px' }}>
          Back
        </Button>
        <DatePicker value={value} setNewDate={setNewDate} clearDate={clearDate} />
        <Button
          fullWidth
          size="large"
          onClick={() => getFullStats()}
          sx={{ color: 'white', '&:hover': { textShadow: '0 0 4px #ad031f', background: '#ad031f48' } }}>
          Get full statistics
        </Button>
      </div>
      
      <div>
        <CurrentStats data={live}/>
        <Chart country={country} formatDate={formatDate}/>
      </div>
    </div>
  )
}

export default SingleCountryPage
