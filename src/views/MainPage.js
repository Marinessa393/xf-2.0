import React, { useEffect, useState } from 'react'
import Map from '../modules/Map/Map';
import Sidebar from '../modules/Sidebar/Sidebar'
// import { getCurrentSummary } from '../utils/covidApiService';
import axios from 'axios';
import { useNavigate } from 'react-router';


const MainPage = () => {
  const [data, setData] = useState([]);
  const [tooltip, setTooltip] = useState();
  const [show, setShow] = useState(false);

  const navigate = useNavigate()

    useEffect(() => {
    const getApiData = async() => {
      await axios.get('https://api.covid19api.com/summary').then(d => {
        setData(d.data)
      })
    }
    getApiData()
  }, [])


    const fillTooltip = (geo) => {
    console.log("geo", geo)
    const country = data.Countries.filter(el => el.CountryCode === geo.properties.ISO_A2)[0]
    setTooltip(country)
    setShow(true)
  }

  const hideTooltip = () => {
    setTooltip();
    setShow(false)
  }

  const openCountryInfoPage = (geo) => {
    const country = data.Countries.filter(el => el.CountryCode === geo.properties.ISO_A2)[0];
    localStorage.setItem('Country', JSON.stringify(country))
    navigate(`:${country.Slug}`)
  }

  const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

  return (
    <div className='mainPage'>
      <Sidebar data={data} />
      <div className='map'>
        <Map fillTooltip={fillTooltip} hideTooltip={hideTooltip} openCountryInfoPage={openCountryInfoPage} geoUrl={geoUrl} />
      </div>

        {show && tooltip &&
          <>
      <div className='tooltip'>
            <p>{tooltip?.Country}</p>
            <p>New Confirmed: {tooltip?.NewConfirmed}</p>
            <p>Total Confirmed: {tooltip?.TotalConfirmed}</p>
            <p>New Deaths: {tooltip?.NewDeaths}</p>
            <p>Total Deaths: {tooltip?.TotalDeaths}</p>
            <p>New Recovered: {tooltip?.NewRecovered}</p>
            <p>Total Recovered: {tooltip?.TotalRecovered}</p>
      </div>
          </>}
    </div>
  )
}

export default MainPage
