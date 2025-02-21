import React from 'react'
import Fetchdata from './Fetchdata.jsx'

function Theme(props) {
  
  return (
    <div >

      
     
     <Fetchdata ctheme={props.ctheme} updatetheme={props.updatetheme}/>
    </div>
  )
}

export default Theme
