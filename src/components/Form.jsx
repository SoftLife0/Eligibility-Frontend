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
                    <MenuItem value="general-art">General Arts</MenuItem>
                    <MenuItem value="science">Science</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="visual-arts">Visual Arts</MenuItem>
                    <MenuItem value="home-economics">Home Economics</MenuItem>
                    <MenuItem value="agriculture">Agriculture</MenuItem>
                </TextField>
            </div>
        </Grid>
        
        </Grid>

        <h4 style={{fontSize:'1.5rem', marginBottom:'.5rem', fontWeight:'500'}}>Core Subjects</h4>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                <TextField
                    label="Enter your number"
                    value="Mathematics"
                    fullWidth
                    margin="normal"
                    disabled
                />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">

                    <TextField
                    select
                    label="Grade"
                    value="Mathematics"
                    fullWidth
                    margin="normal"
                    >
                        <MenuItem value="A1">A1</MenuItem>
                        <MenuItem value="B2">B2</MenuItem>
                        <MenuItem value="B3">B3</MenuItem>
                        <MenuItem value="C4">C4</MenuItem>
                        <MenuItem value="C5">C5</MenuItem>
                        <MenuItem value="C6">C6</MenuItem>
                        <MenuItem value="D7">D7</MenuItem>
                        <MenuItem value="E8">E8</MenuItem>
                        <MenuItem value="F9">F9</MenuItem>
                        <MenuItem value="None">None</MenuItem>
                    
                </TextField>
                </div>
            </Grid>
        
        </Grid>


    </Container>
  )
}

export default Form;