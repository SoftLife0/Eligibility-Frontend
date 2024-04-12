import React from 'react';
import {Button} from '@mui/material';

const SubmitButton = ({ onClick, text }) => {
  return (
    <Button variant="contained" onClick={onClick} style={{textAlign:'center', width:'100%', margin:'4vh 0', background:'#dc3545'}}>
      {text}
    </Button>
  );
};

export default SubmitButton;