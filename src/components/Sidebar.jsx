import React from 'react'
import logo from './Games__1_-removebg-preview-removebg-preview.png';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  return (

    <div className='w-[269px] h-[100%] bg-[#1C1E2A] z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] fixed left-0'><div id='p' className='flex gap-[6px] items-center justify-center  '><img src={logo} className=' w-[68px]'/><h2 id='games'>GLOBAL GAMES</h2> </div>
    
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
<li
key={key}
className='row'
id={window.location.pathname == val.link ? "active" : ""}
onClick={() => {
  window.location.pathname = val.link;
}}
>
<div id='icon'>{val.icon}</div><div id='tilte'>{val.title}</div>
</li>

          )
        }
        
        
        )}
      </ul>
    </div>
    </div>
  )
}
