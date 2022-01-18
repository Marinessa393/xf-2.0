import React from 'react'
import Info from '../Info/Info'
import Search from '../SearchField/Search'

const Sidebar = ({ data }) => {
  return (
    <div className='sidebar'>
      <Info data={data.Global} />
      <Search/>
    </div>
  )
}

export default Sidebar
