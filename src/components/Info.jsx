import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const Info = ({ name, number, email, courseOffered, courses, handleNameChange, handleNumberChange, handleCourseOffered, handleEmailChange }) => {

    const grid = {
        paddingTop: '0'
    }


    return (
        <Grid container spacing={2}>
            
            <Grid item xs={12} style={grid}>
                <div className="form-group">
                    <TextField
                        label="Full Name"
                        value={name} 
                        fullWidth
                        margin="normal"
                        placeholder="Name" 
                        type="text"
                        onChange={handleNameChange} 
                        required
                        style={{paddingTop:'0'}}
                        size="small"

                    />
                </div>
            </Grid>
            <Grid item xs={12} style={grid}>
                <div className="form-group">
                    <TextField
                        label="Phone number"
                        value={number} 
                        fullWidth
                        placeholder="0244500300" 
                        type="text"
                        margin="normal"
                        onChange={handleNumberChange} 
                        required
                        size="small"
                    />
                </div>
            </Grid>
            <Grid item xs={12} style={grid}>
                <div className="form-group">
                    <TextField
                        label="Email Address"
                        value={email} 
                        fullWidth
                        placeholder="john@gmail.com" 
                        type="email"
                        margin="normal"
                        onChange={handleEmailChange} 
                        required
                        size="small"

                    />
                </div>
            </Grid>
            <Grid item xs={12} style={grid}>
                <TextField
                    select
                    label="Which course did you offer"
                    value={courseOffered}
                    fullWidth
                    margin="normal"
                    onChange={handleCourseOffered}
                    required
                    size="small"
                >
                    {courses.map((course) => (
                        <MenuItem key={course} value={course}>
                            {course}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    );
};

export default Info;
