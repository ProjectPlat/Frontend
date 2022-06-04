import * as React from 'react';
import Button from '@mui/material/Button';
import '../Styles/Btn.css'

function Btn ({ text, type }) {
    return (
      <div className='btn-container'>
        <Button variant={type} className='btn'>{text}</Button>
      </div>
    );
}

export default Btn;