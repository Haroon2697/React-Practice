import React from 'react'


function Navbar() {
  return (

    
<nav className="flex justify-between bg-violet-500 dark:bg-slate-900 dark:text-white text-black py-5 ">

    <div className="logo">
        <span className="font-bold text-xl mx-9">
            Todo List
        </span>
    </div>
    <ul className="flex gap-8 mx-9">
    <li className="cursor-pointer hover:text-slate-400 transition-all">Home</li>
<li className="cursor-pointer hover:text-slate-400 transition-all ">Your Tasks</li>
    </ul>
</nav>
  )
}

export default Navbar