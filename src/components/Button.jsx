import React from 'react';
import {Button} from '@mui/material';

const SubmitButton = ({ text, onClick }) => {
  return (
    <div style={{textAlign:'center'}}>
      <Button variant="contained" onClick={onClick} type="submit" style={{width:'100%', padding:'10px ', fontSize:'16px', borderRadius:'8px', margin:'3vh 0', textTransform:'Capitalize',  background:'#DE2121', cursor:'pointer'}}>
        <b>{text}</b>
      </Button>
    </div>
  );
};

export default SubmitButton;