import React, { useState } from 'react'
import Containt from './Containt';

function Counter() {
  const [counter,setCounter] = useState(0);
  const [studentcnt,setStudentcnt] = useState(45000);
  const [placment ,setPlacement] = useState(0);
  function updatecount(){
    
    setCounter(counter+1)
  }
  function updatecount1(){
    setCounter(counter-1)
  }

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>{counter}</h1>
    <button onClick={updatecount} className='bg-blue-300 p-4 text-xl rounded ms-5'>incress</button>
    <button onClick={updatecount1} className='bg-red-500 p-4 text-xl rounded ms-8' >dectrees </button>
    <Containt countnum={counter} countnumset={setCounter} student={studentcnt} setstudent={setStudentcnt}
    studentplacement={placment} setstudentplac ={setPlacement}/>
    
    </div>
    
  )
}

export default Counter
