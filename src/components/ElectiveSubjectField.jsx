import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const ElectiveSubjectField = ({ elective, electiveOptions, grade, gradeOptions, onElectiveChange, onGradeChange }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        select
                        label="Elective"
                        value={elective}
                        fullWidth
                        margin="normal"
                        onChange={onElectiveChange}
                    >
                        {electiveOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        select
                        label="Grade"
                        value={grade}
                        fullWidth
                        margin="normal"
                        onChange={onGradeChange}
                    >
                        {gradeOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
        </Grid>
    );
};

export default ElectiveSubjectField;