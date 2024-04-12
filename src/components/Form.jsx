import React, { useState} from 'react';
import Container from '@mui/material/Container'; 
import { Grid, TextField, MenuItem} from '@mui/material';


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

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                <TextField
                    label="Enter your name"
                    value={name} // Use the state variable as the value of the TextField
                    fullWidth
                    margin="normal"
                    onChange={handleNameChange} 
                />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                <TextField
                    label="Enter your number"
                    value={number} // Use the state variable as the value of the TextField
                    fullWidth
                    margin="normal"
                    onChange={handleNumberChange} 
                />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="form-group">

                    <TextField
                    select
                    label="Which course did you offer"
                    value={selectedOption}
                    fullWidth
                    margin="normal"
                    onChange={handleOptionChange}
                    >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </TextField>
            </div>
        </Grid>
        
        </Grid>
    </Container>
  )
}

export default Form;