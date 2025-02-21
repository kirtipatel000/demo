import { Outlet, Link } from "react-router-dom";
import React,{useState} from 'react'

function Navbar() {
    const [open,SetOpen] = useState(false)
    const showmenu=()=>{
      open == true   ? SetOpen(false): SetOpen(true)

    }
  return (
    <div className='flex w-full justify-center text-xl bg-gray-500 text-black h-[100px] items-center'>
      <div className='w-[10%] font-bold text-3xl'>Logo</div>
      <div className='w-[90%] lg:self-center sm:self-center self-start mt-24 lg:mt-0 sm:mt-0 text-white '>
        <ul className={"grid md:grid-cols-9 sm:grid-cols-9 lg:grid-cols-9 grid-cols-1  sm:grid md:grid lg:grid bg-gray-500 w-full"  + 
            (open=== true ? ' grid': ' hidden')}>
            <li><Link to="/Changdcase">Chage Case</Link></li>
            <li><Link to="/fetchdata">Fetchdata</Link></li>
            <li><Link to="/resizer">Resizer</Link></li>
            <li><Link to="/animation">Animation</Link></li>
            <li><Link to="/counter">Interval counter</Link></li>
            <li><Link to="/calcutator">Calculator</Link></li>
            <li><Link to="/theme">theme</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/Usermenegment">UserForms</Link></li>
           
        </ul>
      </div>
      <div className='w-[20%] sm:hidden md:hidden lg:hidden block font-bold text-4xl text-orange-500 ' onClick={showmenu}>
      <ion-icon name={(open === true ? "close" : "menu" )}></ion-icon>
      </div>
    </div>
  )
}

export default Navbar
