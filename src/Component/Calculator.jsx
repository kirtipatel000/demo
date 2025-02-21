import React, { useState } from 'react'

function Calculator() {
  const [calcinout, setCalcinout] = useState('')
  function calculate(val) {
    if (val == '=') {
      let output = eval(calcinout);
      setCalcinout(output);
    } else {
      typeof (val) != 'object' ? setCalcinout(calcinout + String(val)) : '';
    }


  }
  let calcdigits = ['%', 'CE', 'C', <ion-icon name="backspace-outline"></ion-icon>, '1/x', <span><sub>x</sub>2</span>, <span>2&#8730;x</span>, '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '00', '.', '=']
  function chageinputval(e) {
    setCalcinout(e.target.value);

  }

  return (
    <div>
      <div className='mt-[5%] ms-[40%] w-[550]'>
        <div>
          <input type="text" className='border-2 border-black w-[500px] h-[50px] rounded text-xl' value={calcinout} placeholder='0' onChange={chageinputval} readOnly /></div>

        <div className=' grid grid-cols-4  w-[500px]  justify-center gap-1 mt-
     bg-blue-300 '>

          {
            calcdigits.map(Element => (
              <div className='text-center mt-4 pb-2'>
                <button className='bg-blue-800 rounded h-[60px]  w-[100px] p-2  text-white text-xl font-bold' onClick={() => { calculate(Element) }}>{Element}</button>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Calculator
