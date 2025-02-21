import React, { useState, useEffect } from 'react'
import $, { error } from 'jquery'
import Usermenegment from './Usermenegment';
import Profile from './Profile';
import Backbutton from './Backbutton';

function Userlists() {
    const [userdata, setUserdata] = useState([]);
    const [showform, setShowform] = useState('hidden')
    const [showeditform, setshoweditform] = useState('hidden')
    function getusers() {
        $.ajax({
            url: 'http://localhost/phppractice/getuser.php',
            method: 'GET',
            async: false,
            success: function (respons) {
                setUserdata(JSON.parse(respons))

            },
            error: function (er) {
                setUserdata(er);
            }
        })
    }
    useEffect(() => {
        getusers();

    }, [])
    function showuserforms() {
        setShowform('block')
    }
    function Editprofileuser(id) {

        setshoweditform('block')
        $ajax ({
            url : 'http://localhost/phppractice/getuserdata.php',
            method : 'POST',
            data:{
                 user_id :id

            },
            success : function(result){


            },
            error : function (err){
                console.log(err)
            }

        })
    }
    function deleteuser(userid) {
        let conf = confirm("Are you sure you Want to Delete This")
        if (conf == false) {
            return false;
        }
        $.ajax({
            url: 'http://localhost/phppractice/delet.php',
            method: 'Post',
            data: {
                userid: userid
            },
            success: function (result) {
                alert(result)
                getusers();
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    return (
        <div>
            <div className={showform}>
                <Backbutton setShowform={setShowform} setshoweditform={setshoweditform}/>
                <Usermenegment showform={showform} setShowform={setShowform} getusers={getusers} />


            </div>
            <div className={showeditform}>
                <Backbutton setshoweditform={setshoweditform} setShowform={setShowform}/>
                <Profile showeditform={showeditform} setshoweditform={setshoweditform} getusers={getusers} />


            </div>

            <div className={(showform == 'hidden' && showeditform == 'hidden') ? ' block' : 'hidden'} >


                <button className='bg-slate-500 text-white h-[35px] w-[100px] rounded text-center ms-[80%] text-xl mt-5 hover:bg-orange-400 mb-[2px]' onClick={showuserforms} >+ADD</button>
                <div className='grid grid-cols-8 w-auto text-center text-xl'>
                    <div className='bordered'>ID</div>
                    <div className='bordered'>Name</div>
                    <div className='bordered'>Last</div>
                    <div className='bordered'>Email</div>
                    <div className='bordered'>Number</div>
                    <div className='bordered'>Gender</div>
                    <div className='bordered'>Created</div>
                    <div className='bordered'>Action</div>
                </div>
                {
                    userdata.map((data) => (
                        <div className='grid grid-cols-8 w-auto text-center text-xl'>
                            <div className='bordered'>{data.Id}</div>
                            <div className='bordered'>{data.name}</div>
                            <div className='bordered'>{data.lastname}</div>
                            <div className='bordered'>{data.email}</div>
                            <div className='bordered'>{data.number}</div>
                            <div className='bordered'>{data.gender}</div>
                            <div className='bordered'>{data.created_at}</div>
                            <div className='bordered'><ion-icon name="create-outline" onClick={() => { Editprofileuser(data.Id) }}></ion-icon> Edit <ion-icon name="trash-outline" style={{ color: 'red' }} onClick={() => { deleteuser(data.Id) }}></ion-icon> Delete</div>
                        </div>


                    ))
                }

            </div>
        </div>

    )
}

export default Userlists
