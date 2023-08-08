import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav className='header_container'>
          <Link to="/" className='header_title'>
          Article
          </Link>
          <Link to="/sport" className='header_title'>
          Sport
          </Link>
          <Link to="/economic" className='header_title'>
          Economic
          </Link>
          <Link to="/politic" className='header_title'>
          Politic
          </Link>
      </nav>
    </>
  )
}

export default Header