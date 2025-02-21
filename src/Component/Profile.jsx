import React, { useState } from 'react'
import $ from 'jquery'
import jqvalidation from 'jquery-validation'

function Profile(props) {
  const [uname, setUname] = useState('')
  function formsubmit(ev) {
    ev.preventDefault();
   
    $.validator.addMethod("specialChars", function( value, element ) {
      var regex = new RegExp("^[a-zA-Z]+$");
      var value = value;

      if (!regex.test(value)) {
         return false;
      }
      return true;
  }, "invalid name");
    $("#user-info").validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 60,
          specialChars: true
        },
        lastname: {
          required: true,
          minlength: 2, // <-- removed underscore
          maxlength: 60,
          specialChars: true
        },
        email: {
          required: true,
         email : true
          
        },
        number: {
          required: true,
          minlength: 10, // <-- removed underscore
          maxlength: 10,
          
        }
      },
      message: {
        username  : {
          required: "this field is required",

         
        },
        lastname: {
          required: "Enter recipient name",
          minlength: "Name should be at least {0} characters long" // <-- removed underscore
        }
      },
      submitHandler: function (form) { 
        $.ajax(
          {
  
            url :'http://localhost/phppractice/ragister.php',
            method : 'POST',
            data : {
              name : $('#name').val(),
              last : $('#lastname').val(),
              eamil :$('#emaill').val(),
              number : $('#number').val(),
              gender : $('#gender').val()
            
            },
            async :false ,
            success : function(response){
              props.setshoweditform('hidden')
              props.getusers()
              
            },
            error : function (){
              alert('form data faild')
            }
      
          }
        )
      }
    });

  }
 
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen dark">
      
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Sign Up</h2>
          <form className="flex flex-col" onSubmit={formsubmit} id='user-info'>

            <input name='username' id='name'
              placeholder="First Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text" style={ {color:'white'}}
            /><br />
            <input name='lastname' id='lastname'
              placeholder="Last Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            /> <br />
            <input name='email' id='emaill'
              placeholder="Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
            />
            <input name='number' id='number'
              placeholder="mobail number"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
            />
           

            <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
              Gender
            </label>
            <select 
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input name='file' id='edit'
              placeholder="edit profile"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="file"
            />

            <p className="text-white mt-4">
              Already have an account?
              <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#"
              >Login</a
              >
            </p>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Profile
