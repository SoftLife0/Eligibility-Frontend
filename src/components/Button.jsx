import React from 'react';
import {Button} from '@mui/material';

const SubmitButton = ({ onClick, text }) => {
  return (
    <div style={{textAlign:'center'}}>
      <Button variant="contained" onClick={onClick} style={{width:'50%', padding:'15px ', borderRadius:'8px', margin:'4vh 0', background:'#DE2121', cursor:'pointer'}}>
        <b>{text}</b>
      </Button>
    </div>
  );
};

export default SubmitButton;