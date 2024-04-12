import React, { useState} from 'react';
import Container from '@mui/material/Container'; 
// import { Grid, TextField, MenuItem} from '@mui/material';
import Info from './Info';


const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <Container>
        <br />
        <small className="text-muted" style={{fontSize:'18px'}}> Please fill the form with the details from your slip</small>

        {/* Render the Info component passing state variables and handlers */}
        <Info 
            name={name} 
            number={number} 
            selectedOption={selectedOption} 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} 
            handleOptionChange={handleOptionChange} 
        />
        {/* Other form elements can go here */}

        <h4 style={{fontSize:'1.5rem', marginBottom:'.5rem', fontWeight:'500'}}>Core Subjects</h4>

        


    </Container>
  )
}

export default Form;