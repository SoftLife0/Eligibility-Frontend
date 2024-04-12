// CoreSubjectField.jsx
import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';

const CoreSubjectField = ({ subject, grade, options, onGradeChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className="form-group">
          <TextField
            // label={`Enter your ${subject}`}
            value={subject}
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
            value={grade}
            fullWidth
            margin="normal"
            onChange={onGradeChange}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>
      </Grid>
    </Grid>
  );
};

export default CoreSubjectField;
