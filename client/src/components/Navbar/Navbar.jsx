import React from 'react'
import { AiOutlineArrowDown, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { MdFavorite } from 'react-icons/md'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          <div className='navbar-item'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/1200px-Flag_of_the_United_Kingdom.png?20080216232030' alt='eng-flag'/>
            <AiOutlineArrowDown />
          </div>
          <div className='navbar-item'>
            <span>USD</span>
            <AiOutlineArrowDown />
          </div>
          <div className='navbar-item'>
            <Link className='link' to='products/1'>Women</Link>
          </div>
          <div className='navbar-item'>
            <Link className='link' to='products/2'>Men</Link>
          </div>
          <div className='navbar-item'>
            <Link className='link' to='products/3'>Children</Link>
          </div>
        </div>
        <div className='navbar-center'>
          <Link className='link' to='/'>HM Clone Store</Link>
        </div>
        <div className='navbar-right'>
        <div className='navbar-item'>
          <Link className='link' to='/'>Home</Link>
        </div>
        <div className='navbar-item'>
          <Link className='link' to='/'>About</Link>
        </div>
        <div className='navbar-item'>
          <Link className='link' to='/'>Contact</Link>
        </div>
        <div className='navbar-item'>
          <Link className='link' to='/'>Store</Link>
        </div>
        <div className='navbar-icons'>
          <AiOutlineSearch/>
          <GoPerson/>
          <MdFavorite/>
          <div className='cart-icon'>
          <AiOutlineShoppingCart/>
          <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar