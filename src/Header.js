import React from 'react'
import './header.css'
import amazonlogo from './logos/amazonlogo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication=()=>{
        if (user) {
            auth.signOut()
                .then(() => {
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    });
                })
                .catch(error => {
                    console.log('Error signing out:', error.message);
                });
        }
    }
  return (
    <div className='header'>
        <Link to='/'>
        <img className='header-logo' src={amazonlogo} alt="Amazon Logo"/>
        </Link>
        
        <div className='header-search'>
            <input className='search-input' type='text'/>
            <SearchIcon className='search-icon'/>
        </div>
        <div className='header-nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='nav-option' >
                <span className='nav-option1'>Hello</span>
                <span className='nav-option2'>{user ? 'SignOut' : 'SignIn'}</span>
            </div>
            </Link>
            <div className='nav-option'>
                <span className='nav-option1'>Returns</span>
                <span className='nav-option2'>& orders</span>
            </div>
            <div className='nav-option'>
                <span className='nav-option1'>Your</span>
                <span className='nav-option2'>Prime</span>
            </div>
            <Link to='/Checkout'>

            <div className='basket'>
                <ShoppingBasketIcon/>
                <span className='basket-count'>{basket.length}</span>

            </div>
            </Link>

        </div>
    
    
    
    </div>
  )
}

export default Header