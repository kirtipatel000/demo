import React from 'react'

function Usertable(props) {
  return (
    <div className={props.activest}>
    <table className='w-full text-center customborder'>
      <thead className='customborder'>
        <tr>
        <th className='customborder'> User Id</th>
        <th className='customborder'> Id</th>
        <th className='customborder'>Title</th>
        <th className='customborder'> completed</th>
        </tr>


      </thead>
      <tbody className='customborder'>

        {
          props.UserData.map((user,index) => (
            <tr  key={index}>

              <td className='customborder'>{user.userId}</td>
              <td className='customborder'>{user.id}</td>
              <td className='customborder'>{user.title}</td>
              <td className='customborder'>{user.completed}</td>

            </tr>

          ))
        }
      </tbody>
    </table>
  </div>
  )
}

export default Usertable
