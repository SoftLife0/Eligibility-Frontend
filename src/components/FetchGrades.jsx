import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const FetchGrades = ({ onSelectGrade, grades }) => {
    const [selectedGrade, setSelectedGrade] = useState('');

    const handleGradeSelect = (event) => {
        const selectedGrade = event.target.value;
        setSelectedGrade(selectedGrade);
        onSelectGrade(selectedGrade);
    };

    return (
        <TextField
            select
            label="Grade"
            value={selectedGrade}
            fullWidth
            margin="normal"
            onChange={handleGradeSelect}
            required
            size="small"

        >
            {grades.map(grade => (
                <MenuItem key={grade} value={grade}>
                    {grade}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default FetchGrades;