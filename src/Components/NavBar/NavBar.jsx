import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './settings.png'


function NavBar () {
    return (
        <AppBar position="static" style={{backgroundColor: 'white'}}>
            <Toolbar>
                <Box sx={{
                    width: '10%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}>
                    <img src={logo} alt='logo' height={45} width={45}></img>
                    <Typography variant="h6" style={{color: 'black'}}>Logo</Typography>
                </Box>
                <Box sx={{
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Button variant="outlined">Log in</Button>
                    <Button variant="contained">Register</Button>  
                </Box>
            </Toolbar>        
        </AppBar>
    )
}

export default NavBar;