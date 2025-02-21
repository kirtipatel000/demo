import React from 'react'

function Backbutton(props) {
    function backword(){
        props.setshoweditform('hidden')
        props.setShowform('hidden')

    }
  return (
    <div>
        <div className='ms-[35%]'>
        <ion-icon name="arrow-back-circle-outline" style = {{'font-size':'50px'}}   onClick = {backword}></ion-icon>
        </div>
      
    </div>
  )
}

export default Backbutton
