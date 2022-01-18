import styled from '@emotion/styled';
import { Typography } from '@mui/material'
import React from 'react'

const StyledTitle = styled('p')({
  fontSize: '20',
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "3rem",
    lineHeight: 1.167,
    letterSpacing: "0em",
  margin: '40px 30px',
    color: 'white'
});

const CurrentStats = ({data}) => {
  return (
    <>
      <StyledTitle>{data?.Country}</StyledTitle>
      <div className="currentStats">
        <div>
          <Typography variant="subtitle1" color="white">New Confirmed: {data?.NewConfirmed}</Typography>
          <Typography variant="subtitle1" color="white">New Deaths: {data?.NewDeaths}</Typography>
          <Typography variant="subtitle1" color="white">New Recovered: {data?.NewRecovered}</Typography>
        </div>
        <div>
          <Typography variant="subtitle1" color="white">Total Confirmed: {data?.TotalConfirmed}</Typography>
          <Typography variant="subtitle1" color="white">Total Deaths: {data?.TotalDeaths}</Typography>
          <Typography variant="subtitle1" color="white">Total Recovered: {data?.TotalRecovered}</Typography>
        </div>
      </div>
      </>
  )
}

export default CurrentStats
