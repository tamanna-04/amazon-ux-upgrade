import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return <nav className="header">
    <div className='top'>
      <Link to='/'>
        <img className='top__logo' src='https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png' alt=''></img>
      </Link>

      <div className='top__search'>
        <input type="text" className='top__searchInput' />
        <button type='submit' className='top__searchButton' ><SearchIcon className='top__searchIcon' /></button>
      </div>

      <div className='top__nav'>
        <Link to="/login" className='top__link'>
          <div className='top__option'>
            <span className='top__optionLineOne'>Hello, name!</span>   {/* ADD DROP DOWN HERE*/}
            <span className='top__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link to="/wishlist" className='top__link'>
          <div className='top__option'>
            <span className='top__optionLineOne'>Your</span>   {/*ADD DROPDOWN FOR MORE LISTS*/}
            <span className='top__optionLineTwo'>Wishist</span>
          </div>
        </Link>
        <Link to="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root" className='top__link'>
          <div className='top__option'>
            <span className='top__optionLineOne'>Your</span>
            <span className='top__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className='top__link'>
          <div className='top__optionBasket'>
            <ShoppingBasketIcon />
            <span className='top__optionLineTwo top__optionBasketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>

    <div className='bottom'>
      {/* <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-whitw text-sm'> */}
        <p >
           <Link to='#' className='bottom__menu'><MenuIcon className='bottom__menuAll'/>All</Link>
        </p>
        <div className='bottom__menuContent'>
          <p className='link'>
            <Link to="#" className='bottom__link'>Today's Deals</Link> |
            <Link to="#" className='bottom__link'> Bestsellers</Link> | 
            <Link to="#" className='bottom__link'> Gift Ideas</Link> | 
            <Link to="#" className='bottom__link'> Amazon miniTV</Link> | 
            <Link to="#" className='bottom__link'> Prime</Link> | 
            <Link to="#" className='bottom__link'> Sell</Link> | 
            <Link to="#" className='bottom__link'> Amazon Pay</Link> | 
            <Link to="#" className='bottom__link'> Other Services</Link>

           {/* <p>Today's Deals</p><p> | </p>
           <p>Bestsellers</p><p> | </p>
           <p>Gift Ideas</p><p> | </p>
           <p>Amazon miniTV</p><p> | </p>
           <p>Prime</p><p> | </p>
           <p>Sell</p><p> | </p>
           <p>Amazon Pay</p><p> | </p>
           <p>Other Services</p> */}
          </p>
        </div>
       
      {/* </div> */}
    </div>

  </nav>

}

export default Header
