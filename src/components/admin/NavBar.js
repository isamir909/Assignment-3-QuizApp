import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {

  
  const handleLogout=()=>{
  }
  return (
       <div className='admin-container'>
      <header className="admin-header">
        <h1>🏫 sent jeviars</h1>
        <nav className='header-nav'>
          <div className='nav-elements' >
        <NavLink  to="/admin">{props.item1}</NavLink>
        <NavLink to="/profile">{props.item2}</NavLink>
        <NavLink onClick={handleLogout}>LogOut</NavLink>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
