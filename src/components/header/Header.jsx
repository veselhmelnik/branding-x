import { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg'
import {IoMdStats, IoIosLogOut} from 'react-icons/io'
//--styles and assets--//
import logo from 'assets/logo.svg';
import './header.scss'

const Header = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const dropMenuRef = useRef(null);

  useEffect(() => {
    if (isActive) return;
    const handleClick = e => {
      if(!dropMenuRef.current) return;
      if (!dropMenuRef.current.contains(e.target)) {
        onDrop();
      }
    };
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick);
    }
  },[isActive, onDrop]);

  function onDrop() {
    setIsActive(isActive => !isActive);
  }

  return (
    <div className='header'>
      <div className="logo">
        <a href=""><img src={logo} alt="logo" /></a>
      </div>
      <div className='wrapper'>
        <div className="cart">
          <span>CART ({count})</span>
        </div>
        <div ref={dropMenuRef} className="menu" onClick={onDrop}>
          <DropDown isActive={isActive}/>
        </div>
      </div>
    </div>
  )
}

const DropDown = (props) => {

    const clazz = props.isActive ? 'dropDown hidden' : 'dropDown';
  return (
    <ul className={clazz}>
      <a href=''><li><CgProfile/>Profile</li></a>

      <a href='/statistic'><li><IoMdStats/>Statistic</li></a>

      <a href='/logout'><li><IoIosLogOut/>LogOut</li></a>
    </ul>
  )
}

export default Header