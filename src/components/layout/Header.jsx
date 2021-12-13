import { useState } from 'react';
import logo from '../../assets/meet.png'
import { useUser } from '../../context/UserContext'
import './Header.css'

const Header = () => {
  const {user} = useUser();
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${user.color}` }}>{user.name}</span>!
      </p>
    </header>
  )
}

export default Header
