import React from 'react';
import Btn from '../Components/Btn'
import '../Styles/NavBar.css'

function NavBar () {

    return (
        <div className='navbar-container'>
          <Btn text='Log in' type='outlined'/>
          <Btn text='Register' type='contained'/>
        </div>
    )

}

export default NavBar;