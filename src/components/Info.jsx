import React from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';

const Info = ({ name, number, selectedOption, handleNameChange, handleNumberChange, handleOptionChange }) => {
    return (
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
    );
};

export default Info;
