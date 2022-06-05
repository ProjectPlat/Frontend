import * as React from 'react';
import Button from '@mui/material/Button';
import './NavBar.css'
import logo from './settings.png'


function NavBar () {

    return (
        <div className='navbar-container'>
          <div className='logo-container'>
            <img src={logo} alt='icon' className='logo'></img>
            <h2>Logo</h2>
          </div>
          <div className='buttons-container'>
            <Button variant="outlined">Log in</Button>
            <Button variant="contained">Register</Button>  
          </div>         
        </div>
    )

}

export default NavBar;