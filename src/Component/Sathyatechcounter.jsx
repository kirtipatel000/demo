import React, { useState, useEffect } from 'react'

function Sathyatechcounter(props) {
    
    useEffect(() => {
       let intrvalcount= setInterval(function () {
        if(props.countnum1 <25){
            props.countnumset1(props.countnum1 + 1)
        }
    }, 50)
    let studentinterval = setInterval(function(){
        if(props.student1 <50000)
            {
                props.setstudent1(props.student1+50)
            }
    },10)
    let placeinterval = setInterval(function(){
        if(props.studentplac1 < 70)
            {
                props.setstudentplace1(props.studentplac1+1)
            }
    },20)
        return () => {clearInterval(intrvalcount),
            clearInterval(studentinterval),
            clearInterval(placeinterval)
        }


    },[props.countnum1,props.student1,props.studentplac1] )
    

    return (
        <div>
            <div className='grid grid-cols-3 gap-6 mt-7'>

                <div>
                    <h1 className='text-blue-500 text-3xl font-bold'>{props.countnum1}</h1>
                    <p className='text-orange-300 text-2xl'>{props.countnum1} Years of excellence</p>
                </div>
                <div>
                    <h1 className='text-blue-500 text-3xl font-bold'>{props.student1}
                        +</h1>
                    <p className='text-orange-300 text-2xl'>Students</p>
                </div>
                <div>
                    <h1 className='text-blue-500 text-3xl font-bold'>{props.studentplac1}
                    </h1>
                    <p className='text-orange-300 text-2xl'>Students got placed</p>
                </div>
            </div>
        </div>
    )
}

export default Sathyatechcounter
