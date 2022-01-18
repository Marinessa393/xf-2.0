import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const Map = ({fillTooltip, hideTooltip, openCountryInfoPage, geoUrl}) => {
  return (
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey}
            geography={geo}
            onMouseEnter={() => fillTooltip(geo)}
            onMouseLeave={() => hideTooltip()}
            onClick={() => openCountryInfoPage(geo)}
            style={{
                    default: {
                      fill: "#ffffff",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}/>)
        }
        </Geographies>
      </ComposableMap>
  )
}

export default Map
