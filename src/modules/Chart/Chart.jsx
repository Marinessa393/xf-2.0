import moment from 'moment';
import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from 'recharts'

const Chart = ({country}) => {
  return (
    <div className="singleCountryChart">
      <AreaChart width={1200} height={550} data={country}
        margin={{ top: 20, right: 10, left: 0, bottom:20 }}>
        <defs>
          <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorDeath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ad031f" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ad031f" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" tickSize={2}  tickFormatter={(v) => moment(v).format('DD/MM/YY')}/>
        <YAxis type="number" width={100} />
        <CartesianGrid strokeDasharray="3 8"/>
        <Tooltip labelFormatter={(v) =>  moment(v).format('DD MMM YYYY')}/>
        <Legend verticalAlign="top" height={36}/>
        <Area type="monotone" dataKey="Confirmed" stroke="#4843a7" fillOpacity={1} fill="url(#colorNew)" />
        <Area type="monotone" dataKey="Deaths" stroke="#7e2901" fillOpacity={1} fill="url(#colorDeath)" />
        <Area type="monotone" dataKey="Recovered" stroke="#2aa75a" fillOpacity={1} fill="url(#colorRecovered)" />
      </AreaChart>
    </div>
  )
}

export default Chart;
