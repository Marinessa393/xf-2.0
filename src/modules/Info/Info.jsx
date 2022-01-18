import React from 'react'

const Info = ({ data }) => {
  return (
    <div>
      <p>New Confirmed: <span className="boldText"> {data?.NewConfirmed}</span></p>
      <p>Total Confirmed: <span className="boldText"> {data?.TotalConfirmed}</span></p>
      <p>New Deaths: <span className="boldText"> {data?.NewDeaths}</span></p>
      <p>Total Deaths: <span className="boldText"> {data?.TotalDeaths}</span></p>
      <p>New Recovered: <span className="boldText"> {data?.NewRecovered}</span></p>
      <p>Total Recovered: <span className="boldText"> {data?.TotalRecovered}</span></p>
    </div>
  )
}

export default Info
