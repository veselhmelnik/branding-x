import { useState } from 'react';
//--styles and assets--//
import logo from 'assets/logo.svg';
import './header.scss'

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='wrapper'>
        <div className="cart">
          <span>CART ({count})</span>
        </div>
        <div className="menu">
          
        </div>
      </div>
    </div>
  )
}

export default Header