import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen ) return null; //early return
 
  return (
    <div className=' mx-2 px-5 pr-14 relative shadow-xl pb-32'>
      <div className='text-xl font-bold my-2 py-2 '>
      <Link to="/"><ul>Home</ul></Link>  
        <ul>Shorts</ul>
        <ul>Subscriptions</ul>
         </div>
         <hr/>
         <div>
        <ul className= 'font-bold text-l'><h1 className='text-2xl'>You ></h1>
          <li>Your channel</li>
          <li >History</li>
          <li >Watch Later</li>
          <li >Liked videos</li>
          <li >Your videos</li>
          <li >Your channel</li>
        </ul>
       </div>
       <hr/>
       <div>
        <ul className='font-bold text-l my-2'><h1 className='text-2xl'>Explore</h1>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
        </ul>
      </div>
      <hr/>
      <div className=' font-bold '>
        <h1>Settings</h1>
        <h1>Report history</h1>
        <h1>Help</h1>
      </div>
    </div>
  )
}

export default SideBar