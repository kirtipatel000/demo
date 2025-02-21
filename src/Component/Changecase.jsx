import React, { useState } from 'react'

function Changecase() {
  const [content, setContent]= useState('');
  const [textlength,setTextlength]=useState(0);
  const [wordcount,setWordcount]=useState(0)
  function changevalue(val){
    if(val.target.value.length<=100){
      setContent(val.target.value);
    setTextlength(val.target.value.length);
    } 
    let coutnt=  val.target.value.split(' ')
    setWordcount(coutnt.length)

  }
  function changeup(){
    setContent(content.toUpperCase())
  }
  function changelw(){
    setTextlength(content.toLowerCase())
  }
 
  return (
    <div className=' text-2xl bg-orange-300 h-[600px]'>
      <textarea name="" className='w-[700px] h-[300px]   mt-6 ms-[30%]' placeholder='Enter Text' value={content} onChange={changevalue}>

      </textarea><br />
      <div className=' flex justify-center items-center w-[700px] bg-black h-[100px] m-auto text-white text-center mt-5'>Word Count :  {wordcount}
      <br/>Text Length : {textlength}/100</div>
      <div className='flex gap-7 mt-7 justify-center text-white '>
      <button className='bg-black h-12 w-[150px] rounded hover:bg-gray-500' onClick={changelw}>Lowercase</button>
      <button className='bg-black h-12 w-[150px] rounded  hover:bg-gray-500'onClick={changeup}>Uppercase</button>
     
    </div>
    </div>
  )
}

export default Changecase
